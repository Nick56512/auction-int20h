import { Types } from "mongoose";
import { Bid } from "./bid";
export declare class Lot {
    _id?: Types.ObjectId;
    title: string;
    startPrice: number;
    description: number;
    categoryName: string;
    currencyName: string;
    currencyCode: string;
    creatorId: Types.ObjectId;
    bids?: Bid[];
}
