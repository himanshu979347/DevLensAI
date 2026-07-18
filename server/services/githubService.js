const axios = require("axios");

const fetchRepository = async (repoUrl) => {

    try {

        const parts = repoUrl.replace("https://github.com/", "").split("/");

        const owner = parts[0];
        const repo = parts[1];

        const githubApi = `https://api.github.com/repos/${owner}/${repo}`;
        console.log("Owner:", owner);
console.log("Repo:", repo);
console.log("GitHub API:", githubApi);

        const response = await axios.get(githubApi);

        const languageResponse = await axios.get(`${githubApi}/languages`);

        return {

            repository: response.data.full_name,

            language: response.data.language,

            stars: response.data.stargazers_count,

            forks: response.data.forks_count,

            openIssues: response.data.open_issues_count,

            defaultBranch: response.data.default_branch,

            languages: languageResponse.data

        };

    } catch (error) {
    console.error("GitHub API URL:", githubApi);
    console.error("Original Error:", error.response?.data || error.message);
    throw error;
}

};

module.exports = {
    fetchRepository
};