import { FilterQuery, UpdateQuery,QueryOptions } from "mongoose";

export type Range = {
    limit: number,
    offset: number
}

export interface IRepository<T> {
    getAllAsync(): Promise<T[]>;
    getAllCount(): Promise<number>;
    getByRangeAsync(range: Range): Promise<T[]>
    getByIdAsync(id: string, populatePath?: string): Promise<T | null>;
    createAsync(entity: T): Promise<T>;
    filterAsyncByRange(filter: FilterQuery<any>, range: Range, sortOptions?: QueryOptions<any>, populatePath?: string): Promise<T[] | null>;
    updateAsync(id: string, entity: T): Promise<any>;
    deleteAsync(id: string): Promise<any>;
}