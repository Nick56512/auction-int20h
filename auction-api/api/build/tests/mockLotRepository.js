"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockLotRepository = void 0;
const core_1 = require("core");
const inversify_1 = require("inversify");
let MockLotRepository = exports.MockLotRepository = class MockLotRepository {
    constructor() {
        this.lots = [];
        this.createData();
    }
    getAllAsync() {
        return new Promise((resolve) => {
            resolve(this.lots);
        });
    }
    getAllCount() {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range) {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id, populatePath) {
        return new Promise((resolve) => {
            const res = this.lots.find(x => { var _a; return ((_a = x._id) === null || _a === void 0 ? void 0 : _a.toHexString().toLowerCase()) == id.toLowerCase(); });
            if (res) {
                resolve(res);
            }
            resolve(null);
        });
    }
    createAsync(entity) {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter, range, sortOptions, populatePath) {
        throw new Error("Method not implemented.");
    }
    updateAsync(id, entity) {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id) {
        throw new Error("Method not implemented.");
    }
    createData() {
        this.lots = [
            {
                _id: core_1.Types.ObjectId.createFromHexString('9BE6B759CFB7A8C707AF0563'),
                title: "Ексклюзивний набір: Дари доброти та надії",
                startPrice: 20,
                createdDate: new Date(2022, 11, 6),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: core_1.Types.ObjectId.createFromHexString('B719229D0F39D5D6703C6182'),
                bids: [],
            },
            {
                _id: core_1.Types.ObjectId.createFromHexString('79B5F32AB6B6DA0238C03EC1'),
                title: "Літературна скарбниця: Книжки для добрих справ",
                startPrice: 20,
                createdDate: new Date(2023, 4, 5),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: core_1.Types.ObjectId.createFromHexString('035905DED0B9BF8FF2BCCB75'),
                bids: [],
            },
            {
                _id: core_1.Types.ObjectId.createFromHexString('2C6D95600E3DACD326E0CCFF'),
                title: "Пам'ятна банкнота 'Пам'ятаємо! Не пробачимо!'",
                startPrice: 20,
                createdDate: new Date(2023, 10, 4),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: core_1.Types.ObjectId.createFromHexString('7E1A31FB0E4C7DD061DB3631'),
                bids: [],
            },
            {
                _id: core_1.Types.ObjectId.createFromHexString('AD5BE2057418F1532F8CEC67'),
                title: "Листівки любові для допомоги дітям з Маріуполя",
                startPrice: 10,
                createdDate: new Date(2023, 10, 4),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: core_1.Types.ObjectId.createFromHexString('7E1A31FB0E4C7DD061DB3631'),
                bids: [],
            },
        ];
    }
};
exports.MockLotRepository = MockLotRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MockLotRepository);
//# sourceMappingURL=mockLotRepository.js.map