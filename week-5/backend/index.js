const express=require("express");
const zod=require("zod");
const app=express();
app.use(express.json());
//zod for verification 

const userSchema=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6)

})



//get card from database
//body with username and password
app.get("/cards",(req,res)=>{
    

    try{
        userSchema.selfParse(req.body);
        const username=req.body.username;
        const password=req.body.password;
        const cards=card.find({})
        res.json({
            card,
        })


    }catch{
        res.status(403).json({
            msg:"invalid username or password"
        })
    }

})