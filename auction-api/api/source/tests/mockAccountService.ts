import { IRepository, Account, Range } from "core";
import { injectable } from "inversify";

import { Types } from "core"; 
import { resolve } from "path";
import { FilterQuery, QueryOptions } from "mongoose";

@injectable()
export class MockAccountRepository implements IRepository<Account> {

    private accounts: Account[] = []

    constructor() {
        this.createData()
    }

    getAllAsync(): Promise<Account[]> {
        return new Promise((resolve) => {
            resolve(this.accounts)
        }) ;
    }
    getAllCount(): Promise<number> {
        return new Promise((resolve) => {
            resolve(this.accounts.length)
        })
    }
    createAsync(entity: Account): Promise<Account> {
        return new Promise((resolve) => {
            entity._id = Types.ObjectId.createFromTime(new Date().getSeconds());
            this.accounts.push(entity)
            resolve(entity);
        })
    }

    updateAsync(id: string, entity: Account): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id: string, populatePath?: string | undefined): Promise<Account | null> {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range: Range): Promise<Account[]> {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter: FilterQuery<any>, range: Range, sortOptions?: QueryOptions<any> | undefined, populatePath?: string | undefined): Promise<Account[] | null> {
        throw new Error("Method not implemented.");
    }
    
    createData() {
        this.accounts = [
            {login: "Fox565", password: "YUiO123", userName: "Milfhunter"},
            {login: "Girl567", password: "KoLpo", userName: "SexyGirl"},
            {login: "Beer890", password: "MiLY78", userName: "KOpRty"},
            {login: "Deer", password: "Oshjfk78", userName: "PWerty"},
        ]
    }
    
}