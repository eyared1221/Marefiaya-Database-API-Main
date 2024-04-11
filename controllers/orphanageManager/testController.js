import mongoose from "mongoose";
import asyncHandler from 'express-async-handler';
import testModel from '../../models/testModel.js';

// ====== CREATE JOB ======
export const createStaffController = asyncHandler(async (req, res, next) => {
    const { name, email, role, password } = req.body;
    if (!name || !email || !role || !password) {
      next("Please Provide All Fields");
    }
   // req.body.createdBy = req.user.userId;
    const staff = await testModel.create(req.body);
    res.status(201).json({ staff });
  });

  