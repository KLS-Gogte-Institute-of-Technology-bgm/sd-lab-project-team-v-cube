const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Restaurant = require('../models/Restaurant');

router.post('/book-table', (req, res) => {
    console.log(req.body);
    Booking.create({
        _id: Math.round(Math.random() * 10000),
        name: req.body.name,
        size: req.body.size,
        time: req.body.time,
        mobile: req.body.mobile,
        email: req.body.email
    }, (err, booking) => {
        if (err)
            return res.sendStatus(500);

        Restaurant.findOne({ name: req.body.resto }, 'tables -_id', (err, data) => {
            let tables;
            if (!data) {
                Restaurant.create({
                    name: req.body.resto,
                    tables: [{ capacity: 2, occupied: false, id: null }, { capacity: 4, occupied: false, id: null }, { capacity: 4, occupied: false, id: null }, { capacity: 6, occupied: false, id: null }],
                    bookings: []
                }, (err, resto) => {
                    tables = resto.tables;
                })
            } else
                tables = data.tables;

            for (let i in tables) {
                if (tables[i].capacity >= req.body.size && !tables[i].occupied) {
                    tables[i].occupied = true;
                    tables[i].id = booking._id;
                    break;
                }
            }
            Restaurant.findOneAndUpdate({ name: req.body.resto }, {
                $set: { tables: tables },
                $push: { bookings: booking._id }
            }, { upsert: true, new: true })
                .populate('bookings', 'size')
                .exec((err, data) => {
                    if (err) {
                        console.log(err);
                        return res.sendStatus(500);
                    }
                    req.io.sockets.emit(req.body.resto, { bookings: data.bookings, tables: data.tables.length, id: booking._id })
                    res.send({ id: booking._id })
                })
        })
    })
})

router.post('/fetch-details', (req, res) => {
    let resto = req.body.resto.toLowerCase().replace(/ /g, '-')
    Restaurant.findOne({ name: resto }, 'bookings tables -_id')
        .populate('bookings')
        .exec((err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }

            res.send(data)

        })
})

module.exports = router