const express = require("express");
const surveyRouter = require("./routes/survey_routes");

const rootRouter = express.Router();

rootRouter.get("/", (req,res)=>{
    res.json({
        message: "Welcome to version 1 of survey API"
    })
})

rootRouter.use("/surveys",surveyRouter);

module.exports=rootRouter;