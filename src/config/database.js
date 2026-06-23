const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://shreyamittal239_db_user:QBP1WgkomniGpNNg@cluster0.yucneyg.mongodb.net/day-4")
    .then(()=> {
        console.log("connected to database")
    })
}

module.exports=connectToDb