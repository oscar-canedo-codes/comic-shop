// IMPORTS
const config = require('./utils/config');
const cors = require('cors');
const { configCloudinary } = require('./utils/cloudinary');
const db = require ('./utils/db');
const express = require('express');
const logger = require('morgan');
const HTTPSTATUSCODE = require('./utils/httpStatusCode');

// ROUTES

const users = require('./api/routes/users.routes');
const products = require('./api/routes/products.routes');
const comics = require('./api/routes/comics.routes');

const PORT = config.PORT;
const server = express();

configCloudinary();

// HEADERS

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


// CORS

server.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }));


// JSON PARSERS

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// MORGAN

server.use(logger("dev"));

// ROUTES

server.use("/users", users);
server.use("/products", products);
server.use("/comics", comics);


// UNDEFINED ROUTES

server.use((req, res, next) => {
  
    let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

// ERROR CONTROLLER

server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || HTTPSTATUSCODE[500]);
})

server.disable('x-powered-by');

// CONNECT TO DB

db.connectDB().then(() => {
    console.log("Connected to Mongo database");
    server.listen(PORT, () => {
      console.log(`Initiated express server on port ${PORT}`);
    });
  });