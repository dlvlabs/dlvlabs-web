export const Connection = () => {
  return (
    <div className="relative flex items-center justify-center w-32 mx-2">
      <div className="absolute w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg shadow-green-300/50"></div>

      <div className="relative flex items-center justify-center">
        <div className="relative">
          <span className="absolute inset-0 animate-slow-ping rounded-full bg-green-500/80" />
          <div className="relative flex items-center justify-center w-5 h-5 bg-green-500 rounded-full shadow-lg shadow-green-400/50 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
