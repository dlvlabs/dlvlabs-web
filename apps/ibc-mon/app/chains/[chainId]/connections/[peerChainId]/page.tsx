import { ChainConnectionStatusPage } from "@/pages/chain";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ peerChainId: string; chainId: string }>;
}) {
  const { peerChainId, chainId } = await params;

  if (!peerChainId || !chainId) {
    redirect("/notfound");
  }
  return (
    <ChainConnectionStatusPage chainId={chainId} peerChainId={peerChainId} />
  );
}
