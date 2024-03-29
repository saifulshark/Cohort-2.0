const express = require("express");
const SurveyModel = require("../models/survey_model");

const surveyRouter = express.Router();

surveyRouter.get("/surveys", async (req,res)=>{

    try {
        const surveys = await SurveyModel.getAllSurveys();
        res.json({
            surveys:surveys,
        })
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

surveyRouter.post("/surveys", async (req,res)=>{
    try {
        const data = req.body;
        const survey = await SurveyModel.createSurvey(body);
        res.json({
            newSurvey: survey
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
});

surveyRouter.get("/surveys/:id", async (req,res)=>{

    try {
        const id = req.params.id;
        const survey = await SurveyModel.getSurveyById(id);

        if(survey == null) return res.status(404).json("No such survey found");
        res.json({
            survey: survey,
        })
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

surveyRouter.put("/surveys/:id",async (req,res)=>{

    try {
        const survey = await SurveyModel.updateSurveyById(req.params.id, req.body);
        res.json({
            survey:survey,
        })
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

surveyRouter.delete("/surveys/:id", async (req,res)=>{

    try {
        const survey = await SurveyModel.deleteSurveyById(req.params.id);

        res.json({
            message: "survey deleted",
        })
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports= surveyRouter;