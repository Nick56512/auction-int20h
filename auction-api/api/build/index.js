"use strict";
// this is for changing pathes like "infrastructure" to "../infrastructure/build"
//only for development stage 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const setupServer_1 = __importDefault(require("./configuration/setupServer"));
(0, setupServer_1.default)();
//# sourceMappingURL=index.js.map