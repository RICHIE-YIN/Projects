const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');
const openaiRouter = require('./routes/openai.route');
app.use('/api/openai', openaiRouter);

require('dotenv').config();
require('./config/mongoose.config'); // This is new
app.use(
    session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
    })
);
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/all.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})