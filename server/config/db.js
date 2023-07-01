const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI, {
        dbName:"AuthMERN"
    })
    console.log("MongoDb Connected")
}
module.exports = connectDB;