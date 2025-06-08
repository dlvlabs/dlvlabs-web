import Image from "next/image";
import Link from "next/link";
import { CHAIN_LIST } from "../../shared/consts";
import { BasicChainType } from "../../shared/types";

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
          <Card key={chain.id} chain={chain} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ chain }: { chain: BasicChainType }) => {
  return (
    <Link href={`/${chain.name}`}>
      <div
        className="w-64 h-24 box-border border border-white
                 shadow-[0.75rem_1rem_3.188rem_rgba(0,0,0,0.20)] backdrop-blur-[0.375rem] rounded-[1rem] 
                 text-center cursor-pointer transition-all duration-500 flex items-center justify-center 
                 select-none font-bold text-black
                 hover:border-[0.2px] hover:border-[rgba(0,0,0,0.40)] hover:scale-105
                 active:scale-95 active:rotate-[1.7deg]">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={chain.logo}
              alt={chain.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="text-lg">{chain.name}</div>
        </div>
      </div>
    </Link>
  );
};
