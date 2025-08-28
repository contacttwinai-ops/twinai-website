"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebaseConfig";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Invalid email or password");
            }
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Google sign in failed");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>

                <form
                    onSubmit={handleEmailSignIn}
                    className="flex flex-col items-stretch gap-3"
                >
                    <input
                        type="email"
                        value={email}
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded border"
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        value={password}
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded border"
                        autoComplete="current-password"
                    />
                    {error && <p className="text-red-500 text-left text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold py-2 rounded mt-2 hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-blue-50 border border-blue-600 text-blue-700 font-semibold py-2 rounded mt-6 hover:bg-blue-600 hover:text-white transition"
                >
                    Login with Google
                </button>

                <div className="mt-6 text-sm text-gray-700">
                    Need to create an account?{" "}
                    <Link href="/auth/signup" className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
