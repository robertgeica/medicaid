const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost/medicaid';

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true

    });
    console.log('Database connected successfuly.');
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;