require('dotenv').config({ path: "./config.env" })
const express = require('express')
const app = express();
const connectDB = require('./config/db')

connectDB();
const routes = require('./routes/auth');
app.use(express.json())
// app.use(app.router)
// routes.initialize(app)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
app.use('/api',routes)
