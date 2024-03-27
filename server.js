import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/connectDB.js";
import errorHandler from "./middleware/errorHandler.js";
import orphanageManagerApp from './app/orphanageManagerApp.js';
//import socialWorkerApp from './app/socialWorkerApp.js';
//import systemAdministratorApp from './app/systemAdministratorApp.js';

dotenv.config();

// mongodb connection
connectDB();

const app = express(); //creates new app using express

const PORT = process.env.ORPHANAGE_MANAGER_PORT || 3001;

app.use(express.json());
app.use(errorHandler);


orphanageManagerApp.listen(PORT, () => {
    console.log(`MAREFIYA ORPHANAGE_MANAGER PORT ${PORT}...`);
});
