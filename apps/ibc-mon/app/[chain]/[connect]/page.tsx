import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ connect: string; chain: string }>;
}) {
  const { connect, chain } = await params;

  if (!connect || !chain) {
    redirect("/notfound");
  }
  return (
    <div>
      {chain} is connecting to {connect}
    </div>
  );
}
