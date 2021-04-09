"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
const add = (a, b) => a + b;
app.get('/', (req, res) => {
    console.log(add(5, 6));
    res.send('Hello');
});
app.use('/user', user_route_1.default);
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.warn(`App listening at http://localhost:${PORT}`);
});
