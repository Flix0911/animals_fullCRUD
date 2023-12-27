//dependencies

//use .env variables
require("dotenv").config()
//db config
require("./config/db")

//express
const express = require("express")

//morgan
const morgan = require("morgan")

//method-override
const methodOverride = require("method-override")

//express application
const app = express()
//port
const { PORT = 3013 } = process.env

//import Animals model
const Animal = require("./models/Animal")

//--------------------------------------------
//middleware

//morgan logger
app.use(morgan("dev"))

//access to req.body
app.use(express.urlencoded({ extended: true}))

//method-override - allow access to DELETE and PUT
app.use(methodOverride("_method"))

//--------------------------------------------
//routes

//--------------------------------------------
//server listener
app.listen(PORT, () => console.log(`Running on ${PORT}`))