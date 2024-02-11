import { FilterQuery, Model, QueryOptions } from "mongoose";
import { IRepository, Range } from "./iRepository";
export declare class ModelRepository<T extends object> implements IRepository<T> {
    private model;
    constructor(model: Model<T>);
    getAllCount(): Promise<number>;
    getByRangeAsync(range: Range): Promise<T[]>;
    getAllAsync(): Promise<T[]>;
    getByIdAsync(id: string, populatePath?: string): Promise<T | null>;
    createAsync(entity: T): Promise<T>;
    filterAsyncByRange(filter: FilterQuery<T>, range: Range, sortOptions?: QueryOptions<any>, populatePath?: string): Promise<T[] | null>;
    createManyAsync(entities: T[]): Promise<T[]>;
    updateAsync(id: string, entity: T): Promise<any>;
    deleteAsync(id: string): Promise<any>;
}
