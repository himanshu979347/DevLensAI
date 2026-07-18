const {
    fetchRepository
} = require("../services/githubService");

const analyzeRepository = async (req, res) => {

    try {

        const { repoUrl } = req.body;

        const repositoryData = await fetchRepository(repoUrl);

        res.json({

            success: true,

            data: repositoryData

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