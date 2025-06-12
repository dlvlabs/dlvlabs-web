import { StatusType } from "@/shared/types";
import { Indicator } from "@/shared/ui/indicator";
import { formatChainName } from "@/shared/utils";
import Image from "next/image";
import Link from "next/link";

interface ConnectionCardProps {
  chainName: string;
  logoUrl: string;
  connectionId: string;
  connectionChainName: string;
  status: StatusType;
}

export const ConnectionCard = ({
  chainName,
  logoUrl,
  connectionId,
  connectionChainName,
  status,
}: ConnectionCardProps) => {
  return (
    <Link href={`/${chainName}/${connectionChainName}`}>
      <div className="w-full font-[Arial] p-4 cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
        <Indicator status={status} />
        <div className="w-full flex items-center gap-4 py-2">
          <Image
            src={logoUrl}
            alt={chainName}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold  text-slate-800 group-hover:text-slate-600 group-hover:underline transition-colors duration-200">
              {formatChainName(connectionChainName)}
            </h3>
            <p className="text-slate-600 text-xs">ChainId: {connectionId}</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm ">
          Client ID: {connectionId} {/* TODO: Add Client description */}
        </p>
        <p className="text-slate-600 text-sm mb-2">
          Channel ID: {connectionId} {/* TODO: Add Channel description */}
        </p>

        <div className="absolute bg-slate-700 p-2 rounded-tl-xl rounded-br-xl bottom-0 right-0 transition-colors duration-200 flex justify-center items-center group-hover:bg-slate-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height={15}
            width={15}
            className="transition-transform duration-200 group-hover:translate-x-1">
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
