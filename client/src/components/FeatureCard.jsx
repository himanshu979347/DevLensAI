function FeatureCard({title, description, icon} ){
    return(
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-xl font-bold mt-4">{title}
                </h3>
                <p className="text-gray-600 mt-2">
                    {description}
                    </p>
        </div>
    );
}
export default FeatureCard;