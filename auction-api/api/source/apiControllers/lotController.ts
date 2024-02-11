import { config } from "@module/configuration/configuration"
import { IRepository, Account, RepositoryTypes, Lot } from "../../../core/build"
import { Request, Response} from "express" 
import { inject, injectable } from "inversify"
import { Types } from "mongoose"

@injectable()
export class LotController {
    private readonly lotsRepository: IRepository<Lot>

    constructor(@inject(RepositoryTypes.LotRepository) lotsController: IRepository<Lot>) {
        this.lotsRepository = lotsController
    }

    public async getAll(request: Request, response: Response) {
        const res = await this.lotsRepository.getAllAsync()
        response.send(res);
    }

    public async getById(request: Request, response: Response) {
      
        if(!request.params.lotId?.toString()) {
            response.sendStatus(400)
            return
        }
        const res = await this.lotsRepository.getByIdAsync(request.params.lotId.toString())
        response.send(res);
    }

}