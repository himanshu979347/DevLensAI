import AnalysisCard from "./AnalysisCard";

function AnalysisDashboard({report}) {

    return (
        <section className="py-20">

            <h2 className="text-4xl font-bold text-center mb-10">
                🤖 AI Analysis Report
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {report.map((item, index) => (
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