const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lasyacodes:DjIYVcDCrWzNddB7@cluster0.ydstk0l.mongodb.net/businesscard")
const socialmediaSchema=mongoose.Schema({
    linkedin:String,
    twitter:String
})
const cardSchema=mongoose.Schema({
    name:String,
    description:String,
    socialmedia:socialmediaSchema,
    interests:[String]
})

let businesscards=mongoose.model("businesscards",cardSchema)

module.exports={
    businesscards
}