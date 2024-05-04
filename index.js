const express = require("express");
const { connectDB } = require("./src/utils/database");
const routerUser = require("./src/api/routes/user.routes");
const env = require("dotenv");
const cors = require("cors");
env.config();

const apiUrl = 'http://swapi.dev/api/';
const endpoint = '/data';

fetch(apiUrl + endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error to call api');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const server = express();
server.use(express.json());
connectDB();
server.use(cors());
server.use("/user", routerUser);

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Lisent port http://localhost:${PORT}`);
});

module.exports = controller;
