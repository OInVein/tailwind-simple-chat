const Login = () => (
  <main className="w-full h-full md:w-3/4 xl:w-1/2 md:h-5/6 md:rounded-xl flex items-center flex-col bg-orange-200 py-0 px-10">
    <h1 className="w-full h-1/5 md:h-1/4 flex justify-center items-center whitespace-nowrap font-bold text-shadow-md text-white text-4xl sm:text-5xl">
      CHAT ROOM
    </h1>

    <div className="w-full h-1/4 md:h-1/3 xl:h-1/3 flex flex-col gap-6 font-bold text-xl sm:text-2xl text-white">
      <div className="relative left-3 rounded-md rounded-bl-none bg-orange-400 p-4 w-max after:content after:absolute after:block after:w-0 after:h-0 after:-left-3 after:border-8 after:common-message-border-angle after:bottom-0">
        <h2 className="overflow-hidden whitespace-nowrap mx-0 my-auto animate-typing-3000">
          Hello World
        </h2>
      </div>
      <div className="relative left-3 rounded-md rounded-bl-none bg-orange-400 p-4 w-max after:content after:absolute after:block after:w-0 after:h-0 after:-left-3 after:border-8 after:common-message-border-angle after:bottom-0">
        <h2 className="overflow-hidden whitespace-nowrap mx-0 my-auto animate-typing-3000">
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

const Room = () => (
  <main className="relative w-full h-full md:w-3/4 xl:w-1/2 md:h-5/6 md:rounded-xl animate-chatBackground pb-16 sm:pb-19 md:tracking-wider">
    <div className="w-full h-full p-2 py-0 sm:p-3 sm:py-0 text-lg flex flex-col justify-start overflow-y-auto">
      <div className="w-full py-2 text-center text-orange-400 mt-auto">Camellia進入聊天室</div>
      <div className="w-full py-2 text-center text-orange-400">Dog進入聊天室</div>

      <div className="items-start rounded-br-mdw-full py-2 text-center text-orange-400 flex flex-col gap-2">
        <div className="flex flex-row gap-1 ml-2">
          <div>
            黃金銀
          </div>
          <div>
            (11:24)
          </div>
          <div>:</div>
        </div>
        <div className="relative break-all text-white bg-orange-400 border-solid rounded-md ml-2 p-2 after:content after:absolute after:block after:w-0 after:h-0 after:-left-2 after:border-8 after:common-message-border-angle after:bottom-0">
          幹嘛幹嘛
        </div>
        <div className="relative break-all text-white bg-orange-400 border-solid rounded-md ml-2 p-2 after:content after:absolute after:block after:w-0 after:h-0 after:-left-2 after:border-8 after:common-message-border-angle after:bottom-0">
          閉嘴
        </div>
      </div>

      <div className="items-start w-full py-2 text-center text-orange-400 flex flex-col gap-2">
        <div className="flex flex-row gap-1 ml-2">
          <div>
            東東
          </div>
          <div>
            (11:26)
          </div>
          <div>:</div>
        </div>
        <div className="relative break-all text-white bg-orange-400 border-solid rounded-md ml-2 p-2 after:content after:absolute after:block after:w-0 after:h-0 after:-left-2 after:border-8 after:common-message-border-angle after:bottom-0">
          幹嘛幹嘛
        </div>
      </div>

      <div className="items-end w-full py-2 pb-0 text-center text-orange-400 flex flex-col gap-2">
        <div className="flex flex-row gap-1 ml-2">
          <div>
            掏金俠客
          </div>
          <div>
            (11:24)
          </div>
          <div>:</div>
        </div>
        <div
          className="
          relative break-all text-orange bg-transparent
          border-2 border-orange-400 border-solid
          rounded-md mr-2 p-2
          rounded-br-none
          before:content before:absolute before:block before:w-0 before:h-0 before:right-[-12px] before:bottom-[-2px] before:border-[6px] before:chat-message-border-angle-my-out
          after:content after:absolute after:block after:w-0 after:h-0 after:right-[-7px] after:border-[6px] after:animate-angleBackground after:bottom-[0px]"
        >
          幹嘛幹嘛
        </div>
        <div
          className="
          relative break-all text-orange bg-transparent
          border-2 border-orange-400 border-solid
          rounded-md mr-2 p-2
          rounded-br-none
          before:content before:absolute before:block before:w-0 before:h-0 before:right-[-12px] before:bottom-[-2px] before:border-[6px] before:chat-message-border-angle-my-out
          after:content after:absolute after:block after:w-0 after:h-0 after:right-[-7px] after:border-[6px] after:animate-angleBackground after:bottom-[0px]"
        >
          好了可以了
        </div>
      </div>

      <div className="items-end w-full py-2 pb-0 text-center text-orange-400 flex flex-col gap-2">
        <div className="flex flex-row gap-1 ml-2">
          <div>
            掏金俠客
          </div>
          <div>
            (11:24)
          </div>
          <div>:</div>
        </div>
        <div
          className="
          relative break-all text-orange bg-transparent
          border-2 border-orange-400 border-solid
          rounded-md mr-2 p-2
          rounded-br-none
          before:content before:absolute before:block before:w-0 before:h-0 before:right-[-12px] before:bottom-[-2px] before:border-[6px] before:chat-message-border-angle-my-out
          after:content after:absolute after:block after:w-0 after:h-0 after:right-[-7px] after:border-[6px] after:animate-angleBackground after:bottom-[0px]"
        >
          幹嘛幹嘛
        </div>
        <div
          className="
          relative break-all text-orange bg-transparent
          border-2 border-orange-400 border-solid
          rounded-md mr-2 p-2
          rounded-br-none
          before:content before:absolute before:block before:w-0 before:h-0 before:right-[-12px] before:bottom-[-2px] before:border-[6px] before:chat-message-border-angle-my-out
          after:content after:absolute after:block after:w-0 after:h-0 after:right-[-7px] after:border-[6px] after:animate-angleBackground after:bottom-[0px]"
        >
          好了可以了
        </div>
      </div>

    </div>

    <form className="absolute min-h-15 h-auto max-h-36 w-full p-2 sm:p-3 bottom-0 flex items-center">
      <div className="w-full h-full relative flex">
        <div
          className="w-full max-h-28 mr-14 text-orange-400 rounded-md outline-none p-2 border-2 border-solid border-orange-400 animate-chatBackground overflow-y-auto text-xl transition focus:ring-2 focus:ring-orange-300"
          data-testid="editableArea"
          contentEditable
          suppressContentEditableWarning
        />
        <div
          className="
            w-12 h-12 motion-safe:hover:scale-110 transition text-xs cursor-pointer bottom-0 text-white right-0 absolute bg-orange-400 rounded-md flex justify-center items-center
            after:content-['···'] after:w-6 after:h-6 after:border-2 after:border-white after:border-solid after:rounded-full after:rounded-bl-none after:text-white after:flex after:items-center after:justify-center after:absolute
            tracking-tighter
          "
          data-testid="sendButton"
        />
      </div>
    </form>
  </main>
);

const App = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center font-sans overflow-hidden bg-gradient-to-br from-yellow-100 to-red-100">
      {/* <Login /> */}
      <Room />
    </div>
  );
};

export default App;
