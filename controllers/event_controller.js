import { EventModel } from "../model/event_model.js";


// Function to create an event
export const postEvent = async (req, res, next) => {
    try {
        // Add event to database
        const newEvent = await EventModel.create({
            ...req.body,
            banner: req.file.filename
        });
        // Return response
        res.json(newEvent);

    } catch (error) {
        next(error)
    }
}


// Function to get all events
export const getEvents = async (req, res, next) => {
    try {
        // Get query params
        const {
            filter = "{}",
            sort = "{}",
            fields = "{}",
            limit = 5,
            skip = 0
        } = req.query;
        // Get all events from database
        const allEvents = await EventModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(JSON.parse(limit))
            .skip(JSON.parse(skip));
        // Return response
        res.status(200).json(allEvents);
    } catch (error) {
        next(error)
    }
}


// Function to get event by id
export const getEventById = async (req, res, next) => {
    try {
        // Get event by id
        const getEvent = await EventModel.findById(req.params.id);
        // Return response
        res.json(getEvent)
    } catch (error) {
        next(error)
    }
}


// Function to update an event
export const patchEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id
        const updatedEvent = await EventModel.findByIdAndUpdate({_id: eventId}, req.body, { new: true });
        // Return response
        res.status(200).json(updatedEvent);

    } catch (error) {
        next(error)
    }
}


// Function to delete an event
export const deleteEvent = async (req, res, next) => {
    try {
        // Delete event by id
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json('Selected event has been deleted')
    } catch (error) {
        next(error)
    }
}