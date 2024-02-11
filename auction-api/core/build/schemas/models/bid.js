"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bidSchema = new mongoose_1.Schema({
    totalPrice: Number,
    currencyName: String,
    accountId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Account' }
});
exports.default = bidSchema;
//# sourceMappingURL=bid.js.map