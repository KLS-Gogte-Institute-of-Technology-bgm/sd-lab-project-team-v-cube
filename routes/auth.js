const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.get('/user', (req, res) => {
    if (req.user)
        return res.send({
            user: req.user
        });
    res.send({
        user: null
    });
});

router.post('/signup', (req, res) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err)
            return res.status(400).send(err)
        else
            res.status(200).send(user)
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
        return res.send({
            user: { username: req.user.username, flag: req.user.flag, resto: req.user.resto }
        });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.sendStatus(200);
});

module.exports = router;