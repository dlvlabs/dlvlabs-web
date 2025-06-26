import { ChainConnectionListPage } from "@/pages/chain";
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
  return <ChainConnectionListPage chain={currentChain} />;
}
