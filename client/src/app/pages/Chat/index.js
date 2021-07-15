import { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Dialog, SendMessageForm } from '../../components';
import { ChatFormProvider } from '../../contexts';
import { scrollToBottom } from '../../utils';

const Chat = memo(({ id, emitMessage, allMessages }) => {
  const [message, setMessage] = useState('');
  const dialogRef = useRef();
  const messageFormRef = useRef();

  useEffect(() => {
    const resizeDialogAndScrollToBottom = () => {
      const {
        current: { offsetHeight: messageFormOffsetHeight },
      } = messageFormRef;

      const {
        current: {
          main: dialogMain,
          container: dialogContainer,
        },
      } = dialogRef;
      dialogMain.style.bottom = `${messageFormOffsetHeight}px`;
      scrollToBottom(dialogContainer);
    };

    resizeDialogAndScrollToBottom();
  }, [allMessages, message]);

  const sendMessage = () => {
    const trimMessage = message.replace(/^\s+|\s+$/g, '');
    emitMessage(trimMessage);
    setMessage('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isUnPrepared = !!(
      !message
      || !message.trim()
      || (message && !message.replace(/\n/g, ''))
    );
    if (isUnPrepared) return;

    setMessage('');
    sendMessage();
  };

  return (
    <>
      <Dialog ref={dialogRef} id={id} allMessages={allMessages} />
      <ChatFormProvider value={{ message, setMessage, onSubmit }}>
        <SendMessageForm ref={messageFormRef} />
      </ChatFormProvider>
    </>
  );
});

Chat.displayName = 'Chat';

Chat.propTypes = {
  id: PropTypes.string.isRequired,
  emitMessage: PropTypes.func.isRequired,
  allMessages: PropTypes.array.isRequired,
};

export default Chat;
