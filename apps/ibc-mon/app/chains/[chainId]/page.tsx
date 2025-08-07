import { ChainConnectionListPage } from "@/pages/chain";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ chainId: string }>;
}) {
  const { chainId } = await params;

  if (!chainId) {
    redirect("/notfound");
  }
  return <ChainConnectionListPage chainId={chainId} />;
}
