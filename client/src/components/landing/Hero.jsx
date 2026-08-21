import Button from "../common/Button";
import heroBg from "../../assets/page1_bg.png";

function Hero() {

    return (
    <section
    className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
    style={{
        backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.20),
            rgba(255, 255, 255, 0.20)
        ), url(${heroBg})`
    }}
>

        <h1 className="text-5xl font-bold text-slate-300 leading-tight">
            Understand Any Codebase with AI
        </h1>

        <p className="mt-6 text-lg text-gray-100 max-w-2xl">
            Upload your GitHub Repository and let AI explain your project,
            detect bugs and generate documentation within seconds.
        </p>

        <div className="flex gap-4 mt-8">
            <Button text="Upload Repository" />
            <Button text="Try Demo" />
        </div>

    </section>
);
}

export default Hero;