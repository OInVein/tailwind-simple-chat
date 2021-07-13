require('dotenv').config();
const http = require('http');
const colors = require('colors');
const webSocket = require('socket.io');
const { getDate } = require('./utils');

const { PORT = 5000 } = process.env;

colors.enable();

const server = http.createServer().listen(PORT, () => {
  console.log('SERVER:'.cyan, 'server on'.green, `${PORT}`.red);
});

const io = webSocket(server, {
  cors: {},
});

const users = {};
io.on('connection', (client) => {
  console.log('SERVER:'.cyan, 'success connect!'.green);

  const { id } = client;

  client.on('username', (name) => {
    console.log('SERVER:'.cyan, 'user'.green, name.red, 'has come in'.green);

    const user = { name, id };
    users[id] = user;

    io.emit('connected', user);
    io.emit('message', {
      text: '',
      date: getDate(),
      isNew: true,
      user,
    });
    io.emit('users', Object.values(users));
  });

  client.on('send', (message) => {
    const user = users[id];
    console.log('SERVER:'.cyan, 'listen send!'.green);

    io.emit('message', {
      text: message,
      date: getDate(),
      user,
    });
  });

  client.on('disconnect', () => {
    const user = users[id];
    const userName = user?.name || '';
    console.log('SERVER:'.cyan, userName.red, 'has disconnected!'.green);

    io.emit('message', {
      text: '',
      date: getDate(),
      isLeaving: true,
      user,
    });
    delete users[id];
    io.emit('disconnected', id);
  });
});
