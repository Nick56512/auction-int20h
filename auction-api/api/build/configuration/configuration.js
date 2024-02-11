"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ debug: true });
exports.config = {
    port: Number(process.env.PORT) || 4000,
    connectionString: process.env.CONNECTION_STRING || '',
    tokenSecret: process.env.TOKEN_SECRET || '',
    userTokenExpiresIn: process.env.USER_TOKEN_EXPIRES_IN || ''
};
//# sourceMappingURL=configuration.js.map