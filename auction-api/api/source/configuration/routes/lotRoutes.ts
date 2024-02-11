import { LotController } from "@module/apiControllers/lotController";
import { Router } from "express";
import { Container } from "inversify";
import { ApiControllersTypes } from "../injection/IoCKeyTypes";

export function getLotsRoutes(container: Container) {
    const router = Router();
	const lotController = container.get<LotController>(ApiControllersTypes.LotController);
	router.get("/all", lotController.getAll.bind(lotController));
    router.get("/getById/:lotId", lotController.getById.bind(lotController))
	return router;
}