const analyzeRepository = (req, res) => {

    const { repoUrl } = req.body;

    console.log("Repository URL:", repoUrl);

    res.json({

        success: true,

        message: "Repository received successfully.",

        repository: repoUrl

    });

};

module.exports = {

    analyzeRepository

};