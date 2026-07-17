const express= require("express");
const app= express();
const PORT=5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("DevLens AI Backend Running 🚀");
});

app.post("analyze",(req, res) => {
    const {repoUrl}= req.body;
    console.log(repoUrl);

    res.json({
        success: true,
        message: "Repository received successfully",
        repository: repoUrl
    })

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});