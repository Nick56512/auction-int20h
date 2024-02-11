import UserPayload from "../models/userPayload";


declare module 'express-serve-static-core' {
    export interface Request {
    user?: UserPayload;
    }
    }