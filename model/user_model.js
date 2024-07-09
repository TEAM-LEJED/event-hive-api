import { Schema } from "mongoose";


const userSchema = new Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String}
}, {
    timestamps: true
})


export const userModel = model('User', userSchema);