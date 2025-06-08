"use client";

export const ChainPage = ({ chainName }: { chainName: string }) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-96 w-[80vw] h-[80vh] rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
        ChainName: {chainName}
      </div>
    </div>
  );
};
