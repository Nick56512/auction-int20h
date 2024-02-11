/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Connection } from "mongoose";
export declare function createAccountModel(context: Connection, collectionName?: string): import("mongoose").Model<import("./models").Account, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models").Account> & import("./models").Account & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, import("mongoose").Schema<import("./models").Account, import("mongoose").Model<import("./models").Account, any, any, any, import("mongoose").Document<unknown, any, import("./models").Account> & import("./models").Account & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./models").Account, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./models").Account>> & import("mongoose").FlatRecord<import("./models").Account> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>>;
export declare function createBidModel(context: Connection, collectionName?: string): import("mongoose").Model<import("./models").Bid, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models").Bid> & import("./models").Bid & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, import("mongoose").Schema<import("./models").Bid, import("mongoose").Model<import("./models").Bid, any, any, any, import("mongoose").Document<unknown, any, import("./models").Bid> & import("./models").Bid & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./models").Bid, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./models").Bid>> & import("mongoose").FlatRecord<import("./models").Bid> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>>;
export declare function createLotModel(context: Connection, collectionName?: string): import("mongoose").Model<import("./models").Lot, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./models").Lot> & import("./models").Lot & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, import("mongoose").Schema<import("./models").Lot, import("mongoose").Model<import("./models").Lot, any, any, any, import("mongoose").Document<unknown, any, import("./models").Lot> & import("./models").Lot & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./models").Lot, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./models").Lot>> & import("mongoose").FlatRecord<import("./models").Lot> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>>;
