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

        </section>

    );

}

export default AnalysisDashboard;