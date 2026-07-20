"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const crmRoutes_js_1 = __importDefault(require("./src/routes/crmRoutes.js"));
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
dotenv_1.default.config();
const app = (0, express_1.default)();
// mongoose connection
const database = process.env.MONGODB_URI || 'mongodb://localhost:27017/crmDB';
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(database);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
(0, crmRoutes_js_1.default)(app);
app.get("/", (req, res) => {
    res.send("Welcome to the API. Please use the appropriate endpoints to interact with the application.");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
