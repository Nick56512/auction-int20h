import { Lot, IRepository, Range } from "core";
import { injectable } from "inversify";
import { FilterQuery, QueryOptions } from "mongoose";

@injectable()
export class LotRepository implements IRepository<Lot> {

    private lots: Lot[] = []

    getAllAsync(): Promise<Lot[]> {
        throw new Error("Method not implemented.");
    }
    getAllCount(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range: Range): Promise<Lot[]> {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id: string, populatePath?: string | undefined): Promise<Lot | null> {
        throw new Error("Method not implemented.");
    }
    createAsync(entity: Lot): Promise<Lot> {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter: FilterQuery<any>, range: Range, sortOptions?: QueryOptions<any> | undefined, populatePath?: string | undefined): Promise<Lot[] | null> {
        throw new Error("Method not implemented.");
    }
    updateAsync(id: string, entity: Lot): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    

  

    createData() {
        this.lots = [
            {   categoryName: "Мистецтво", 
                createdDate: new Date(), 
                title: 'Унікальне видання "Кобзар"',
                startPrice: 6000,
                endDate: new Date(). 
            }
        ]
    }
}