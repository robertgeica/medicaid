const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./config/db');

// connect mongodb
connectDb();

// apply middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/ticket', require('./routes/api/ticket'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})



server = app.listen(8081, function(){
  console.log('Messaging server is running on port 8081')
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});



io.on('connection', function(socket) {

    console.log("User", socket.id, "has connected.");

    socket.on('message', ({ name, message, messageId }) => {
      io.emit('message', { name, message, messageId })
    })

    // socket.on('send_message', function(data) {
    //     console.log(socket.id, "sent message:", data);
    //     io.to(data.targetSocketID).emit('receive_message', data);
    // })

    socket.on("disconnect", function() {
        console.log("User", socket.id, "disconnected.");
    })
});