import { Types } from "mongoose";

export class Account {
    _id?: Types.ObjectId;
    login!: string;
    password!: string
    userName!: string;
    phoneNumber?: string
    email?: string;
}