/*
The controller is going to contain all our logic for the request response
*/

import asyncHandler from 'express-async-handler';
import orphanageStaff from '../../models/orphanageStaffModel.js';
import multer from 'multer';
import fs from 'fs';

// Configure multer middleware for file upload
const storage = multer.diskStorage({
  destination: '../upload_files',
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  }
});

const upload = multer({ storage: storage });

// ====== CREATE ORPHANAGE STAFFS ======  
// Use the upload.single middleware to handle the file upload
const uploadSingle = upload.single('kebeleDocument');

export const createOrphanageStaff = asyncHandler(async (req, res) => {
  
  try {
    // Invoke the uploadSingle middleware to handle the file upload
    uploadSingle(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // Multer error occurred
        console.log(err);
        return res.status(400).json({
          status: 'error',
          message: 'Failed to upload file',
          error: err.message,
        });
      } else if (err) {
        // Other error occurred
        console.log(err);
        return res.status(500).json({
          status: 'error',
          message: 'Failed to upload file',
          error: err.message,
        });
      }
      

      // Access the uploaded file's buffer
      const fileBuffer = req.file ? req.file.buffer : null;

      // Access other form data
      const {
        idNumber,
        fullName,
        gender,
        contact_number,
        address_location,
        email,
        password,
        role,
        organization_name,
        purpose_of_interaction
      } = req.body;

      // Create the staff member with the uploaded file buffer
      const newStaffMember = await orphanageStaff.create({
        idNumber,
        fullName,
        gender,
        contact_number,
        address_location,
        email,
        password,
        role,
        organization_name,
        purpose_of_interaction,
        kebeleDocument: new Binary(fileBuffer), // Assign the file buffer to the kebeleDocument field
      });

      res.status(200).json({
        status: 'success',
        data: {
          staffMember: newStaffMember,
        },
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create orphanage staff member.',
      error: error.message,
    });
  }
});
// ====== UPDATE ORPHANAGE STAFFS ======  

export const updateOrphanageStaff = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params; 
      const updatedOrphanageStaff = await orphanageStaff.findByIdAndUpdate(id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Run validators to ensure the update meets the schema requirements
      });
  
      if (!updatedOrphanageStaff) {
        return res.status(404).json({
          status: 'error',
          message: 'orphanage staff not found',
        });
      }
  
      res.status(200).json({
        status: 'success',
        message: 'orphanage staff updated successfully',
        data: {
            orphanageStaff: updatedOrphanageStaff,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to update orphanage staff.',
        error: error.message,
      });
    }
  });
  

// ====== DELETE ORPHANAGE STAFFS ======  

export const deleteOrphanageStaff = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrphanageStaff = await orphanageStaff.findByIdAndDelete(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run validators to ensure the update meets the schema requirements
    });

  if (!deletedOrphanageStaff) {
    return res.status(404).json({
      status: 'error',
      message: 'Orphanage staff not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Orphanage Staff Deleted Successfully',
    data: {
      orphanageStaff: deletedOrphanageStaff,
  },
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update orphanage staff.',
      error: error.message,
    });
  }
});
