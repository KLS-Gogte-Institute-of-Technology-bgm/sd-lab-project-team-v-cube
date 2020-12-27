const express = require('express');
const connectDB = require('./config/db')
const app = express();
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
var bodyParser = require('body-parser');
let http = require('http').createServer(app);

const PORT = process.env.PORT || 5000;
const io = require('socket.io')(http,
  {
    cors: { origin: '*' }
  });

app.use(cors())
io.on('connection', socket => {
  console.log('socketconnect');
})
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//connect database
connectDB();
app.use(session({
  secret: 'I hate queues',
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  req.io = io;
  next();
})
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api', require('./routes/booking'))
app.use(express.json({
  extended: false
}));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

http.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`)
})