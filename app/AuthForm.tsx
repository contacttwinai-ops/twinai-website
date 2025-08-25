"use client";

import React, { useState } from "react";
import {
    auth,
    googleProvider
} from "./lib/firebaseConfig"; // Apne path ke hisaab se adjust karo
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    UserCredential
} from "firebase/auth";

export default function AuthForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // Google sign-in
    const handleGoogleLogin = async () => {
        try {
            const result: UserCredential = await signInWithPopup(auth, googleProvider);
            setMessage(`Welcome ${result.user.displayName}`);
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    // Email/password signup
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Signup successful! You can now login.");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    // Email/password signin
    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("Login successful!");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    // Password reset
    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent! Check your inbox.");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    // Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setMessage("Logged out successfully.");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleSignIn}>Sign In</button>
            </div>

            <button onClick={handleResetPassword}>Reset Password</button>
            <button onClick={handleLogout}>Logout</button>

            <p>{message}</p>
        </div>
    );
}
