import { Schema, model, Types } from "mongoose";
import {toJSON} from '@reis/mongoose-to-json';


const collegeSchema = new Schema(
    {
    name: { type: String, unique: true, required: true },
    desciption: { type: String, required: true },
    banner: { type: String, required:true  },
    location: { type: String , required:true },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);
collegeSchema.plugin(toJSON);

export const collegeModel = model("college", collegeSchema);
