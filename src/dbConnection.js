import { createPool } from "mysql2/promise";
import { HOST, USER_DB, PORT_DB, PASSWORD_DB, DATABASE_NAME } from "./config.js";

export const pool = createPool({
    host: HOST,
    user: USER_DB,
    port: PORT_DB,
    password: PASSWORD_DB,
    database: DATABASE_NAME
}); 

