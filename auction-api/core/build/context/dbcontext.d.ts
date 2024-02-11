import mongoose from "mongoose";
export declare function createDbContext(connectionString: string): Promise<mongoose.Connection>;
