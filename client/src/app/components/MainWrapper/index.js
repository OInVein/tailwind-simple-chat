import PropTypes from 'prop-types';

const MainWrapper = ({ children }) => (
  <div
    data-testid="container"
    className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center font-sans overflow-hidden bg-gradient-to-br from-yellow-100 to-red-100"
  >
  {children}
</div>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
