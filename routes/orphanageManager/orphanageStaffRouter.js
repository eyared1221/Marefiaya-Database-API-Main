import express from "express";
import { 
    createOrphanageStaff,
    updateOrphanageStaff,
    // getOrphanageStaff,  
    deleteOrphanageStaff 
}  from '../../controllers/orphanageManager/orphanageStaffController.js';

const router = express.Router();


router
    .route('/')
    .post(createOrphanageStaff);

router
    .route('/:id')
   // .get(getOrphanageStaff)
    .put(updateOrphanageStaff)
    .delete(deleteOrphanageStaff);

export default router;