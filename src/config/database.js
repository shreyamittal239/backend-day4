const mongoose = require("mongoose")


function connectToDb(){
    console.log("MONGO_URI =", process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connected to database")
    })
}



module.exports=connectToDb