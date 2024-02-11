"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidRepository = void 0;
const inversify_1 = require("inversify");
let BidRepository = exports.BidRepository = class BidRepository {
    getAllAsync() {
        throw new Error("Method not implemented.");
    }
    getAllCount() {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range) {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id, populatePath) {
        throw new Error("Method not implemented.");
    }
    createAsync(entity) {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter, range, sortOptions, populatePath) {
        throw new Error("Method not implemented.");
    }
    updateAsync(id, entity) {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id) {
        throw new Error("Method not implemented.");
    }
};
exports.BidRepository = BidRepository = __decorate([
    (0, inversify_1.injectable)()
], BidRepository);
//# sourceMappingURL=mockBidRepository.js.map