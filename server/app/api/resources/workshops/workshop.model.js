import mongoose from 'mongoose';

const WorkshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    banner: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    by: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

export const Workshop = mongoose.model('Workshop', WorkshopSchema);