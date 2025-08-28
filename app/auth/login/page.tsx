"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or show success message...
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "code" in error) {
                const err = error as { code: string };
                switch (err.code) {
                    case "auth/user-not-found":
                        setErrorMsg("User not found. Sign up first or check your email.");
                        break;
                    case "auth/wrong-password":
                        setErrorMsg("Incorrect password. Please try again.");
                        break;
                    case "auth/invalid-email":
                        setErrorMsg("Please enter a valid email address.");
                        break;
                    default:
                        setErrorMsg("Failed to login. Please try again.");
                }
            } else {
                setErrorMsg("Failed to login. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-3 text-gray-500 text-sm"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {errorMsg && (
                        <div className="text-red-600 text-center mb-2">{errorMsg}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg duration-200 mb-3"
                    >
                        Sign In
                    </button>
                </form>
                <button
                    className="w-full border border-blue-300 bg-blue-50 text-blue-700 font-semibold py-3 rounded-lg hover:bg-blue-100 duration-200 mb-3"
                // onClick={handleGoogleLogin} // -- ADD your Google login logic here
                >
                    Login with Google
                </button>
                <div className="text-center mt-2 text-gray-600">
                    Need to create an account?{" "}
                    <Link href="/auth/signup" className="text-blue-700 font-medium hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
