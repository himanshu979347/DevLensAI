const fetchRepository = async (repoUrl) => {
    console.log("Fetching Repository...");
    return{
        repository: repoUrl,
        language: "javaScript",
        framework: "react",
        files: 145
    };
};
module.exports = {
    fetchRepository
};