const express=require("express")
const cors=require("cors")
const { updateCard, postCard, deleteCard } = require("./ZodValidations")
const {businesscards}=require("./Db")
const app=express()

app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
app.get("/cards",async (req,res)=>{
    
    let totalCards=await businesscards.find({})
    res.json(totalCards)
})

app.post("/card",async (req,res)=>{
    const postBodyCard=req.body
    console.log("hey",postBodyCard)
    let result=postCard.safeParse(postBodyCard)
    if(!result.success)
    {
        return res.status(411).json(
        {
            msg: result.error.errors
        }
        )
    }
    let cardsResult=await businesscards.create({
        name:req.body.name,
        description:req.body.description,
        socialmedia:req.body.socialmedia,
        interests:req.body.interests
    })
    return res.json({
        msg:"Added to db"
    })
    
})
app.put("/card",async (req,res)=>{
    const updateBodyCard=req.body
    let result=updateCard.safeParse(updateBodyCard)
    if(!result.success)
    {
        return res.status(411).json(
        {
            msg:"invalid inputs"
        }
        )
    }
    let cardsResult=await businesscards.updateOne({_id:req.body.id},{
        description:req.body.description
    })
    return res.json({
        msg:"Updated to db"
    })
    
    
})
app.delete("/card",async (req,res)=>{
    const deleteBodyCard=req.body
    let result=deleteCard.safeParse(deleteBodyCard)
    if(!result.success)
    {
        return res.status(411).json(
        {
            msg:"invalid inputs"
        }
        )
    }
    let cardsResult=await businesscards.deleteOne({_id:req.body.id})
    return res.json({
        mag:"Deleted from db"
    })

})

let port=3000

app.listen(port,()=>{
    console.log("listening to "+port)
})