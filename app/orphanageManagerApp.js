import express from 'express';
import bodyParser from 'body-parser';
import orphanageStaffRouter from '../routes/orphanageManager/orphanageStaffRouter.js';
import testRouter from '../routes/orphanageManager/testRouter.js';

const app = express();

// Use body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/marefiya/api/orphanageStaff', orphanageStaffRouter);
app.use("/api/v1/staff", testRouter);

export default app;