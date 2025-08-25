"use client";

import React, { useState } from "react";
import { auth, db } from "../../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSignUp = async () => {
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCred.user.uid), {
                email,
                trialStart: serverTimestamp(),
                plan: "trial"
            });
            router.push("/"); // Home page redirect
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div style={{ maxWidth: 380, margin: "80px auto", padding: 40, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.14)", textAlign: "center" }}>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: "100%", marginBottom: 10, padding: 12, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: "100%", marginBottom: 20, padding: 12, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <button
                onClick={handleSignUp}
                style={{ width: "100%", padding: 12, background: "#1976d2", color: "#fff", borderRadius: 4, fontWeight: "bold", cursor: "pointer" }}
            >
                Sign Up
            </button>
            <p style={{ marginTop: 10, color: "red" }}>{message}</p>
        </div>
    );
}
