import express from "express";
import { getVacations } from "./vacationHandler";
const router = express.Router();

router.get("/", getAllvacationsHandler);


async function getAllvacationsHandler(req, res, next){
    const result = await getVacations()
   
    
    res.status(200).json(result)
}

export default router
