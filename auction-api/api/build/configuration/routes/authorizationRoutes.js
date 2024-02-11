"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizationRoutes = void 0;
const express_1 = require("express");
const IoCKeyTypes_1 = require("../injection/IoCKeyTypes");
function getAuthorizationRoutes(container) {
    const router = (0, express_1.Router)();
    const authorizationController = container.get(IoCKeyTypes_1.ApiControllersTypes.AuthorizationController);
    router.post("/login", authorizationController.logIn.bind(authorizationController));
    return router;
}
exports.getAuthorizationRoutes = getAuthorizationRoutes;
//# sourceMappingURL=authorizationRoutes.js.map