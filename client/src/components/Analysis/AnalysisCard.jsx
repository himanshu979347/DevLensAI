function AnalysisCard({ title, value, icon }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-4xl">{icon}</div>

            <h3 className="mt-4 text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-2xl font-bold text-blue-600">
                {value}
            </p>
        </div>
    );
}

export default AnalysisCard;