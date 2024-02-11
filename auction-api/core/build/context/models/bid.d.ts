import { Types } from "mongoose";
export declare class Bid {
    _id?: Types.ObjectId;
    totalPrice: number;
    currencyName: string;
    accountId: Types.ObjectId;
}
