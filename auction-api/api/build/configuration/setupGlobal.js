"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupGlobal(IoCContainer, serverApp) {
    global.IoCContainer = IoCContainer;
    global.serverApp = serverApp;
}
exports.default = setupGlobal;
//# sourceMappingURL=setupGlobal.js.map