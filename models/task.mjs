import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    taskName: String
})

export const Task = mongoose.model('Task', taskSchema)