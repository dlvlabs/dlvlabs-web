import { Spotlight } from "./Spotlight";

export const IntroductionSection = () => {
  return (
    <div className="relative flex h-[50rem] w-full overflow-hidden  antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-80"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 flex flex-col items-center justify-center">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          DLV Labs
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          DLVLabs is a technical team with extensive experience in the Cosmos
          SDK, CometBFT, and IBC, offering infrastructure solutions and
          development support for blockchain ecosystems.
        </p>
      </div>
    </div>
  );
};
