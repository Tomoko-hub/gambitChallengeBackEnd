const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ResultSchema = new Schema({
    register: Number,
    result: Number,
    description: String,
})

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true    
    },
    password: {
        type: String,
        required: true
    },
})

exports.ResultModel = mongoose.model("Result",ResultSchema)
exports.UserModel = mongoose.model("User", UserSchema)