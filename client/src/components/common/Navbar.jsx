import { useState } from "react";
import Button from "../common/Button";

function Navbar(props){
    const[isMenuOpen, setIsMenuOpen]= useState(false);
    return(
        <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">
                 DevLensAI
            </h1>

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