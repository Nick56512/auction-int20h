import mongoose from "mongoose";

export async function createDbContext(connectionString: string): Promise<mongoose.Connection> {
    return await mongoose.createConnection(connectionString);
}