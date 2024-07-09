import { Router } from "express";
import { createCollegeProfile, deleteCollege, findColleges, getColleges, patchCollege } from "../controllers/college_controller.js";
// import { localUpload, remoteUpload } from "../middlewares/upload.js";

// Create a router
const collegeRouter = Router();


collegeRouter.get('/college',getColleges);

collegeRouter.get('/college/:id',findColleges);

collegeRouter.post('/college', createCollegeProfile);

collegeRouter.delete('/college',deleteCollege);

collegeRouter.patch('/college', patchCollege)


export default collegeRouter;