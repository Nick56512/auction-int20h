"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const authorizationRoutes_1 = require("./routes/authorizationRoutes");
const accountsRoutes_1 = require("./routes/accountsRoutes");
const lotRoutes_1 = require("./routes/lotRoutes");
function setupRoutes(app, container) {
    //app.use('/accounts', authenticateToken,  getAccountMetaGraphControllerRouter(container));
    app.use('/user', (0, authorizationRoutes_1.getAuthorizationRoutes)(container));
    app.use('/accounts', (0, accountsRoutes_1.getAccountsRoutes)(container));
    app.use('/lots', (0, lotRoutes_1.getLotsRoutes)(container));
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=setupRoutes.js.map