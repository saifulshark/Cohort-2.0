const mongoose=require("mongoose");
mongoose.connect("");

const card=mongoose.Schema({
    name:String,
    desciption:String,
    Interests:Array,
    Linked:String,
    Twitter:String
})

const cardSchema=mongoose.model("card",card);
module.export ={cardSchema}