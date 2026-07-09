import Button from "./Button";
import FeatureCard from "./FeatureCard";

function Hero() {
    const isLoggedIn=true;

    const features = [
        "AI Code Review",
        "Bug Detection",
        "Code Summary",
        "Documentation",
        "Complexity Analysis",
        "AI Security Scan"
    ];

    return (
        <section className="min-h-screen bg-slate-100 flex flex-col item-center justify-center text-center ">

            <h1 className="text-5x1 font-bold text-slate-900">
                🚀 Understand Any Codebase with AI</h1>

            <p className="mt-4 text-x1 text-gray-600">
                Upload your GitHub Repository and let AI explain your project.
            </p>

            {
                isLoggedIn ?(
                <Button text="Upload Project" />
                ):(
                <Button text="Analyze with AI" />
                )
            }

            <div>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature}
                    />
                ))}
            </div>

        </section>
    );
}

export default Hero;