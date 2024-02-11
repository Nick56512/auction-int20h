import { LoginController } from "@module/apiControllers/authorizationController";
import { MockAccountRepository } from "@module/tests/mockAccountService";
import { Account, IRepository, RepositoryTypes } from "core";
import { Container } from "inversify";
import "reflect-metadata";
import { ApiControllersTypes } from "./injection/IoCKeyTypes";
import { AccountsController } from "@module/apiControllers/accountController";


export function setupIoC(): Container {
	const container = new Container();
	setupRepositories(container);
	setupControllers(container)
	return container;
}

function setupRepositories(container: Container) {
	container.bind<IRepository<Account>>(RepositoryTypes.AccountRepository).to(MockAccountRepository);
}

function setupControllers(container: Container) {
	container.bind<LoginController>(ApiControllersTypes.AuthorizationController).to(LoginController);
	container.bind<AccountsController>(ApiControllersTypes.AccountsController).to(AccountsController);
}


