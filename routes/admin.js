const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.post('/free-table', (req, res) => {
    let name = req.body.resto.toLowerCase().replace(/ /g, '-');
    Restaurant.findOneAndUpdate({ name: name }, {
        $set: { "tables.$[el].occupied": false, "tables.$[el].id": null },
        $pull: { "bookings": req.body.id }
    }, {
        arrayFilters: [{ "el.id": Number(req.body.id) }],
        new: true
    })
        .populate('bookings', 'size')
        .exec((err, data) => {
            if (err)
                res.sendStatus(500);

            let tables = data.tables;
            let bookings = data.bookings;
            let freeTables = tables.length - tables.filter(x => x.occupied == false).length;
            // let fullIds = tables.map(x => x.id)
            // let allIds = bookings.map(x => x._id)
            // let freeIds = allIds.filter(x => !fullIds.includes(x));
            // console.log(freeIds);

            // for(let i in freeIds) {
            //     for (let j in tables) {
            //         if (!tables[j].occupied && tables[j].capacity >= free[i].size) {
            //             tables[j].occupied = true;
            //             tables[j].id = bookings[i]._id;
            //             break;
            //         }
            //     }
            // }
            for (let i = freeTables; i < bookings.length; i++) {
                for (let j in tables) {
                    if (!tables[j].occupied && tables[j].capacity >= bookings[i].size) {
                        tables[j].occupied = true;
                        tables[j].id = bookings[i]._id;
                        break;
                    }
                }
            }

            Restaurant.updateOne({ name: name }, {
                $set: { tables: tables }
            }, (err, data) => {
                console.log(tables);
            });


            req.io.sockets.emit(name, { bookings: data.bookings, tables: tables.length });
            res.sendStatus(200);
        })
})

router.post('/allot-table', (req, res) => {
    let name = req.body.resto.toLowerCase().replace(/ /g, '-');
    let table = "tables." + req.body.idx + ".occupied";
    console.log(table);
    Restaurant.findOneAndUpdate({ name: name }, {
        $set: { table: true },
    }, (err, data) => {
        if (err)
            res.sendStatus(500)

        console.log(data);
        res.sendStatus(200)
    })
})

module.exports = router;