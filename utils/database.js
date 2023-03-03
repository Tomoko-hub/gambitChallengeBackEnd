const mongoose = require("mongoose")

const connectDB = async()=> {

    try {
        await mongoose.connect("mongodb+srv://tomoko:kissa123@cluster0.missstt.mongodb.net/AppDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to Mongo DB!")
    }catch(err){
        console.log("Failure : Unconnected to MongoDB.")
        throw new Error()
    }
}

module.exports = connectDB