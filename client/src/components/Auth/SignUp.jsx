import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
        setError("Please fill in all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
    }

    if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
    }

    setError("");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Account creation ready");
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
                    Create your account to get started.
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="block text-gray-300 mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 mb-5 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <label className="block text-gray-300 mb-2">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-5 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <label className="block text-gray-300 mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-5 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <label className="block text-gray-300 mb-2">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 mb-4 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    {error && (
                        <p className="text-red-400 text-sm mb-4">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}
                    <span className="text-blue-400">
                        Sign In
                    </span>
                </p>

            </div>
        </div>
    );
}

export default SignUp;