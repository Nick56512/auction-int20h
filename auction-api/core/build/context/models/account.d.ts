import { Types } from "mongoose";
export declare class Account {
    _id?: Types.ObjectId;
    login: string;
    password: string;
    userName: string;
    phoneNumber?: string;
    email?: string;
}
