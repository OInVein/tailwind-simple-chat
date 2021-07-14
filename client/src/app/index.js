import { useEffect, useReducer, useRef } from 'react';
import { io } from 'socket.io-client';
import { withMainWrapper, Loading } from './components';
import { LoginPage, ChatPage } from './pages';
import { mainReducer, mainState } from './reducers';
import {
  STOP_LOADING,
  SET_ALL_USERS,
  SET_ALL_MESSAGES,
  CONNECTED,
  DISCONNECTED,
  SET_IS_LAST,
} from './constants';

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, mainState);
  const { nickName, webSocket, isLoading, isLast } = state;
  const nickNameRef = useRef();

  useEffect(() => {
    nickNameRef.current = nickName;
  }, [nickName]);

  useEffect(() => {
    if (!webSocket) return;

    console.log('%c CLIENT: %csuccess connected!', 'color: orange; font-size: 20px;', 'color: red; font-size: 20px;');

    dispatch({ type: STOP_LOADING });

    webSocket.on('connect', () => {
      const { current: nickNameMutable } = nickNameRef;
      webSocket.emit('username', nickNameMutable);
    });

    webSocket.on('users', (users) => {
      dispatch({ type: SET_ALL_USERS, payload: { users } });
    });

    webSocket.on('message', (message) => {
      dispatch({ type: SET_ALL_MESSAGES, payload: { message } });
    });

    webSocket.on('connected', (user) => {
      dispatch({ type: CONNECTED, payload: { user } });
    });

    webSocket.on('disconnected', (id) => {
      dispatch({ type: DISCONNECTED, payload: { id } });
    });
  }, [webSocket]);

  const { hasLogin } = state;

  const mainClassName = (() => {
    const defaultClassName= 'w-full h-full md:w-3/4 xl:w-1/2 md:h-[85%] md:rounded-xl relative';
    if (hasLogin) {
      const chatClassName = `
        ${defaultClassName}
        ${isLast ? 'flex items-center justify-center' : ''}
        animate-chatBackground md:tracking-wider
      `;
      return chatClassName;
    }

    const loginClassName = `
      ${defaultClassName}
      ${isLast ? 'justify-center' : ''}
      flex items-center flex-col bg-orange-200 py-0 px-10
    `;
    return loginClassName;
  })();

  const renderMainContent = (() => {
    if (isLoading) return <Loading />;

    if (!hasLogin) {
      const setLoginStatus = (nickName) => {
        const serverUrl = (() => {
          const env = process.env;
          const { NODE_ENV } = env;
          const isDEV = NODE_ENV === 'development';
          if (isDEV) {
            const { REACT_APP_DEV_SERVER_URL = ':5000' } = env;
            return REACT_APP_DEV_SERVER_URL;
          }

          const { REACT_APP_PROD_SERVER_URL } = env;
          return REACT_APP_PROD_SERVER_URL;
        })();
        dispatch({
          type: 'SET_LOGIN_STATUS',
          payload: {
            nickName,
            webSocket: io(serverUrl),
            isLoading: true,
            hasLogin: true,
          }
        });
      };
      const setIsLast = () => dispatch({ type: SET_IS_LAST });

      return <LoginPage setLoginStatus={setLoginStatus} setIsLast={setIsLast} isLast={isLast} />;
    }

    const id = webSocket?.id;
    if (!id) return <Loading />;

    const { allMessages } = state;
    const emitMessage = (message) => {
      webSocket.emit('send', message);
    };
    return (
      <ChatPage
        emitMessage={emitMessage}
        id={id}
        allMessages={allMessages}
      />
    );
  })();

  return (
    <main className={mainClassName}>
      {renderMainContent}
    </main>
  );
};

export default withMainWrapper(App);
