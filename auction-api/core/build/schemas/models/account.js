"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountSchema = new mongoose_1.Schema({
    login: String,
    password: String,
    userName: String,
    phoneNumber: String,
    email: String
});
exports.default = accountSchema;
//# sourceMappingURL=account.js.map