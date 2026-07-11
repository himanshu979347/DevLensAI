import FeatureCard from "./FeatureCard";
function Features(){
    const features = [
  {
    icon: "🤖",
    title: "AI Code Review",
    description: "Understand any codebase quickly."
  },
  {
    icon: "🐞",
    title: "Bug Detection",
    description: "Find possible bugs instantly."
  },
  {
    icon: "📄",
    title: "Documentation",
    description: "Generate documentation using AI."
  }
];

return(
    <section className="py-20">
        <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
    </section>
);
}
export default Features;