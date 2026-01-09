import {Schema} from "mongoose";
import mongoose from "mongoose";

const VisitorMessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"]
    },
    skill: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.VisitorMessage || mongoose.model("VisitorMessage", VisitorMessageSchema);