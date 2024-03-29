import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

class SurveyModel{
    
    static async getAllSurveys() {
        return await prisma.survey.findMany();
    }

    static async createSurvey(data){
        return await prisma.survey.create({
            data
        })
    }

    static async getSurveyById(id) {
        return await prisma.survey.findFirst({
            where:{
                id: id,
            }
        })
    }

    static async updateSurveyById(id, data) {
        return await prisma.survey.update({
            where:{
                id: id,
            },
            data
        })
    }

    static async deleteSurveyById(id) {
        return await prisma.survey.delete({
            where:{
                id: id,
            }
        });
    }
}

module.exports= SurveyModel;