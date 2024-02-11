import { Bid, IRepository, Range } from "core";
import { injectable } from "inversify";
import { FilterQuery, QueryOptions } from "mongoose";

@injectable()
export class BidRepository implements IRepository<Bid> {
    

    getAllAsync(): Promise<Bid[]> {
        throw new Error("Method not implemented.");
    }
    getAllCount(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range: Range): Promise<Bid[]> {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id: string, populatePath?: string | undefined): Promise<Bid | null> {
        throw new Error("Method not implemented.");
    }
    createAsync(entity: Bid): Promise<Bid> {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter: FilterQuery<any>, range: Range, sortOptions?: QueryOptions<any> | undefined, populatePath?: string | undefined): Promise<Bid[] | null> {
        throw new Error("Method not implemented.");
    }
    updateAsync(id: string, entity: Bid): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}