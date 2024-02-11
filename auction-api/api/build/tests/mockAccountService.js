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
exports.MockAccountRepository = void 0;
const inversify_1 = require("inversify");
const core_1 = require("core");
let MockAccountRepository = exports.MockAccountRepository = class MockAccountRepository {
    constructor() {
        this.accounts = [];
        this.createData();
    }
    getAllAsync() {
        return new Promise((resolve) => {
            resolve(this.accounts);
        });
    }
    getAllCount() {
        return new Promise((resolve) => {
            resolve(this.accounts.length);
        });
    }
    createAsync(entity) {
        return new Promise((resolve) => {
            entity._id = core_1.Types.ObjectId.createFromTime(new Date().getSeconds());
            this.accounts.push(entity);
            resolve(entity);
        });
    }
    updateAsync(id, entity) {
        throw new Error("Method not implemented.");
    }
    deleteAsync(id) {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id, populatePath) {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range) {
        throw new Error("Method not implemented.");
    }
    filterAsyncByRange(filter, range, sortOptions, populatePath) {
        throw new Error("Method not implemented.");
    }
    createData() {
        this.accounts = [
            { login: "Fox565", password: "YUiO123", userName: "Milfhunter" },
            { login: "Girl567", password: "KoLpo", userName: "SexyGirl" },
            { login: "Beer890", password: "MiLY78", userName: "KOpRty" },
            { login: "Deer", password: "Oshjfk78", userName: "PWerty" },
        ];
    }
};
exports.MockAccountRepository = MockAccountRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], MockAccountRepository);
//# sourceMappingURL=mockAccountService.js.map