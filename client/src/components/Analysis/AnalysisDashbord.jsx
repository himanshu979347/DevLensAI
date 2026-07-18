import AnalysisCard from "./AnalysisCard";

function AnalysisDashboard({ report }) {

    const reportCards = [
        {
            icon: "📦",
            title: "Repository",
            value: report.repository
        },
        {
            icon: "💻",
            title: "Language",
            value: report.language
        },
        {
            icon: "⚛️",
            title: "Framework",
            value: report.framework
        },
        {
            icon: "📂",
            title: "Files Found",
            value: report.files
        }
    ];

    return (
        <section className="py-20">

            <h2 className="text-4xl font-bold text-center mb-10">
                🤖 AI Analysis Report
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                {reportCards.map((item, index) => (
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