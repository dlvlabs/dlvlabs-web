import { CHAIN_LIST } from "../../shared/consts";
import { ChainButton } from "../../widgets/chain-button";

export function MainPage() {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-center ">IBC MON</h1>
        <p className="text-lg text-center w-2/5 py-8">
          IBC MON is a comprehensive solution designed for the Cosmos ecosystem
          to monitor and track the status of Inter-Blockchain Communication
          (IBC) channels. This service provides real-time insights into channel
          activities, pending transactions, and timeout events across different
          blockchains within the Cosmos network.
        </p>
      </div>
      <div className="flex gap-20">
        {CHAIN_LIST.map((chain) => (
          <ChainButton
            className="w-72"
            key={chain.id}
            chainName={chain.name}
            logoUrl={chain.logo}
            status={null}
          />
        ))}
      </div>
    </div>
  );
}
