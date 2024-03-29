const express = require("express");
import surveyRouter from "./routes/survey_routes";

const rootRouter = express.Router();

rootRouter.get("/", (req,res)=>{
    res.json({
        message: "Welcome to version 1 of survey API"
    })
})

rootRouter.use(surveyRouter);

module.exports=rootRouter;