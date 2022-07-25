import express from "express";
import { getConnection } from "../db";
const router = express.Router();



router.post("/", withdrawalHandler);

async function withdrawalHandler(req, res,next){
    console.log(req.body);
    
    await changeBalanceHandler(req.body)
     return res.status(200).json({ message: "success" });
    
}

async function changeBalanceHandler(payload){
    const {account_balance} = payload
    const query = withdrawalQuery()
    const result = await getConnection().execute(query, [account_balance])
    console.log('success', result);
    return result
    
}

const withdrawalQuery= () => {
    return `update bankacc.account set account_balance =  account_balance - ? where id = 1`;
}


export default router
// SELECT account.account_balance - account.waithDrawal FROM bankacc.account;