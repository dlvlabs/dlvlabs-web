import { H1, MainIntroductionText, Spotlight } from "@dlvlabs/ui";

export const IntroductionSection = () => {
  return (
    <div className="relative flex h-[50rem] w-full overflow-hidden antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-80"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 flex flex-col items-center justify-center">
        <H1>DLV Labs</H1>
        <MainIntroductionText>
          DLVLabs is a technical team with extensive experience in the Cosmos
          SDK, CometBFT, and IBC, offering infrastructure solutions and
          development support for blockchain ecosystems.
        </MainIntroductionText>
      </div>
    </div>
  );
};
