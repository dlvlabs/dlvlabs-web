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
    <div>
      {chainId} is connecting to {peerChainId}
    </div>
  );
}
