import { Types } from "mongoose";
import { Account } from "./account";

export class Bid {
    _id?: Types.ObjectId;
    totalPrice!: number
    currencyName!: string
    accountId!: Types.ObjectId
}