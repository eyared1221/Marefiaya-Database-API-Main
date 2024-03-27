/*
The controller is going to contain all our logic for the request response
*/
import asyncHandler from 'express-async-handler';
import orphanageStaff from '../../models/orphanageStaffModel.js';

export const getOrphanageStaff = asyncHandler(async (req, res) => {
    const customer = await orphanageStaff.findById(req.params.id).populate('tickets');
    res.status(200).json({
      status: 'success',
      data: customer
    });
  });

export const createOrphanageStaff = asyncHandler(async (req, res) => {
        const newCustomer = await orphanageStaff.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                customer_id: newCustomer._id
            }
    });
});

export const updateOrphanageStaff = asyncHandler(async (req, res) => {
        const customer = await orphanageStaff.findByIdAndUpdate(req.params.id, req.body, {})
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
});

export const deleteOrphanageStaff = asyncHandler(async (req, res) => {
        await orphanageStaff.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            cinema_id: req.params.id
        });
});
