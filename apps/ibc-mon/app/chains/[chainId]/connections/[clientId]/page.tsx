import { ChainConnectionStatusPage } from "@/pages/chain";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ clientId: string; chainId: string }>;
}) {
  const { clientId, chainId } = await params;

  if (!clientId || !chainId) {
    redirect("/notfound");
  }
  return <ChainConnectionStatusPage chainId={chainId} clientId={clientId} />;
}
