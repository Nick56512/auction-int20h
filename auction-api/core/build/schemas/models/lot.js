"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const lotSchema = new mongoose_1.Schema({
    title: String,
    startPrice: Number,
    description: Number,
    categoryName: String,
    currencyName: String,
    currencyCode: String,
    bids: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Bid' }]
});
lotSchema.pre('find', function (next) {
    this.populate('bids');
    next();
});
exports.default = lotSchema;
//# sourceMappingURL=lot.js.map