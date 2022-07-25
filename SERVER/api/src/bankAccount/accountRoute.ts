import express from "express";
import { getAccount } from "./accountHanler";


const router = express.Router();


router.get("/", showAccount);

async function showAccount(req, res, next) {
  const result = await getAccount();


  res.status(200).json(result);
}




export default router;
