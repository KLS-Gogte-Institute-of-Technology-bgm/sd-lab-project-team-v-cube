const mongoose = require('mongoose');

const restoSchema = new mongoose.Schema({
    name: String,
    bookings: [{ type: Number, ref: 'Booking' }],
    tables: [mongoose.Schema.Types.Mixed]
})

module.exports = mongoose.model('Restaurant', restoSchema);