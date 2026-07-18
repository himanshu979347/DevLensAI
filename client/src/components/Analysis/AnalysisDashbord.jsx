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
                Object.entries(languages).map(([name, bytes]) => (
                <div key={name} className="flex justify-between border-b py-3">
                    <span>
                        {name}
                    </span>
                    <span>
                        {bytes.toLocaleString()} bytes
                    </span>
                </div>
              ))
              }
            </div>

        </section>

    );

}

export default AnalysisDashboard;