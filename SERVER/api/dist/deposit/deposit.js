"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const router = express_1.default.Router();
router.post("/", depositHandler);
function depositHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        yield changeBalanceHandler(req.body);
        return res.status(200).json({ message: "success" });
    });
}
function changeBalanceHandler(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { account_balance } = payload;
        const query = depositQuery();
        const result = yield (0, db_1.getConnection)().execute(query, [account_balance]);
        console.log('success', result);
        return result;
    });
}
const depositQuery = () => {
    return `update bankacc.account set account_balance =  account_balance + ? where id = 1`;
};
exports.default = router;
// SELECT account.account_balance - account.waithDrawal FROM bankacc.account;
