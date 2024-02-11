import { Container } from "inversify";
import "reflect-metadata";



export function setupIoC(): Container {
	const container = new Container();
	setupRepositories(container);
	setupControllers(container)
	return container;
}

function setupRepositories(container: Container) {
	
}

function setupControllers(container: Container) {

}


