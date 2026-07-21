function AIScoreCard() {

    return (

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8 mb-10">

            <h2 className="text-3xl font-bold">
                🤖 AI Repository Health
            </h2>

            <p className="mt-2 text-blue-100">
                AI Generated Repository Overview
            </p>

            <div className="mt-8 flex items-center justify-between">

                <div>

                    <h1 className="text-6xl font-bold">
                        92
                    </h1>

                    <p className="text-xl">
                        Overall Score
                    </p>

                </div>

                <div className="text-right">

                    <p className="text-2xl">
                        ⭐⭐⭐⭐☆
                    </p>

                    <p className="mt-2">
                        Excellent Repository
                    </p>

                </div>

            </div>

        </div>

    );

}

export default AIScoreCard;