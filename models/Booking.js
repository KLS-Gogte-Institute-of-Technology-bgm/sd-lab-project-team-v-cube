const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    size: Number,
    time: String,
    mobile: String,
    email: String
})

module.exports = mongoose.model('Booking', bookingSchema);