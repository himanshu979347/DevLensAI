import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
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

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        setError(
            "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
        );
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

                    <div className="relative mb-4">
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-3 mb-5 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-blue-400"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>

                    </div>

                    <label className="block text-gray-300 mb-2">
                        Confirm Password
                    </label>

                    <div className="relative mb-4">
                        <input
                        type= {showconfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full p-3 mb-4 bg-slate-950 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                         type="button"
                         onClick={()=> setShowconfirmPassword(!showconfirmPassword)}
                         className="absolute right-3 top-3 text-blue-400"
                        >
                         {showconfirmPassword ? "Hide" : "Show"}   
                        </button>
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
                        Create Account
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/signin")}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Sign In
                    </button>
                </p>

            </div>
        </div>
    );
}

export default SignUp;