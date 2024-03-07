const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
const socketIo = require('socket.io');
const io = socketIo(server,{ 
    cors: {
      origin: 'http://localhost:3000'
    }
});
const cors = require("cors");
const port = process.env.PORT || 3000;

const mongodb = require("./src/database/database");

// db config
mongodb.createDbConnection();

// Using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const reviewRoutes = require("./src/routers/review.routes");
app.use("/", reviewRoutes);

// Handle socket connection
io.on('connection', (socket) => {
    console.log('A user connected');
});

server.listen(port, () => {
    console.log(`Server listening on port ${port} successfully`);
});
