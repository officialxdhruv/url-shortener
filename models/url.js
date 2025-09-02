import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [
        {
            timestamp: { type: Date, default: Date.now }
        },
    ],
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    }
},
    { timestamps: true }
);

const URL = mongoose.model('url', urlSchema);

export default URL;