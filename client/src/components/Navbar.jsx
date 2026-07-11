import Button from "./Button";

function Navbar(props){
    return(
        <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">
                 DevLensAI
            </h1>

            <ul className="hidden md:flex gap-8 text-gray-7000 font-medium">
                <li>Features</li>
                <li>Pricing</li>
                <li>Docs</li>
                <li>About</li>
            </ul>

            <div className="hidden md:flex gap-4">
                <Button
                text="Login"
                variant="secondary"/>
                <Button text="Get Started"/>
                <button className="md:hidden text-3xl">
                    ☰
                </button>
            </div>
        </nav>
    );
}
export default Navbar;