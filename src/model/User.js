import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username must be 3–20 characters and can contain letters, numbers, _ or ."
        ]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ]
    },
    verificationCode: {
        type: Number,
        required: true,
    },

    verifiedexpiredate:{
        type: Date,
        required: true,
    },

    verifiedemail: {
        type: Boolean,
        default: false
    },
    password: {
        trype: String,
        required: true,
    },
    login: {
        type: Boolean,
        default: false
    },
    logindate: {
        type: Date,
        default: Date.now()
    },
})


const UserModel = (mongoose.model.User) || mongoose.model("User",UserSchema);

export default UserModel;