const axios = require("axios");

const fetchRepository = async (repoUrl) => {

    const parts = repoUrl.replace("https://github.com/", "").split("/");

    const owner = parts[0];

    const repo = parts[1];

    const githubApi = `https://api.github.com/repos/${owner}/${repo}`;

    const response = await axios.get(githubApi);

    return {

        repository: response.data.full_name,

        language: response.data.language,

        stars: response.data.stargazers_count,

        forks: response.data.forks_count,

        openIssues: response.data.open_issues_count,

        defaultBranch: response.data.default_branch

    };

};

module.exports = {

    fetchRepository

};