import { collegeModel } from "../model/college_model.js";

// Creating a College Profile
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

// Getting all College fields
export const getColleges = async (req, res, next) => {
    try {
        // Get query params
        const { filter = "{}", sort ="{}", fields = "{}", limit = 10, skip  = 0} = req.query;
        // Get all categories from database
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


// Delete College by id
export const deleteCollege = async (req, res, next) => {
    try {
        // We want to delete recipe by id
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
        // Update recipe by ID to any field of that specific ID
        const updateCollege = await collegeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // return response
        res.json(updateCollege)
    } catch (error) {
        next(error);
    }
}


