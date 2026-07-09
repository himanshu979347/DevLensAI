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
        <section>

            <h1>🚀 Understand Any Codebase with AI</h1>

            <p>
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