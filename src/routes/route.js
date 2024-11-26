import { Router } from "express";
import { pool } from "../dbConnection.js";

const route = Router();

route.get(`/`, async(req, res)=>{
    try {
        const [result] = await pool.query(`SELECT NOW()`); 
        res.status(200).json({message: result});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default route;