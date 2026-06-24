const app = require("./src/app")
const connectToDb = require("./src/config/database")
const mongoose= require("mongoose")

require("dotenv").config();

connectToDb()

app.listen(3000, ()=>{
       console.log("server is running")
}) 