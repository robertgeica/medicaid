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