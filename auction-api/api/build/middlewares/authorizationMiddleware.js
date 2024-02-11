"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configuration_1 = require("@module/configuration/configuration");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, configuration_1.config.tokenSecret, (err, payload) => {
        if (err)
            return res.sendStatus(403);
        req.user = payload;
        next();
    });
};
exports.default = authenticateToken;
//# sourceMappingURL=authorizationMiddleware.js.map