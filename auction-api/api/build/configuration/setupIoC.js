"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupIoC = void 0;
const authorizationController_1 = require("@module/apiControllers/authorizationController");
const mockAccountService_1 = require("@module/tests/mockAccountService");
const core_1 = require("core");
const inversify_1 = require("inversify");
require("reflect-metadata");
const IoCKeyTypes_1 = require("./injection/IoCKeyTypes");
const accountController_1 = require("@module/apiControllers/accountController");
function setupIoC() {
    const container = new inversify_1.Container();
    setupRepositories(container);
    setupControllers(container);
    return container;
}
exports.setupIoC = setupIoC;
function setupRepositories(container) {
    container.bind(core_1.RepositoryTypes.AccountRepository).to(mockAccountService_1.MockAccountRepository);
}
function setupControllers(container) {
    container.bind(IoCKeyTypes_1.ApiControllersTypes.AuthorizationController).to(authorizationController_1.LoginController);
    container.bind(IoCKeyTypes_1.ApiControllersTypes.AccountsController).to(accountController_1.AccountsController);
}
//# sourceMappingURL=setupIoC.js.map