import express from "express"
import { getConnection } from "../db";
const router = express.Router()



router.post("/", addVacationHandler);

async function addVacationHandler(req,res,next){
    console.log(req.body);
    await postVacationHandler(req.body)
     return res.status(200).json({ message: "created" });
    
}

async function postVacationHandler(payload){
    const { vacation_name, vacation_price, vacation_date } = payload
    const query = postVacationQuery()
    const [result] = await getConnection().execute(query, [
      vacation_name,
      vacation_price,
      vacation_date,
    ]);
    console.log("create Success", result);
    return result
    
}

const postVacationQuery = () => {
    return `INSERT INTO vacations.vations (vacation_name, vacation_price, vacation_date) VALUES (?, ?, ?);
`
}












export default router