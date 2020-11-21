const http = require('http');
const socketio = require('socket.io');
const express = require('express');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


const connectDb = require('./config/db');

// connect mongodb
connectDb();


// apply middlewares
app.use(cors());
app.use(express.json({ extended: false }));


// routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/register', require('./routes/api/register'));
// app.use('/api/chat', require('./routes/api/chat'));


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

