import { Schema } from "mongoose";


const eventSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    collegeId: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    tags: {type: [String], required: true},
    type: {type: String, enum: ['Online', 'Offline'], required: true},
    banner: {type: String, required: true},
    createdBy: {type: Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})


export const EventModel = model('Event', eventSchema);