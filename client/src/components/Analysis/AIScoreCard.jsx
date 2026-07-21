function AIScoreCard({report}) {

    let score= 50;

    //Stars
    score += Math.min(report.stars/1000, 20);

    //Forks
    score += Math.min(report.forks/500, 20);

    //open issue
    score -= Math.min(report.openIssues/100, 20);

    //score should be between 0 to 100
    score= Math.max(0, Math.min(100, Math.round(score)));

    let rating = "";
    let stars = "";
    
    if (score >= 90) {
        rating = "Excellent Repository";
        stars = "⭐⭐⭐⭐⭐";
    } else if (score >= 70) {
        rating = "Good Repository";
        stars = "⭐⭐⭐⭐☆";
    } else if (score >= 50) {
        rating = "Average Repository";
        stars = "⭐⭐⭐☆☆";
    } else {
        rating = "Needs Improvement";
        stars = "⭐⭐☆☆☆";
    }

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
                        {score}
                    </h1>

                    <p className="text-xl">
                        Overall Score
                    </p>

                </div>

                <div className="text-right">

                    <p className="text-2xl">
                        {stars}
                    </p>

                    <p className="mt-2">
                        {rating}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default AIScoreCard;