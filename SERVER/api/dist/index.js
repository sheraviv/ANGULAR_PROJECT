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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const accountRoute_1 = __importDefault(require("./bankAccount/accountRoute"));
const withdrawal_1 = __importDefault(require("./withDrawal/withdrawal"));
const deposit_1 = __importDefault(require("./deposit/deposit"));
(0, db_1.initDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/healthcheck", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send("Api is working!!");
}));
app.use("/bankAccount", accountRoute_1.default);
app.use("/withdrawal", withdrawal_1.default);
app.use("/deposit", deposit_1.default);
app.use((error, req, res, next) => {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
});
const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
});
