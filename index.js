import express from "express";
import mongoose from "mongoose";


// Connect to database
// await mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(express.json());


const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
