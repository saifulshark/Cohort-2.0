const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lasyacodes:DjIYVcDCrWzNddB7@cluster0.ydstk0l.mongodb.net/todo")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
let todo=mongoose.model("todos",todoSchema)

module.exports={
    todo
}