import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./src/routes/crmRoutes.js";
import  Messenger,{ Environment} from "./src/controllers/createMessage.js";
import { Settings} from './settings.js'
import { Request, Response } from "express";

// const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
dotenv.config();

const app = express();

// Envvironment Constant
const environment: Environment = 'development'

// instantiate Messenger class
const messages = new Messenger(Settings.PORT, environment);

// Interface
interface Name {
  firstName: string;
  lastName: string;
}

const nameCreator = (name: Name): string => {
  return `Hello!, ${name.firstName} ${name.lastName}`;
}

let myName = { firstName: "Shiba", lastName: "Rana," }

// Generic function
const genericFunc = <T>(name: T): T => {
  return name;
};

let myGenericName = genericFunc<string>("Shiba Rana,");

// mongoose connection
const database: string =
  process.env.MONGODB_URI || "mongodb://localhost:27017/crmDB";
mongoose.Promise = global.Promise;
mongoose.connect(database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

routes(app);

app.get("/", (req: Request, res: Response): any => {
  res.send(
    `<h1>Welcome to the CRM API</h1><p>${messages.messagePrint()}</p>`
  );
});

app.listen(Settings.PORT, () => {
  console.log(myGenericName, messages.messagePrint());
});
