import { Lot, IRepository, Range, Types } from "core";
import { injectable } from "inversify";
import { FilterQuery, QueryOptions } from "mongoose";

@injectable()
export class MockLotRepository implements IRepository<Lot> {

    private lots: Lot[] = []

    constructor() {
        this.createData()
    }

    getAllAsync(): Promise<Lot[]> {
        return new Promise((resolve) => {
            resolve(this.lots)
        })
    }
    getAllCount(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getByRangeAsync(range: Range): Promise<Lot[]> {
        throw new Error("Method not implemented.");
    }
    getByIdAsync(id: string, populatePath?: string | undefined): Promise<Lot | null> {
        return new Promise((resolve) => {
            const res = this.lots.find(x =>x._id?.toHexString().toLowerCase() == id.toLowerCase())
            if(res) {
                resolve(res)
            }
            resolve(null)
        })
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
            {
                _id: Types.ObjectId.createFromHexString('9BE6B759CFB7A8C707AF0563'),
                title: "Ексклюзивний набір: Дари доброти та надії",
                startPrice: 20,
                createdDate: new Date(2022, 11, 6),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: Types.ObjectId.createFromHexString('B719229D0F39D5D6703C6182'),
                bids: [],
              },
              {
                _id: Types.ObjectId.createFromHexString('79B5F32AB6B6DA0238C03EC1'),
                title: "Літературна скарбниця: Книжки для добрих справ",
                startPrice: 20,
                createdDate: new Date(2023, 4, 5),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: Types.ObjectId.createFromHexString('035905DED0B9BF8FF2BCCB75'),
                bids: [],
              },
              {
                _id: Types.ObjectId.createFromHexString('2C6D95600E3DACD326E0CCFF'),
                title: "Пам'ятна банкнота 'Пам'ятаємо! Не пробачимо!'",
                startPrice: 20,
                createdDate: new Date(2023, 10, 4),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: Types.ObjectId.createFromHexString('7E1A31FB0E4C7DD061DB3631'),
                bids: [],
              },
              {
                _id: Types.ObjectId.createFromHexString('AD5BE2057418F1532F8CEC67'),
                title: "Листівки любові для допомоги дітям з Маріуполя",
                startPrice: 10,
                createdDate: new Date(2023, 10, 4),
                endDate: new Date(),
                description: "",
                categoryName: "Мистецтво",
                currencyName: "Euro",
                currencyCode: "EUR",
                creatorId: Types.ObjectId.createFromHexString('7E1A31FB0E4C7DD061DB3631'),
                bids: [],
              },
        ]
    }
}