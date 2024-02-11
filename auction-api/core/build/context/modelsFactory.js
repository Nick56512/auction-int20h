"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLotModel = exports.createBidModel = exports.createAccountModel = void 0;
const account_1 = __importDefault(require("../schemas/models/account"));
const bid_1 = __importDefault(require("../schemas/models/bid"));
const lot_1 = __importDefault(require("../schemas/models/lot"));
function createAccountModel(context, collectionName) {
    return context.model("Account", account_1.default, collectionName);
}
exports.createAccountModel = createAccountModel;
function createBidModel(context, collectionName) {
    return context.model("Bid", bid_1.default, collectionName);
}
exports.createBidModel = createBidModel;
function createLotModel(context, collectionName) {
    return context.model("Lot", lot_1.default, collectionName);
}
exports.createLotModel = createLotModel;
//# sourceMappingURL=modelsFactory.js.map