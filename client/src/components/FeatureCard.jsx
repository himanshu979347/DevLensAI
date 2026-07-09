function FeatureCard({title, description, icon} ){
    return(
        <div className="bg-white rounded-x1 shadow-md p-6 hover:shadow-x1 transition duration-300">
            <div className="text-4x1">{icon}</div>
            <h3 className="text-x1 font-bold mt-4">{title}
                </h3>
                <p className="text-gray-600 mt-2">
                    {description}
                    </p>
        </div>
    );
}
export default FeatureCard;