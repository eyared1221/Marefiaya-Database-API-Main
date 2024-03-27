import express from 'express';
import orphanageStaffRouter from '../routes/orphanageManager/orphanageStaffRouter.js';


const app = express();

app.use('/marefiya/api/orphanageStaff', orphanageStaffRouter);

export default app;