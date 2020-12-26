const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Restaurant = require('../models/Restaurant');

router.post('/book-table', (req, res) => {
    console.log(req.body);
    Booking.create({
        _id: Math.round(Math.random() * 10000),
        size: req.body.size,
        time: req.body.time,
        mobile: req.body.mobile,
        email: req.body.email
    }, (err, booking) => {
        if (err)
            return res.sendStatus(500);

        Restaurant.updateOne({ name: req.body.resto }, {
            $set: { name: req.body.resto },
            $push: { bookings: booking._id }
        }, { upsert: true }, (err, data) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }

            res.send({ id: booking._id })
        })
    })
})

router.post('/fetch-bookings', (req, res) => {
    let resto = req.body.resto.toLowerCase().replace(/ /g, '-')
    Restaurant.findOne({ name: resto }, 'bookings')
        .populate('bookings')
        .exec((err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }

            res.send({ bookings: data.bookings })

        })
})

module.exports = router