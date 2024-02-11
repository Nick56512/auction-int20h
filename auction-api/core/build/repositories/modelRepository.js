"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRepository = void 0;
class ModelRepository {
    constructor(model) {
        this.model = model;
    }
    getAllCount() {
        return this.model.countDocuments();
    }
    getByRangeAsync(range) {
        return this.model.find().skip(range.offset).limit(range.limit);
    }
    getAllAsync() {
        return this.model.find().exec();
    }
    getByIdAsync(id, populatePath) {
        const query = this.model.findById(id);
        if (populatePath)
            query.populate(populatePath);
        return query.exec();
    }
    createAsync(entity) {
        return this.model.create(entity);
    }
    filterAsyncByRange(filter, range, sortOptions, populatePath) {
        const query = this.model.find(filter).skip(range.offset).limit(range.limit).sort(sortOptions);
        if (populatePath)
            query.populate(populatePath);
        return query.exec();
    }
    createManyAsync(entities) {
        return this.model.insertMany(entities);
    }
    updateAsync(id, entity) {
        return this.model.updateOne({ _id: id }, entity).exec();
    }
    deleteAsync(id) {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
exports.ModelRepository = ModelRepository;
//# sourceMappingURL=modelRepository.js.map