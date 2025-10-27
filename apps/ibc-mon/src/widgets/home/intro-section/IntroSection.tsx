import { H1, MainIntroductionText, Spotlight } from "@dlvlabs/ui";

export const IntroSection = () => {
  return (
    <div className="relative flex h-[42rem] w-full overflow-hidden antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-80"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full p-4 flex flex-col items-center justify-center mt-20 pt-20">
        <H1>IBC MON</H1>
        <MainIntroductionText>
          IBC MON is a comprehensive solution designed for the Cosmos ecosystem
          to monitor and track the status of Inter-Blockchain Communication
          (IBC) channels. This service provides real-time insights into channel
          activities, pending transactions, and timeout events across different
          blockchains within the Cosmos network.
        </MainIntroductionText>
      </div>
    </div>
  );
};
