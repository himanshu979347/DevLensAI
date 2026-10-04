import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Please enter email and password.");
        return;
    }

    if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
    }

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);
};

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">

                <h1
                onClick={() => navigate("/")}
                className="text-3xl font-bold text-white text-center cursor-pointer"
                >
                DevLens<span className="text-blue-500">AI</span>
                </h1>

                <p className="text-gray-400 text-center mt-3 mb-8">
                    Welcome back! Sign in to continue.
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="block text-gray-300 mb-2">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 mb-5 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <label className="block text-gray-300 mb-2">
                        Password
                    </label>

                    <div className="relative mb-4">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 pr-16 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-blue-400"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>

                    </div>

                    <div className="text-right mb-6">
                        <a href="#" className="text-blue-400 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    {error && (
                    <p className="text-red-400 text-sm mb-4">
                    {error}
                    </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Sign In
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/signup")}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Sign Up
                    </button>
                </p>

            </div>

        </div>
    );
}

export default SignIn;