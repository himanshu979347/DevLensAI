const {
    fetchRepository
} = require("../services/githubService");

const analyzeRepository = async (req, res) => {

    const { repoUrl } = req.body;

    const repositoryData = await fetchRepository(repoUrl);

    res.json({

        success: true,

        data: repositoryData

    });

};

module.exports = {

    analyzeRepository

};