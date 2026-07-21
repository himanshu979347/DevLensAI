const analyzeWithAI = async (repositoryData) => {

    return {
        summary: `Repository ${repositoryData.repository} is mainly written in ${repositoryData.language}.`,

        quality: "Good",

        suggestions: [
            "Improve documentation",
            "Add more tests",
            "Optimize project structure"
        ]
    };

};

module.exports = {
    analyzeWithAI
};