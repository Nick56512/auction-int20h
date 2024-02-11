"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLotsRoutes = void 0;
const express_1 = require("express");
const IoCKeyTypes_1 = require("../injection/IoCKeyTypes");
function getLotsRoutes(container) {
    const router = (0, express_1.Router)();
    const lotController = container.get(IoCKeyTypes_1.ApiControllersTypes.LotController);
    router.get("/all", lotController.getAll.bind(lotController));
    router.get("/getById/:lotId", lotController.getById.bind(lotController));
    return router;
}
exports.getLotsRoutes = getLotsRoutes;
//# sourceMappingURL=lotRoutes.js.map