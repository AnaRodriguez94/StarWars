const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    const { name, host } = db.connection;
    console.log(`Name of the BD ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
