const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    recipient: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    sendAt: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: 'pending', // pending, sent, failed
    },
});

module.exports = mongoose.model('Email', emailSchema);
