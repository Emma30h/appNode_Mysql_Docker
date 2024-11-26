import { config } from "dotenv";

config();

//Server Port
export const PORT_SERVER = process.env.PORT_SERVER;

//DB configs
export const HOST = process.env.HOST;

export const USER_DB = process.env.USER_DB;

export const PORT_DB = process.env.PORT_DB;

export const PASSWORD_DB = process.env.PASSWORD_DB;

export const DATABASE_NAME = process.env.DATABASE_NAME;