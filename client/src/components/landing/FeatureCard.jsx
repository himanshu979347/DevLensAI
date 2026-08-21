function FeatureCard({title, description, icon} ){
    return(
        <div className="bg-gray-800 text-slate-200 rounded-xl shadow-md p-6 m-4 hover:shadow-xl transition duration-300">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-xl font-bold mt-4">{title}
                </h3>
                <p className="text-gray-300 mt-2">
                    {description}
                    </p>
        </div>
    );
}
export default FeatureCard;