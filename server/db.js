const mongoose = require('mongoose');

module.exports = () => {
  const connectionParama = { useNewUrlParser: true };
  try {
    mongoose.connect(process.env.DB, connectionParama);
    console.log('Connected to the databse successfully');
  } catch (error) {
    console.log(error);
    console.log('Could not connect to Db');
  }
};
