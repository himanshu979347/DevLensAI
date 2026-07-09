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

            <h1 className="text-5x1 font-bold text-slate-900 leading-tight">
                🚀 Understand Any Codebase with AI</h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2x1">
                Upload your GitHub Repository and let AI explain your project,
                detect bugs and generate documentation within seconds.
                
            </p>

            <div className="flex gap-4 mt-8">
                <Button text="Upload Repository" />
                <Button text="Try Demo" />
            </div>

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