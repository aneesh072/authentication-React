require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db');

//database connection
connection();

app.use(express.json());
app.use(cors);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on port ${port}`));
