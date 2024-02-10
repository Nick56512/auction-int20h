import { Schema } from "mongoose";
import { Lot } from "../../context/models/lot";

const lotSchema = new Schema<Lot>({
    title: String,
    startPrice: Number,
    description: Number,
    categoryName: String,
    currencyName: String,
    currencyCode: String,
    bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' } ]
})

lotSchema.pre('find', function(next) {
    this.populate('bids')
    next()
})

export default lotSchema