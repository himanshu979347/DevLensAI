const { fetchRepository} = require("../services/githubService");
const {analyzeWithAI}= require("../services/aiService");

const analyzeRepository = async (req, res) => {

    try {

        const { repoUrl } = req.body;

        const repositoryData = await fetchRepository(repoUrl);
        const aiAnalysis = await analyzeWithAI(repositoryData);

        res.json({

            success: true,

            data: {
                ...repositoryData,
                
                aiAnalysis
            }

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    analyzeRepository

};