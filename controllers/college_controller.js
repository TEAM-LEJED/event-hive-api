import { collegeModel } from "../model/college_model.js";

// Creating a College Updates
export const createCollegeProfile = async (req, res, next) =>{
    try {
        const newCollege = await collegeModel.create({
            ...req.body,
            banner: req.file.filename
        });
        // Return response
        res.status(201).json(newCollege)
    } catch (error) {
        next(error)
    }
}

// Getting all Colleges 
export const getColleges = async (req, res, next) => {
    try {
        // Get query params
        const { filter = "{}", sort ="{}", fields = "{}", limit = 5, skip  = 0} = req.query;
        // Get all college from database
        const getColleges = await collegeModel
            .find(JSON.parse(filter) )
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(getColleges);
    } catch (error) {
        next(error);
    }
}


// To get/find a specific College through an ID
export const findColleges = async (req, res) => {

    try {
        console.log('Geting specific data', req.body);
        const getContData = await collegeModel.findById(req.params.id)
        res.status(200).send(getContData)
    } catch (error) {
        console.log(error);
    }
}



// Delete College by id
export const deleteCollege = async (req, res, next) => {
    try {
        // We want to delete college by id
        const deletedProfile = await collegeModel.findByIdAndDelete(req.params.id);

        // Return response
        res.json(deletedProfile)
    } catch (error) {
        next(error)
    }
}


// Update by id
export const patchCollege = async (req, res, next) => {
    try {
        // Update colleges by ID to any field of that specific ID
        const updateCollege = await collegeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // return response
        res.json(updateCollege)
    } catch (error) {
        next(error);
    }
}


