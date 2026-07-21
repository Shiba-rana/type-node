import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./src/routes/crmRoutes.js";
import Messenger from "./src/controllers/createMessage.js";
import { Settings } from './settings.js';
// const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
dotenv.config();
const app = express();
// Envvironment Constant
const environment = 'development';
// instantiate Messenger class
const messages = new Messenger(Settings.PORT, environment);
const nameCreator = (name) => {
    return `Hello!, ${name.firstName} ${name.lastName}`;
};
let myName = { firstName: "Shiba", lastName: "Rana" };
// Generic function
const genericFunc = (name) => {
    return name;
};
let myGenericName = genericFunc("Shiba Rana");
// mongoose connection
const database = process.env.MONGODB_URI || "mongodb://localhost:27017/crmDB";
mongoose.Promise = global.Promise;
mongoose.connect(database);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
routes(app);
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the CRM API</h1><p>${messages.messagePrint()}</p>`);
});
app.listen(Settings.PORT, () => {
    console.log(myGenericName, messages.messagePrint());
});
