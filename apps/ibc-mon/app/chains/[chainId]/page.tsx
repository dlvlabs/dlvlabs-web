import { ChainConnectionsPage } from "@/pages/chains";
import { CHAIN_LIST } from "@/shared/consts";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ chainId: string }>;
}) {
  const { chainId } = await params;
  const currentChain = CHAIN_LIST.find((c) => c.chainId === chainId);

  if (!currentChain) {
    redirect("/notfound");
  }
  return <ChainConnectionsPage chain={currentChain} />;
}
