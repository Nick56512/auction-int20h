import { Types } from "mongoose";
import { Bid } from "./bid";

export class Lot {
    _id?: Types.ObjectId;
    title!: string;
    startPrice!: number
    createdDate!: Date;
    endDate!: Date;
    description!: number
    categoryName!: string
    currencyName!: string
    currencyCode!: string
    creatorId!: Types.ObjectId 
    bids?: Bid[]
}