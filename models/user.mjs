import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:String,
    username: String,
    age: Number
})

export const User = mongoose.model('User', userSchema)