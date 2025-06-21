import { HTMLAttributes } from "react";
import { StatusType } from "../../types";

interface ConnectionProps extends HTMLAttributes<HTMLDivElement> {
  status: StatusType;
}

export const Connection = ({ status, ...props }: ConnectionProps) => {
  // 상태에 따른 색상 및 스타일 설정
  const isError = status === "ERROR";
  const isWarning = status === "WARNING";

  // 상태별 색상 클래스 정의
  const colorClasses = {
    line: isError
      ? "bg-gradient-to-r from-rose-400 to-rose-600 shadow-rose-300/50"
      : isWarning
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-yellow-300/60"
        : "bg-gradient-to-r from-green-400 to-green-600 shadow-green-300/50",
    ping: isError
      ? "bg-rose-500/80"
      : isWarning
        ? "bg-yellow-500/70"
        : "bg-green-500/80",
    circle: isError
      ? "bg-rose-500 shadow-rose-400/50"
      : isWarning
        ? "bg-yellow-500 shadow-orange-400/60"
        : "bg-green-500 shadow-green-400/50",
  };

  return (
    <div
      className="relative flex items-center justify-center w-full"
      {...props}>
      <div
        className={`absolute w-full h-1 rounded-full shadow-lg ${colorClasses.line}`}></div>

      <div className="relative flex items-center justify-center">
        <div className="relative">
          {/* 깜빡이는 원 효과 */}
          <span
            className={`absolute inset-0 animate-slow-ping rounded-full ${colorClasses.ping}`}
          />

          {/* 중앙 아이콘 */}
          <div
            className={`relative flex items-center justify-center w-5 h-5 rounded-full shadow-lg z-10 ${colorClasses.circle}`}>
            {isError ? (
              // X 표시 아이콘 (에러 상태)
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
            ) : isWarning ? (
              // 느낌표 아이콘 (경고 상태)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // 체크 표시 아이콘 (정상 상태)
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
