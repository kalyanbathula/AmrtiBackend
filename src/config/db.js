const mongoose = require("mongoose")

const mongoDbUrl =
  "mongodb+srv://kalyanbathula7893:rLNlqurDcF0q5zPh@cluster0.cyxpjje.mongodb.net/";
const connectDb=()=>{
    console.log("connected")
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}