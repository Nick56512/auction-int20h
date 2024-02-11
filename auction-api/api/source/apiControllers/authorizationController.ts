import { config } from "@module/configuration/configuration"
import { IRepository, Account, RepositoryTypes } from "../../../core/build"
import { Express,  Request, Response} from "express" 
import jwt from "jsonwebtoken"
import { inject, injectable } from "inversify"

@injectable()
export class LoginController {
    private readonly accountRepository: IRepository<Account>

    constructor(@inject(RepositoryTypes.AccountRepository) accountRepository: IRepository<Account>) {
        this.accountRepository = accountRepository
    }

    public async logIn(request: Request, response: Response, next: Function) {
        try {
          const userPayload = request.body
          const account = (await this.accountRepository.getAllAsync()).find(x => x.login == userPayload.login && x.password == userPayload.password)
          if(!account) {
            response.sendStatus(401);
            return
          }
          const signOptions: jwt.SignOptions = {
            expiresIn: config.userTokenExpiresIn
          };
          const secret = config.tokenSecret;
          const token = jwt.sign(userPayload, secret, signOptions);
          response.send({
            token: token,
            userId: account._id
          });
        } catch (err) {
          next(err);
        }
      }
}


