import { Container } from "inversify";
import { Express } from "express";
import authenticateToken from "@module/middlewares/authorizationMiddleware";
import { getAuthorizationRoutes } from "./routes/authorizationRoutes";


export function setupRoutes(app: Express, container: Container) {
    //app.use('/accounts', authenticateToken,  getAccountMetaGraphControllerRouter(container));
    app.use('/user', getAuthorizationRoutes(container))
}