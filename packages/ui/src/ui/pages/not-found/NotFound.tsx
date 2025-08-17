export const NotFound = () => {
  return (
    <div className="w-screen flex items-center justify-center ">
      <div className="text-[#20293F] shadow-[0_5px_0px_-2px_#20293F] text-center mx-12">
        <h1 className="font-semibold text-9xl m-0 [text-shadow:0_6px_1px_rgba(0,0,0,0.0980392),0_0_5px_rgba(0,0,0,0.0980392),0_1px_3px_rgba(0,0,0,0.298039),0_3px_5px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.247059),0_10px_10px_rgba(0,0,0,0.2),0_20px_20px_rgba(0,0,0,0.14902)]">
          404
        </h1>
        <h2 className="font-normal text-xl mt-6 [text-shadow:0px_3px_5px_rgba(0,0,0,0.5),0px_6px_20px_rgba(0,0,0,0.3)]">
          Page not found. Head back home to continue exploring.
        </h2>
      </div>
    </div>
  );
};
