import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes.js';
 
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
dotenv.config();

const app = express();

// mongoose connection
const database: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/crmDB';
mongoose.Promise = global.Promise;
mongoose.connect(database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

routes(app);

app.get("/", (req, res) => {
    res.send("Welcome to the API. Please use the appropriate endpoints to interact with the application.");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});