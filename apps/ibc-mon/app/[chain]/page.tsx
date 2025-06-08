import { ChainPage } from "../../src/pages/chain";

export default async function Page({
  params,
}: {
  params: Promise<{ chain: string }>;
}) {
  const { chain } = await params;
  return <ChainPage chainName={chain} />;
}
