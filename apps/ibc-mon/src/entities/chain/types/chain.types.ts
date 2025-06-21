import { BasicChainType, StatusType } from "@/shared/types";

export interface Chain extends BasicChainType {
  status: StatusType;
}
