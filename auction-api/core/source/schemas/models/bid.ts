import { Schema } from "mongoose";
import { Bid } from "../../context/models/bid";

const bidSchema = new Schema<Bid>({
    totalPrice: Number,
    currencyName: String,
    accountId: { type: Schema.Types.ObjectId, ref: 'Account' }
})

export default bidSchema