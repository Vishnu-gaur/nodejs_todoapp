//@ts-check
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    description :{
      type: String,
      required: true,
    },
    iscompleted: {
        type: Boolean,
        default: false,
    },
    user :{
      type: mongoose.Schema.Types.ObjectId,
      Ref: "user",
      required: true,
    },  
     createdAt: {
      type: Date,
      default: Date.now,
     },
 });
   export const task = mongoose.model("task", schema);