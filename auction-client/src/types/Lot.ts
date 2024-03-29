import { Bid } from "./Bid";

export interface Lot {
  _id: string;
  title: string;
  startPrice: number;
  createdDate: Date;
  endDate: Date;
  description: string;
  categoryName: string;
  currencyName: string;
  currencyCode: string;
  creatorId: string;
  bids: Bid[];
}
