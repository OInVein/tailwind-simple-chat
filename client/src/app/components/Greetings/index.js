import PropTypes from 'prop-types';

const defaultText = 'World';

const Greetings = ({ text }) => {
  const isInit = text === defaultText;

  return (
    <div className={`w-full h-1/4 md:h-1/3 xl:h-1/3 flex flex-col ${isInit ? '' : 'items-center'} justify-center gap-6 font-medium text-2xl text-white`}>
      <Greeting words={`Hello ${text}`} {...!isInit && ({ isDone: true })} />
      {isInit && <Greeting words="Welcome" />}
    </div>
  );
};

Greetings.propTypes = {
  text: PropTypes.string,
};

Greetings.defaultProps = {
  text: defaultText,
};

export default Greetings;

const Greeting = ({ isDone, words }) => (
  <div className={`relative left-3 rounded-md rounded-bl-none bg-orange-400 p-4 w-max animate-slideFromLeft after:content after:absolute after:block after:w-0 after:h-0 after:-left-3 after:border-8 after:common-message-border-angle after:bottom-0`}>
    <h2 className={`${!isDone ? 'animate-typing-1500' : ''} overflow-hidden whitespace-nowrap mx-0 my-auto`}>
      {words}
    </h2>
  </div>
);

Greeting.propTypes = {
  isDone: PropTypes.bool,
  words: PropTypes.string.isRequired,
};

Greeting.defaultProps = {
  isDone: false,
};
