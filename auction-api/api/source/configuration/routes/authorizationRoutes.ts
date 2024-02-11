import { Router } from "express";
import { Container } from "inversify";
import { ApiControllersTypes } from "../injection/IoCKeyTypes";
import { LoginController } from "@module/apiControllers/authorizationController";

export function getAuthorizationRoutes(container: Container) {
    const router = Router();
	const authorizationController = container.get<LoginController>(ApiControllersTypes.AuthorizationController);
	router.post("/login", authorizationController.logIn.bind(authorizationController));
	return router;
}