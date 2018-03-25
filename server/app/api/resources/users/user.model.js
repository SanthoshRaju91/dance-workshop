import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    givenName: {
        type: String,
        required: true    
    },

    name: {
        type: String,
        required: true
    },

    imageURL: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    googleId: {
        type: String,
        required: true,
        unique: true
    },

    workshops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop'
    }]
});

export const User = mongoose.model('User', userSchema);