import { Connection } from "mongoose";
import accountSchema from "../schemas/models/account";
import bidSchema from "../schemas/models/bid";
import lotSchema from "../schemas/models/lot";

export function createAccountModel(context: Connection, collectionName?: string) {
    return context.model("Account", accountSchema, collectionName);
}
export function createBidModel(context: Connection, collectionName?: string) {
    return context.model("Bid", bidSchema, collectionName);
}
export function create(context: Connection, collectionName?: string) {
    return context.model("Lot", lotSchema, collectionName);
}
  