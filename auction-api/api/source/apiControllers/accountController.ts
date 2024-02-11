import { config } from "@module/configuration/configuration"
import { IRepository, Account, RepositoryTypes } from "../../../core/build"
import { Request, Response} from "express" 
import { inject, injectable } from "inversify"
import { Types } from "mongoose"

@injectable()
export class AccountsController {
    private readonly accountRepository: IRepository<Account>

    constructor(@inject(RepositoryTypes.AccountRepository) accountRepository: IRepository<Account>) {
        this.accountRepository = accountRepository
    }

    public async registerNewAccount(request: Request, response: Response) {
        if(!request.body) {
            response.sendStatus(400);
            return
        }
        const newAccount: Account = {
            login: request.body.login,
            password: request.body.password,
            userName: request.body.userName,
            phoneNumber: request.body.phoneNumber,
            email: request.body.email
        }
        const res = await this.accountRepository.createAsync(newAccount);
        response.send(res);
    }
}