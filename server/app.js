require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const {MONGODB_URI } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Connected to Mongo on ${MONGODB_URI}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
var whitelist = [
  'http://localhost:3000'
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Express View engine setup

app.use(session({
  secret: 'react auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport')(app);


const authRouter = require('./routes/auth');
const chapterRoutes = require("./routes/chapters")
app.use('/api/auth', authRouter);
app.use("/api/games",chapterRoutes)

app.use("*", (req, res, next) => {
  // If no routes match, send them the React HTML.
  console.log(res.sendFile(path.join(__dirname, "/public/index.html")))
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = app;  