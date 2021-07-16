const Loading = () => (
  <div data-testid="loading" className="grid-rows-2 grid-cols-6">
    <div className="h-20 w-20 relative flex justify-center items-center animate-rotate360">
      <div className="h-8 w-8 absolute rounded-full bg-gradient-to-tr from-red-400 to-red-200 top-[.2rem] right-0" />
      <div className="h-8 w-8 absolute rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 left-[.2rem] top-[1rem]" />
      <div className="h-8 w-8 absolute rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 bottom-0 right-[.75rem]" />
    </div>
  </div>
);

export default Loading;
