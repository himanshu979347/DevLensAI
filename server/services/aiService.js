const { GoogleGenerativeAI } = require("@google/generative-ai");

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
    throw new Error("Missing GEMINI_API_KEY. Please add GEMINI_API_KEY to your .env or environment variables.");
}

const genAI = new GoogleGenerativeAI(geminiApiKey);

const MODELS = ["gemini-3.5-flash", "gemini-2.0-flash"]; // primary, then fallback
const MAX_RETRIES = 3;

const callGeminiWithRetry = async (prompt, modelIndex = 0) => {
    const modelName = MODELS[modelIndex];

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            return result;
        } catch (error) {
            const status = error.status;
            const retryable = status === 503 || status === 429;

            if (retryable && attempt < MAX_RETRIES) {
                const delay = Math.min(1000 * 2 ** attempt, 10000); // exponential backoff, capped at 10s
                console.warn(`${modelName} attempt ${attempt} failed (${status}), retrying in ${delay}ms`);
                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
            }

            if (retryable && modelIndex + 1 < MODELS.length) {
                console.warn(`${modelName} exhausted retries, falling back to ${MODELS[modelIndex + 1]}`);
                return callGeminiWithRetry(prompt, modelIndex + 1);
            }

            throw error;
        }
    }
};

const analyzeWithAI = async (repositoryData) => {

    const prompt = `
Analyze this GitHub repository.

Repository: ${repositoryData.repository}

Primary Language: ${repositoryData.language}

Stars: ${repositoryData.stars}

Forks: ${repositoryData.forks}

Open Issues: ${repositoryData.openIssues}

{
  "summary": "",
  "codeQuality": "",
  "suggestions": [
    "",
    "",
    ""
  ]
}

Do not write markdown.
Do not use \`\`\`json.
Return only JSON.
`;

    try {
        const result = await callGeminiWithRetry(prompt);
        const response = result.response.text();
        const aiData = JSON.parse(response);

        return {
            summary: aiData.summary,
            quality: aiData.codeQuality,
            suggestions: aiData.suggestions
        };
    } catch (error) {
        console.error("All Gemini attempts failed:", error.message);
        throw new Error("AI analysis is temporarily unavailable. Please try again shortly.");
    }

};

module.exports = {
    analyzeWithAI
};