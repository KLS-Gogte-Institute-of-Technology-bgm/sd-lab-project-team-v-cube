const mongoose = require('mongoose');

const restoSchema = new mongoose.Schema({
    name: String,
    bookings: [{ type: Number, ref: 'Booking' }]
})

module.exports = mongoose.model('Restaurant', restoSchema);