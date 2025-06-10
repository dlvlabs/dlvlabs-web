import { redirect } from "next/navigation";
import { ChainPage } from "../../src/pages/chain";
import { CHAIN_LIST } from "../../src/shared/consts";

export default async function Page({
  params,
}: {
  params: Promise<{ chain: string }>;
}) {
  const { chain } = await params;
  const currentChain = CHAIN_LIST.find((c) => c.name === chain);

  if (!currentChain) {
    redirect("/notfound");
  }
  return <ChainPage chain={currentChain} />;
}
