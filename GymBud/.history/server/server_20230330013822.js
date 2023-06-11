const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();


app.use(cors({
  origin: 'http://localhost:3000', // Replace this with the allowed origin(s)
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const openaiRoutes = require('./routes/openai');
app.use('./api/openai', openaiRoutes);

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/all.routes')(app);

app.listen(8000, () => {
  console.log('Listening at Port 8000');
});
