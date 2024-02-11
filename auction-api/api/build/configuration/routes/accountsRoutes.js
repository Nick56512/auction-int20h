"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountsRoutes = void 0;
const express_1 = require("express");
const IoCKeyTypes_1 = require("../injection/IoCKeyTypes");
function getAccountsRoutes(container) {
    const router = (0, express_1.Router)();
    const accountController = container.get(IoCKeyTypes_1.ApiControllersTypes.AccountsController);
    router.post("/register", accountController.registerNewAccount.bind(accountController));
    return router;
}
exports.getAccountsRoutes = getAccountsRoutes;
//# sourceMappingURL=accountsRoutes.js.map