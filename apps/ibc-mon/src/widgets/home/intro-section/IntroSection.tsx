export const IntroSection = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold text-center [text-shadow:0px_2px_4px_rgba(0,0,0,0.25),0px_4px_8px_rgba(0,0,0,0.2)]">
        IBC MON
      </h1>
      <p className="text-lg text-center w-2/5 py-8">
        IBC MON is a comprehensive solution designed for the Cosmos ecosystem to
        monitor and track the status of Inter-Blockchain Communication (IBC)
        channels. This service provides real-time insights into channel
        activities, pending transactions, and timeout events across different
        blockchains within the Cosmos network.
      </p>
    </section>
  );
};
