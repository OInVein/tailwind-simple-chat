import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { NicknameInput, SubmitButton, Greetings } from '../../components';

const Login = ({ setLoginStatus, isLast, setIsLast }) => {
  const [nickName, setNickName] = useState('');
  const nicknameInputRef = useRef();
  const submitButtonRef = useRef();
  const submitButtonIsDisabled = !nickName;
  const submitButtonStatus = !submitButtonIsDisabled ? '' : 'disabled';

  useEffect(() => {
    if (!isLast) return;

    setTimeout(() => {
      setLoginStatus(nickName);
    }, 1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLast]);

  const onChangeNickName = (e) => {
    const { target: { value } } = e;
    const trimValue = value.trim();
    setNickName(trimValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (submitButtonIsDisabled) return;

    setIsLast();
  };

  const renderPage = isLast
    ? <Greetings text={nickName} />
    : (
      <>
        <h1 className="w-full h-1/5 md:h-1/4 xl:h-1/5 flex justify-center items-center whitespace-nowrap font-bold text-shadow-md text-white text-4xl sm:text-5xl">
          CHAT ROOM
        </h1>
        <Greetings />
        <form data-testid="loginForm" onSubmit={onSubmit} className="w-full h-1/3 md:h-5/12 flex justify-center flex-col text-2xl sm:text-3xl gap-4 md:gap-6 z-10">
          <NicknameInput
            ref={nicknameInputRef}
            value={nickName}
            onChange={onChangeNickName}
          />
          <SubmitButton
            ref={submitButtonRef}
            status={submitButtonStatus}
            onSubmit={onSubmit}
          />
        </form>
      </>
    );

  return (
    <>
      {renderPage}
      <div
        className="
          overflow-hidden absolute bottom-0 flex justify-center w-[100vmin] h-[100vmin] bg-transparent
          after:content after:absolute after:w-[300%] after:h-[300%] after:bottom-28 sm:after:hidden after:transform after:rounded-[35%] after:bg-orange-700 after:border-2 after:bg-transparent after:border-white after:animate-wave
        "
      />
    </>
  );
};

Login.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
  setIsLast: PropTypes.func.isRequired,
};

export default Login;
