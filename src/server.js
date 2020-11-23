const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const keys = require('./config/keys');
const User = require('./models/User');
const db = require('./config/keys').mongoURI;
console.log(db);
const routes = require('./routes/users');

const app = express();
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect(db, {useNewUrlParser: true})
  .then(() => {console.log("Sucessfully connected to database")})
  .catch((err) => {console.error(err)})

app.use(require('express-session')({
  secret: 'hallelujah',
  resave: false,
  saveUninitialized: false
})
)

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/users', routes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
})
