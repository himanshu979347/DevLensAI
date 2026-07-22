function AISummary({ aiAnalysis }) {

    return (

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
                🤖 AI Summary
            </h2>

            <div className="space-y-6">

                <div>

                    <h3 className="font-semibold text-lg">
                        Repository Summary
                    </h3>

                    <p className="text-gray-600 mt-2">
                        {aiAnalysis.summary}
                    </p>

                </div>

                <div>

                    <h3 className="font-semibold text-lg">
                        Code Quality
                    </h3>

                    <p className="text-green-600 font-bold">
                        {aiAnalysis.quality}
                    </p>

                </div>

                <div>

                    <h3 className="font-semibold text-lg">
                        AI Suggestions
                    </h3>

                    <ul className="list-disc ml-6 mt-2">

                        {(aiAnalysis.suggestions || []).map((item,index)=>(

                            <li key={index}>
                                {item}
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </div>

    );

}

export default AISummary;