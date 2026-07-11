import Button from "./Button";

function Hero() {

    return (
        <section className="min-h-screen bg-slate-100 flex flex-col items-center justify-center text-center ">

            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                🚀 Understand Any Codebase with AI</h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
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