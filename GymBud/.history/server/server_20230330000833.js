const express = require('express');
const cors = require('cors');
const app = express();
const openaiRoutes = require("./routes/openai");
app.use("/api/openai", openaiRoutes);


require('dotenv').config();
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/all.routes')(app);

app.use(cors({
    origin: 'http://localhost:3000' // Replace this with the allowed origin(s)
  }));

  
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})