import AnalysisCard from "./AnalysisCard";

function AnalysisDashboard({ report }) {

    const cards = [
        {
            icon: "📦",
            title: "Repository",
            value: report.repository
        },
        {
            icon: "💻",
            title: "Language",
            value: report.language || "Not Detected"
        },
        {
            icon: "⭐",
            title: "Stars",
            value: report.stars
        },
        {
            icon: "🍴",
            title: "Forks",
            value: report.forks
        },
        {
            icon: "🐞",
            title: "Open Issues",
            value: report.openIssues
        },
        {
            icon: "🌿",
            title: "Default Branch",
            value: report.defaultBranch
        }
    ];

    const languages = report.languages || {};

    const totalBytes = Object.values(languages).reduce(
        (sum, value) => sum + value,
        0
    );

    return (
        <section className="py-20">

            <h2 className="text-4xl font-bold text-center mb-10">
                🤖 AI Analysis Report
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {cards.map((item, index) => (
                    <AnalysisCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        value={item.value}
                    />
                ))}

            </div>

            <div className="mt-16">

                <h3 className="text-3xl font-bold mb-6">
                    💻 Languages Used
                </h3>

                {
                    Object.entries(languages).map(([name, bytes]) => {

                        const percentage = ((bytes / totalBytes) * 100).toFixed(1);

                        return (

                            <div
                                key={name}
                                className="mb-6">
                                    
                                    {/* Top Row */}
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-slate-700">
                                            {name}
                                        </span>
                                        <span className="font-bold text-blue-600">
                                            {percentage}%
                                        </span>
                                    </div>
                                    
                                    {/* Progress Bar Background */}
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        {/* Filled Progress */}
                                        <div className="bg-blue-600 h-3 rounded-full transition-all duration-700"
                                        style={{width: `${percentage}%`}}>

                                    </div>
                                </div>
                            </div>

                        );

                    })
                }

            </div>

        </section>
    );
}

export default AnalysisDashboard;
