import { useContext } from 'react';
import { ChatFormContext } from '../../contexts';

const SendButton = () => {
  const { onSubmit } = useContext(ChatFormContext);

  const onMouseDown = e => e.preventDefault();

  return (
    <div
      className="
        w-12 h-12 motion-safe:hover:scale-110 transition text-xs cursor-pointer bottom-0 text-white right-0 absolute bg-orange-400 rounded-lg flex justify-center items-center
        after:content-['···'] after:w-6 after:h-6 after:border-2 after:border-white after:border-solid after:rounded-full after:rounded-bl-none after:text-white after:flex after:items-center after:justify-center after:absolute
        tracking-tighter
      "
      data-testid="sendButton"
      onClick={onSubmit}
      onMouseDown={onMouseDown}
    />
  );
};

export default SendButton;
