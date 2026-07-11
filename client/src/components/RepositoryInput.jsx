import Button from "./Button";
import { useState } from "react";

function RepositoryInput() {
    const[repoUrl, setRepoUrl]=useState("");
    const[loading, setLoading]=useState(false);
    const[result, setResult]=useState("");

    const handleAnalyze= () => {
        if(repoUrl.trim()===""){
            alert("Please enter GitHub Repository URL");
            return;
        }
        setLoading(true);
        setResult("");
        setTimeout(()=>{
            setLoading(false);
            setResult("Repository analyzed successfully. AI Report is Ready.");
        },3000);
    };

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
                     text={ loading ? "Analyzeing..." : "Analyze"}
                     onClick={handleAnalyze}
                />
            </div>
            <p className="mt-4 text-center text-blue-600">
                    {repoUrl}
                </p>

                {

loading && (

<p className="text-center text-blue-600 mt-6">

🤖 AI is analyzing repository...

</p>

)

}
{

result && (

<div className="mt-8 p-6 rounded-lg bg-green-100 border border-green-300">

<h3 className="font-bold text-green-700">

✅ Analysis Complete

</h3>

<p className="mt-2">

{result}

</p>

</div>

)

}


        </section>
    );
}

export default RepositoryInput;