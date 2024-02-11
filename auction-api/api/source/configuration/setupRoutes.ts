import { Container } from "inversify";
import { Express } from "express";
import { getAccountMetaGraphControllerRouter } from "./routes/accountMetaGraphController.routes";
import { getAuthorizationControllerRoutes } from "./routes/authorizationController.routes";
import { validateToken } from "../middleware/authorizationMiddleware";

export function setupRoutes(app: Express, container: Container) {
    app.use('/accounts', validateToken,  getAccountMetaGraphControllerRouter(container));
    app.use('/user', getAuthorizationControllerRoutes(container))
}