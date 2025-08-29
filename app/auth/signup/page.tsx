"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../lib/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { getFriendlyErrorMessage } from "../../utils/errorMessages";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/"); // signup ke baad home page redirect
        } catch (error: unknown) {
            if (
                typeof error === "object" &&
                error !== null &&
                "code" in error
            ) {
                const err = error as { code: string };
                setErrorMsg(getFriendlyErrorMessage(err.code));
            } else {
                setErrorMsg("An unexpected error occurred. Please try again.");
            }
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/"); // Google signup ke baad redirect
        } catch (error) {
            setErrorMsg("Google signup failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
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
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg duration-200 mb-3"
                    >
                        Sign Up
                    </button>
                </form>
                <button
                    onClick={handleGoogleSignup}
                    className="w-full border border-green-300 bg-green-50 text-green-700 font-semibold py-3 rounded-lg hover:bg-green-100 duration-200 mb-3"
                >
                    Sign Up with Google
                </button>
                <div className="text-center mt-2 text-gray-600">
                    I have an account.{" "}
                    <Link href="/auth/login" className="text-green-700 font-medium hover:underline">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
