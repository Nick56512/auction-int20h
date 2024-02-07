import { FilterQuery, Model, QueryOptions } from "mongoose";
import { IRepository, Range } from "./iRepository";

export class ModelRepository<T extends object> implements IRepository<T> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model
    }
  
	getAllCount(): Promise<number> {
		return this.model.countDocuments()
	}

	getByRangeAsync(range: Range): Promise<T[]> {
		return this.model.find().skip(range.offset).limit(range.limit);
	}

	getAllAsync(): Promise<T[]> {
		return this.model.find().exec();
	}

	getByIdAsync(id: string, populatePath?: string): Promise<T | null> {
		const query = this.model.findById(id);
		if (populatePath) query.populate(populatePath);
		return query.exec();
	}

	createAsync(entity: T): Promise<T> {
		return this.model.create(entity);
	}

	
	filterAsyncByRange(
		filter: FilterQuery<T>,
		range: Range,
		sortOptions?: QueryOptions<any>,
		populatePath?: string
	): Promise<T[] | null> {
		const query = this.model.find(filter).skip(range.offset).limit(range.limit).sort(sortOptions);
		if (populatePath) query.populate(populatePath);
		return query.exec();
	}

	createManyAsync(entities: T[]): Promise<T[]> {
		return this.model.insertMany(entities) as any;
	}

	updateAsync(id: string, entity: T): Promise<any> {
		return this.model.updateOne({ _id: id }, entity).exec();
	}
	
	deleteAsync(id: string): Promise<any> {
		return this.model.deleteOne({ _id: id }).exec();
	}
}
