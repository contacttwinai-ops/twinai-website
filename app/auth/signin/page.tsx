"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "../../lib/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Home page redirect
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Home page redirect
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 380, margin: "80px auto", padding: 40, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.14)", textAlign: "center" }}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "100%", padding: 12, marginBottom: 10, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", padding: 12, marginBottom: 20, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button
        onClick={handleEmailSignIn}
        style={{ width: "100%", padding: 12, background: "#1976d2", color: "#fff", borderRadius: 4, fontWeight: "bold", cursor: "pointer" }}
      >
        Sign In
      </button>

      <button
        onClick={handleGoogleSignIn}
        style={{ width: "100%", padding: 12, background: "#4285F4", color: "#fff", borderRadius: 4, fontWeight: "bold", cursor: "pointer", marginTop: 10 }}
      >
        Continue with Google
      </button>

      <p style={{ marginTop: 12, fontSize: 14 }}>
        Don't have an account? <a href="/auth/signup" style={{ color: "#1976d2", textDecoration: "none" }}>Sign Up</a>
      </p>
      <p style={{ color: "red", marginTop: 8 }}>{message}</p>
    </div>
  );
}
