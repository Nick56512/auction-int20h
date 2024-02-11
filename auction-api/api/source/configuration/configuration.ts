import dotenv from 'dotenv';
dotenv.config({debug: true});

export const config = {
    port: Number(process.env.PORT) || 4000,
    connectionString: process.env.CONNECTION_STRING,
    tokenSecret: process.env.TOKEN_SECRET || '',
    userTokenExpiresIn: process.env.USER_TOKEN_EXPIRES_IN || ''
}