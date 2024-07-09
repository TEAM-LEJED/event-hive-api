import { Router } from "express";
import { createCollegeProfile, deleteCollege, getColleges, patchCollege } from "../controllers/college_controller.js";
// import { localUpload, remoteUpload } from "../middlewares/upload.js";

// Create a router
const collegeRouter = Router();


collegeRouter.get('/college',getColleges);

collegeRouter.post('/college', createCollegeProfile);

collegeRouter.delete('/college',deleteCollege);

collegeRouter.patch('/college', patchCollege)