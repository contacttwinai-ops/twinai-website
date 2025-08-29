"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../lib/firebaseConfig";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { getFriendlyErrorMessage } from "../../utils/errorMessages";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "code" in error) {
                const err = error as { code: string };
                setErrorMsg(getFriendlyErrorMessage(err.code));
            } else {
                setErrorMsg("An unexpected error occurred. Please try again.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/");
        } catch (error) {
            setErrorMsg("Google login failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full z-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-3 top-3 text-gray-500 text-sm"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg duration-200 mb-3"
                    >
                        Sign In
                    </button>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full border border-blue-300 bg-blue-50 text-blue-700 font-semibold py-3 rounded-lg hover:bg-blue-100 duration-200"
                >
                    Login with Google
                </button>
                <div className="text-center mt-2 text-gray-600">
                    Need to create an account?{" "}
                    <Link href="/auth/signup" className="text-blue-700 font-medium hover:underline">
                        Sign Up
                    </Link>
                </div>
                {/* Forgot Password button removed here */}
            </div>
        </div>
    );
}
