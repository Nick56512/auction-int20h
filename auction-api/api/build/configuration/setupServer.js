"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const configuration_1 = require("./configuration");
const setupGlobal_1 = __importDefault(require("./setupGlobal"));
const setupIoC_1 = require("./setupIoC");
const setupRoutes_1 = require("./setupRoutes");
function setupServer() {
    var iocContainer = (0, setupIoC_1.setupIoC)();
    const port = configuration_1.config.port;
    var app = (0, express_1.default)();
    (0, setupGlobal_1.default)(iocContainer, app);
    setupMiddleware(app);
    (0, setupRoutes_1.setupRoutes)(app, iocContainer);
    app.listen(port, () => console.info("Listening on port " + port + " ..."));
    return app;
}
function setupMiddleware(app) {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
}
exports.default = setupServer;
//# sourceMappingURL=setupServer.js.map