const express = require('express');
const cors = require('cors');
const app = express();
const openAIRoutes = require('./routes/openai.routes'); // Add this line
app.use('/api/openai', openAIRoutes);

require('dotenv').config();
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/all.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})