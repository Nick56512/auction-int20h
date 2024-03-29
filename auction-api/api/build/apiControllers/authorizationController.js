"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const configuration_1 = require("@module/configuration/configuration");
const build_1 = require("../../../core/build");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const inversify_1 = require("inversify");
let LoginController = exports.LoginController = class LoginController {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    logIn(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userPayload = request.body;
                const account = (yield this.accountRepository.getAllAsync()).find(x => x.login == userPayload.login && x.password == userPayload.password);
                if (!account) {
                    response.sendStatus(401);
                    return;
                }
                const signOptions = {
                    expiresIn: configuration_1.config.userTokenExpiresIn
                };
                const secret = configuration_1.config.tokenSecret;
                const token = jsonwebtoken_1.default.sign(userPayload, secret, signOptions);
                response.send({
                    token: token,
                    userId: account._id
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
};
exports.LoginController = LoginController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(build_1.RepositoryTypes.AccountRepository)),
    __metadata("design:paramtypes", [Object])
], LoginController);
//# sourceMappingURL=authorizationController.js.map