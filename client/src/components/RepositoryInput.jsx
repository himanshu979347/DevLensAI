import Button from "./Button";
import { useState } from "react";

function RepositoryInput() {
    const[repoUrl, setrepoUrl]=useState("");
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
                    onChange={(e) => setrepoUrl(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Button text="Analyze" />
            </div>
            <p className="mt-4 text-center text-blue-600">
                    {repoUrl}
                </p>


        </section>
    );
}

export default RepositoryInput;