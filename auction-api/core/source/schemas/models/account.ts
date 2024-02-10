import { Schema } from "mongoose";
import { Account } from "../../context/models";

const accountSchema = new Schema<Account>({
    login: String,
    password: String,
    userName: String,
    phoneNumber: String,
    email: String
})

export default accountSchema