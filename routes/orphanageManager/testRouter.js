import express from "express";
import { createStaffController } from "../../controllers/orphanageManager/testController.js";
 

const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/create-staff", createStaffController);


export default router;