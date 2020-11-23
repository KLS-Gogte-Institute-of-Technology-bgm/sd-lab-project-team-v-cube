const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res) => {

} )
router.post('/register', (req, res) => {
  User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
    if(err)
      console.error(err);
    else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/login');
      })
    }
  })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));

module.exports = router;
