import { useState } from "react";
import Button from "../common/Button";
import logo from "../../assets/DevLensAILogo.png";

function Navbar(props){
    const[isMenuOpen, setIsMenuOpen]= useState(false);
    return(
        <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="DevLensAI" className="h-22 w-auto"/>
            </div>

            <ul className="hidden md:flex gap-8 text-gray-7000 font-medium">
                <li className="cursor-pointer hover:text-blue-600 transition">Features</li>
                <li className="cursor-pointer hover:text-blue-600 transition">Pricing</li>
                <li className="cursor-pointer hover:text-blue-600 transition">Docs</li>
                <li className="cursor-pointer hover:text-blue-600 transition">About</li>
            </ul>

            <div className="hidden md:flex gap-4">
                <Button
                text="Login"
                variant="secondary"/>
                <Button text="Get Started"/>
            </div>

            <button 
                className="md:hidden text-3xl"
                onClick={()=> setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>
            {
    isMenuOpen && (
        <div className="md:hidden mt-6 bg-white shadow-lg rounded-lg p-5">

            <ul className="flex flex-col gap-4">

                <li>Features</li>

                <li>Pricing</li>

                <li>Docs</li>

                <li>About</li>

            </ul>

            <div className="flex flex-col gap-3 mt-5">

                <Button
                    text="Login"
                    variant="secondary"
                />

                <Button
                    text="Get Started"
                />

            </div>

        </div>
    )
}
        </nav>
    );
}
export default Navbar;