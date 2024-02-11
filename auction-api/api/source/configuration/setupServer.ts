import express, { Express } from "express";
import cors from 'cors';
import { config } from "./configuration";
import setupGlobal from "./setupGlobal";
import { setupIoC } from "./setupIoC";
import { setupRoutes } from "./setupRoutes";

function setupServer(): Express {

	var iocContainer = setupIoC()
	const port = config.port
	var app: Express = express();
	
	setupGlobal(iocContainer, app)
	setupMiddleware(app)
	setupRoutes(app, iocContainer)
	
	app.listen(port, () => console.info("Listening on port " + port + " ..."));
	return app;
}

function setupMiddleware(app: Express) {
	app.use(express.json())
	app.use(cors())
}

export default setupServer;