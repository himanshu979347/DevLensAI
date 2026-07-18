import Button from "../common/Button";
import { useState } from "react";
import AnalysisDashboard from "./AnalysisDashbord";

function RepositoryInput() {
    const[repoUrl, setRepoUrl]=useState("");
    const[loading, setLoading]=useState(false);
    const[result, setResult]=useState("");
    const[loadingMessage, setLoadingMessage]= useState("");

    const handleAnalyze= async () => {
        if(repoUrl.trim()===""){
            alert("Please enter GitHub Repository URL");
            return;
        }
        const githubRegex =/^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/;
        if(!githubRegex.test(repoUrl)){
            alert("Please enter a valid GitHub Repository URL");
            return;
        }

        setLoading(true);
        setLoadingMessage("🔗 Connecting to Backend...");
        setResult("");

        try {

    const response = await fetch("http://localhost:5000/analyze",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            repoUrl

        })

    });

    const data = await response.json();

setLoading(false);

if(data.success){
    setResult(data.data);
}else{
    alert(data.message);
}

}catch(error){

console.error("Backend Error :", error);

setLoading(false);

setResult("");

alert("Backend Connection Failed");

}

    };
    

    const reportData = [
    {
        icon: "📄",
        title: "Project Summary",
        value: "MERN Stack Project"
    },
    {
        icon: "🐞",
        title: "Bugs Found",
        value: "12"
    },
    {
        icon: "🔒",
        title: "Security Score",
        value: "92%"
    },
    {
        icon: "⚡",
        title: "Complexity",
        value: "Medium"
    },
    {
        icon: "💡",
        title: "AI Suggestion",
        value: "Use Lazy Loading"
    }
];

    return (
        <section className="py-20 bg-white">

            <h2 className="text-4xl font-bold text-center">
                Analyze Your GitHub Repository
            </h2>

            <p className="text-center text-gray-600 mt-4">
                Paste your GitHub repository URL and let DevLensAI explain your project.
            </p>

            <div className="max-w-3xl mx-auto mt-10 flex gap-4">

                <input
                    type="text"
                    placeholder="https://github.com/username/repository"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Button
                     text={ loading ? "Analyzing..." : "Analyze"}
                     onClick={handleAnalyze}
                />
            </div>

                {

loading && (

<p className="text-center text-blue-600 mt-6 text-lg font-semibold">
{loadingMessage}
</p>

)

}
{result &&(
    <AnalysisDashboard report={reportData}/>
)}


        </section>
    );
}

export default RepositoryInput;