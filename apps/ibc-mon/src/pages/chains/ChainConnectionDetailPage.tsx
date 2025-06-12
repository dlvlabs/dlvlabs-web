import { ContentContainer } from "@/shared/ui/content-container";

interface ChainConnectionDetailPageProps {
  chainId: string;
  peerChainId: string;
}

export const ChainConnectionDetailPage = ({
  chainId,
  peerChainId,
}: ChainConnectionDetailPageProps) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <ContentContainer>
        <div className="w-full px-8 py-3 flex justify-between items-end">
          {chainId} is connecting to {peerChainId}
        </div>
      </ContentContainer>
    </div>
  );
};
