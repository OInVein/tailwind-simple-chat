import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { scrollToBottom, formatDate } from '../../utils';
import { DIALOG_MESSAGE } from '../../constants';

const Dialog = forwardRef(({ id, allMessages }, ref) => {
  const mainRef = useRef();
  const containerRef = useRef();

  useImperativeHandle(ref, () => ({
    get main() {
      return mainRef.current;
    },
    get container() {
      return containerRef.current;
    },
  }));

  useEffect(() => {
    const dialogContainerScrollToBottom = () => {
      const { current: element } = containerRef;
      scrollToBottom(element);
    };

    dialogContainerScrollToBottom();
  }, [allMessages]);

  const alterClassName = ({ isOther, isFirst, isLast, isAliveMessage, shouldShowDetail }) => {
    const firstElemClass = isFirst ? 'mt-auto': '';
    const lastElemClass = isLast ? 'pb-0' : '';
    if (isAliveMessage) {
      return `
        ${isOther ? 'items-start' : 'items-end'}
        ${shouldShowDetail ? '' : 'pt-0'}
        ${firstElemClass} w-full py-2
        ${lastElemClass}
        text-center text-orange-400 flex flex-col gap-2
      `;
    }

    return `${firstElemClass} ${lastElemClass} py-2 w-full text-center text-white flex justify-center animate-shake`;
  };

  const renderAllMessages = allMessages.map(({
    text,
    date,
    isNew = false,
    isLeaving = false,
    user: { id: perId, name },
  }, idx) => {
    const isOther = perId !== id;
    const isFirst = idx === 0;
    const isLast = idx === allMessages.length - 1;
    const isAliveMessage = !isNew && !isLeaving;
    const sendTime = formatDate(date);
    const displayTime = sendTime.substr(5);
    const shouldShowDetail = (() => {
      if (!isAliveMessage) return false;

      const prevMessageInfo = allMessages[idx - 1];
      const isDifferent = sendTime !== formatDate(prevMessageInfo?.date)
        || perId !== prevMessageInfo?.user?.id
        || prevMessageInfo?.isNew
        || prevMessageInfo?.isLeaving;
      return isDifferent;
    })();

    return (
      <div
        key={`${perId}-${date}`}
        className={alterClassName({
          isOther,
          isFirst,
          isLast,
          isAliveMessage,
          shouldShowDetail,
        })}
      >
        {(() => {
          if (isAliveMessage) {
            const messageClassName = (() => {
              const defaultMessageClass = 'relative break-words max-w-[50%] text-justify border-solid border-2 border-orange-400 rounded-lg p-2';
              if (isOther) {
                const detailClass = shouldShowDetail ? 'after:content after:absolute after:block after:w-0 after:h-0 after:left-[-12px] after:bottom-[-2px] after:skew-x-[20deg] after:border-8 after:common-message-border-angle' : '';
                return `
                  ml-2 text-white bg-orange-400
                  ${defaultMessageClass}
                  ${detailClass}
                `;
              }

              const detailClass = shouldShowDetail ? 'rounded-br-none before:content before:absolute before:block before:w-0 before:h-0 before:right-[-11px] before:skew-x-[-20deg] after:skew-x-[-20deg] before:bottom-[-2px] before:border-[6px] before:chat-message-border-angle-my-out after:content after:absolute after:block after:w-0 after:h-0 after:right-[-7px] after:border-[6px] after:bottom-[0px] after:chat-message-border-angle-my-in' : '';
              return `
                mr-2 text-orange bg-transparent
                ${defaultMessageClass}
                ${detailClass}
              `;
            })();
            return (
              <>
                {shouldShowDetail && (
                  <div className="flex flex-row gap-1 ml-2">
                    <div>{name}</div>
                    <div>({displayTime})</div>
                  </div>
                )}
                <div
                  className={messageClassName}
                  dangerouslySetInnerHTML={{
                    __html: text.replace(/\n/g, '<br />'),
                  }}
                />
              </>
            );
          }

          const { className, textMessage } = (() => {
            const defaultClass = 'p-2 border border-solid rounded-lg';
            if (isNew) {
              const { JUST_COME } = DIALOG_MESSAGE;
              return {
                className: `${defaultClass} border-red-400 bg-red-400`,
                textMessage: JUST_COME,
              };
            }

            const { JUST_LEFT } = DIALOG_MESSAGE;
            return {
              className: `${defaultClass} border-blue-400 bg-blue-400`,
              textMessage: JUST_LEFT,
            };
          })();
          return (
            <div className={className}>
              <div>{name} {textMessage}</div>
            </div>
          );
        })()}
      </div>
    );
  });

  return (
    <div data-testid="dialog" ref={mainRef} className="absolute top-0 right-0 left-0 bottom-[72px]">
      <div ref={containerRef} className="w-full h-full p-2 py-0 sm:p-3 sm:py-0 text-lg flex flex-col justify-start overflow-y-auto">
        {renderAllMessages}
      </div>
    </div>
  );
});

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  id: '',
};

Dialog.propTypes = {
  id: PropTypes.string,
  allMessages: PropTypes.array.isRequired,
};

export default Dialog;
