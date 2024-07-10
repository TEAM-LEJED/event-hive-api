import express from "express";
import mongoose from "mongoose";
import eventRouter from "./routes/event_route.js";
import collegeRouter from "./routes/college_route.js";


// Connect to database
await mongoose.connect(process.env.MONGO_URL);
    console.log('Database is connected');


const app = express();


// Apply middlewares
app.use(express.json());


// Use routes
app.use(eventRouter);
app.use(collegeRouter);


const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
