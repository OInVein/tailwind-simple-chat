import React from 'react';
import PropTypes from 'prop-types';

const Chat = (props) => {
  return (
    <main className="relative w-full h-full md:w-3/4 xl:w-1/2 md:h-5/6 md:rounded-xl animate-chatBackground md:tracking-wider">
      <div className="absolute top-0 right-0 left-0 bottom-[72px]">
        <div className="w-full h-full p-2 py-0 sm:p-3 sm:py-0 text-lg flex flex-col justify-start overflow-y-auto">
          <div className="w-full text-center text-white font-medium flex justify-center animate-shake mt-auto">
            <div className="my-2 p-2 border border-solid border-red-400 bg-red-400 rounded-md">
              Camellia just entered
            </div>
          </div>
          <div className="w-full text-center text-white font-medium flex justify-center animate-shake">
            <div className="my-2 p-2 border border-solid border-red-400 bg-red-400 rounded-md">
              Dog just entered
            </div>
          </div>
          <div className="w-full text-center text-white font-medium flex justify-center animate-shake">
            <div className="my-2 p-2 border border-solid border-blue-400 bg-blue-400 rounded-md">
              Camellia just left
            </div>
          </div>

          <div className="items-start rounded-br-mdw-full py-2 text-center text-orange-400 flex flex-col gap-2">
            <div className="flex flex-row gap-1 ml-2">
              <div>黃金銀</div>
              <div>(11:24)</div>
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
              <div>東東</div>
              <div>(11:26)</div>
              <div>:</div>
            </div>
            <div className="relative break-all text-white bg-orange-400 border-solid rounded-md ml-2 p-2 after:content after:absolute after:block after:w-0 after:h-0 after:-left-2 after:border-8 after:common-message-border-angle after:bottom-0">
              幹嘛幹嘛
            </div>
          </div>

          <div className="items-end w-full py-2 pb-0 text-center text-orange-400 flex flex-col gap-2">
            <div className="flex flex-row gap-1 ml-2">
              <div>掏金俠客</div>
              <div>(11:24)</div>
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
              <div>掏金俠客</div>
              <div>(11:24)</div>
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
};

Chat.propTypes = {};

export default Chat;
