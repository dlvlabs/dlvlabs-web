export const formatChainName = (chainName: string) => {
  return chainName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
