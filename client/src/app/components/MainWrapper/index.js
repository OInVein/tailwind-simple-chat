const MainWrapper = (Component) => {
  const Container = (props) => (
    <div
      data-testid="container"
      className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center font-sans overflow-hidden bg-gradient-to-br from-yellow-100 to-red-100"
    >
      <Component {...props} />
    </div>
  );

  Container.displayName = 'Container';

  return Container;
};

export default MainWrapper;
