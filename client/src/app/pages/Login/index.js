import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  return (
    <main className="w-full h-full md:w-3/4 xl:w-1/2 md:h-5/6 md:rounded-xl flex items-center flex-col bg-orange-200 py-0 px-10">
      <h1 className="w-full h-1/5 md:h-1/4 flex justify-center items-center whitespace-nowrap font-bold text-shadow-md text-white text-4xl sm:text-5xl">
        CHAT ROOM
      </h1>
      <div className="w-full h-1/4 md:h-1/3 xl:h-1/3 flex flex-col gap-6 font-bold text-xl sm:text-2xl text-white">
        <div className="relative left-3 rounded-md rounded-bl-none bg-orange-400 p-4 w-max animate-slideFromLeft after:content after:absolute after:block after:w-0 after:h-0 after:-left-3 after:border-8 after:common-message-border-angle after:bottom-0">
          <h2 className="overflow-hidden whitespace-nowrap mx-0 my-auto animate-typing-1500">
            Hello World
          </h2>
        </div>
        <div className="relative left-3 rounded-md rounded-bl-none bg-orange-400 p-4 w-max animate-slideFromLeft after:content after:absolute after:block after:w-0 after:h-0 after:-left-3 after:border-8 after:common-message-border-angle after:bottom-0">
          <h2 className="overflow-hidden whitespace-nowrap mx-0 my-auto animate-typing-1500">
            Welcome
          </h2>
        </div>
      </div>
      <form className="w-full h-1/3 md:h-5/12 flex justify-center flex-col text-2xl sm:text-3xl gap-4 md:gap-6 z-10">
        <div>
          <input
            className="rounded-md outline-none p-4 w-full transition text-orange-400 focus:shadow-md"
            data-testid="nicknameInput"
            type="text"
            placeholder="nickname"
          />
        </div>
        <div>
          <input
            className="outline-none cursor-pointer w-full p-4 rounded-md text-white bg-orange-400 transition motion-safe:hover:scale-105 sm:motion-safe:hover:scale-102"
            data-testid="submitButton"
            value="Join"
            type="button"
          />
        </div>
      </form>
      <div
        className="
          overflow-hidden absolute bottom-0 flex justify-center w-[100vmin] h-[100vmin] bg-transparent
          after:content after:absolute after:w-[300%] after:h-[300%] after:bottom-28 sm:after:hidden after:transform after:rounded-[35%] after:bg-orange-700 after:border-2 after:bg-transparent after:border-white after:animate-wave
        "
      />
    </main>
  );
};

Login.propTypes = {};

export default Login;
