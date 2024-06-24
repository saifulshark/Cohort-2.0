"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "./index.html"));
});
app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, "THIS IS A JWT SECRET");
    res.cookie("token", token);
    res.send("Logged In");
});
app.get('/user', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        res.json({ "MSG": "Not found" });
    }
    const decoded = jsonwebtoken_1.default.verify(token, "THIS IS A JWT SECRET");
    res.send({
        userId: decoded.id
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", " ");
    res.json({
        message: "Logged Out!"
    });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
