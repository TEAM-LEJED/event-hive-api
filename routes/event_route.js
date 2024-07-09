import { Router } from "express";
import { getEvents, postEvent, getEventById, patchEvent, deleteEvent } from "../controllers/event_controller.js";


// Create router
const eventRouter = Router();


// Define routes
eventRouter.post('/events', remoteUpload.single('banner'), postEvent)

eventRouter.get('/events', getEvents)

eventRouter.get('/events/:id', getEventById)

eventRouter.patch('/events/:id', patchEvent)

eventRouter.delete('/events/:id', deleteEvent)


// Export router
export default eventRouter;