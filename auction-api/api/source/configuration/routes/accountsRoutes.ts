import { Router } from "express";
import { Container } from "inversify";
import { ApiControllersTypes } from "../injection/IoCKeyTypes";
import { LoginController } from "@module/apiControllers/authorizationController";
import { AccountsController } from "@module/apiControllers/accountController";

export function getAccountsRoutes(container: Container) {
    const router = Router();
	const accountController = container.get<AccountsController>(ApiControllersTypes.AccountsController);
	router.post("/register", accountController.registerNewAccount.bind(accountController));
	return router;
}