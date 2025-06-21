import { CHAIN_LIST } from "@/shared/consts";
import { ContentContainer } from "@/shared/ui/content-container";
import Image from "next/image";
import { Divider } from "../../shared/ui/divider";
import { DataFlowIcon } from "../../shared/ui/icons";
import { formatChainName } from "../../shared/utils";

interface ChainConnectionDetailPageProps {
  chainId: string;
  peerChainId: string;
}

export const ChainConnectionDetailPage = ({
  chainId,
  peerChainId,
}: ChainConnectionDetailPageProps) => {
  const currentChain = CHAIN_LIST.find((chain) => chain.chainId === chainId);
  const peerChain = CHAIN_LIST.find((chain) => chain.chainId === peerChainId);

  if (!currentChain || !peerChain) {
    return <div>Chain not found</div>;
  }

  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <ContentContainer>
        <div className="w-full px-4 py-3 flex items-center gap-x-2">
          <div className="flex items-center gap-2 py-2 rounded ">
            <Image
              src={currentChain.logo}
              alt={currentChain.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              {formatChainName(currentChain.name)}
            </h3>
          </div>
          <DataFlowIcon />
          <div className="flex items-center gap-2 py-2 ">
            <Image
              src={peerChain.logo}
              alt={peerChain.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              {formatChainName(peerChain.name)}
            </h3>
          </div>
        </div>
        <Divider />
        <div className="w-full min-h-[66vh] h-full px-12 py-5 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ChainConnectionDetailCard
              status="ACTIVE"
              title="Client ID"
              subtitle="Client ID"
            />
            <ChainConnectionDetailCard
              status="WARNING"
              title="Client ID"
              subtitle="Client ID"
            />
            <ChainConnectionDetailCard
              status="ERROR"
              title="Client ID"
              subtitle="Client ID"
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

interface ChainConnectionDetailCardProps {
  status: "ACTIVE" | "WARNING" | "ERROR";
  title?: string;
  subtitle?: string;
}

const ChainConnectionDetailCard = ({
  status,
  title,
  subtitle,
}: ChainConnectionDetailCardProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "ACTIVE":
        return {
          iconBg: "bg-green-50",
          glowColor: "#23c55e",
          glowShadow: "0 0 70px 30px rgba(35, 197, 94, 0.3)",
          iconColor: "#23c55e",
          linkColor: "text-[#072713]",
        };
      case "WARNING":
        return {
          iconBg: "bg-yellow-50",
          glowColor: "#eab308",
          glowShadow: "0 0 70px 30px rgba(234, 179, 8, 0.3)",
          iconColor: "#eab308",
          linkColor: "text-yellow-800",
        };
      case "ERROR":
        return {
          iconBg: "bg-red-50",
          glowColor: "#ef4444",
          glowShadow: "0 0 70px 30px rgba(239, 68, 68, 0.3)",
          iconColor: "#ef4444",
          linkColor: "text-red-800",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="relative flex flex-col items-start p-7 max-w-[340px] rounded-lg bg-white shadow-[0px_0px_14px_0px_rgba(192,192,192,0.2)] overflow-hidden">
      {/* 오른쪽 하단 블러 효과 */}
      <div
        className="absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-60 blur-2xl"
        style={{
          backgroundColor: styles.iconColor,
          boxShadow: `0 0 30px 10px ${styles.iconColor}60`,
        }}
      />

      <h3 className="text-[#171d29] text-[26px] font-medium whitespace-nowrap my-4">
        {title}
      </h3>

      <p className="text-[#7e8882] text-sm font-normal leading-[22px]">
        {subtitle}
      </p>
    </div>
  );
};
