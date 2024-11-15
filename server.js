const express = require('express')
const mongoose = require('mongoose')

const morgan = require('morgan')
const cors = require('cors');
const mainRouter = require('./routes/mainRouter')
require('dotenv').config({path:'./config/.env'})
require('./db/database');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors());

app.use('/',mainRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})