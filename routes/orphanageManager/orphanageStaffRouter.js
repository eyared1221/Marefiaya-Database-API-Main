import express from "express";
import { 
    createOrphanageStaff, 
    getOrphanageStaff, 
    updateOrphanageStaff, 
    deleteOrphanageStaff 
}  from '../../controllers/orphanageManager/orphanageStaffController.js';

const router = express.Router();


router
    .route('/')
    .post(createOrphanageStaff);

router
    .route('/:id')
    .get(getOrphanageStaff)
    .patch(updateOrphanageStaff)
    .delete(deleteOrphanageStaff);


export default router;