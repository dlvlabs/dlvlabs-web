export const Disconnection = () => {
  return (
    <div className="relative flex items-center justify-center w-32">
      {/* 끊긴 연결선 */}
      <div className="absolute w-full h-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full shadow-lg shadow-rose-300/50"></div>

      <div className="relative flex items-center justify-center">
        {/* 원과 X표시 중앙에 배치 */}
        <div className="relative">
          {/* 깜빡이는 큰 원 - 느린 퍼지는 효과 */}
          <span className="absolute inset-0 animate-slow-ping rounded-full bg-rose-500/80" />

          {/* X 표시 */}
          <div className="relative flex items-center justify-center w-5 h-5 bg-rose-500 rounded-full shadow-lg shadow-rose-400/50 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
