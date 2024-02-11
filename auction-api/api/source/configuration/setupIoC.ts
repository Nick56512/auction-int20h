import { LoginController } from "@module/apiControllers/authorizationController";
import { MockAccountRepository } from "@module/tests/mockAccountService";
import { Account, IRepository, Lot, RepositoryTypes } from "core";
import { Container } from "inversify";
import "reflect-metadata";
import { ApiControllersTypes } from "./injection/IoCKeyTypes";
import { AccountsController } from "@module/apiControllers/accountController";
import { MockLotRepository } from "@module/tests/mockLotRepository";
import { LotController } from "@module/apiControllers/lotController";


export function setupIoC(): Container {
	const container = new Container();
	setupRepositories(container);
	setupControllers(container)
	return container;
}

function setupRepositories(container: Container) {
	container.bind<IRepository<Account>>(RepositoryTypes.AccountRepository).to(MockAccountRepository);
	container.bind<IRepository<Lot>>(RepositoryTypes.LotRepository).to(MockLotRepository)
}

function setupControllers(container: Container) {
	container.bind<LoginController>(ApiControllersTypes.AuthorizationController).to(LoginController);
	container.bind<AccountsController>(ApiControllersTypes.AccountsController).to(AccountsController);
	container.bind<LotController>(ApiControllersTypes.LotController).to(LotController);
}


