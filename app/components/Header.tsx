"use client";

import React, { useEffect, useState, useRef } from "react";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Header() {
    const [user, setUser] = useState<User | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    // Null-safe userName extraction
    const userName = user?.displayName || (user?.email ? user.email.split("@")[0] : "");

    return (
        <header style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: 16, background: "#1976d2", color: "#fff", position: "relative" }}>
            {!user ? (
                <>
                    <button
                        style={{
                            background: "#1976d2",
                            color: "#fff",
                            border: "2px solid #fff",
                            borderRadius: 6,
                            marginRight: 12,
                            padding: "8px 20px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                        onClick={() => window.location.href = "/auth/signin"}
                    >
                        Login
                    </button>
                    <button
                        style={{
                            background: "#4caf50",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "8px 20px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                        onClick={() => window.location.href = "/auth/signup"}
                    >
                        Signup
                    </button>
                </>
            ) : (
                <div style={{ position: "relative", display: "flex", alignItems: "center" }} ref={dropdownRef}>
                    <div
                        style={{
                            width: 34,
                            height: 34,
                            background: "#fff",
                            color: "#1976d2",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                            fontSize: 18,
                            marginRight: 8,
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        title={user.email ?? ""}
                    >
                        {userName.charAt(0).toUpperCase()}
                    </div>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        {userName}&nbsp;▼
                    </button>
                    {dropdownOpen && (
                        <div style={{
                            position: "absolute",
                            right: 0,
                            top: "100%",
                            backgroundColor: "#fff",
                            color: "#333",
                            boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
                            borderRadius: 8,
                            marginTop: 10,
                            minWidth: 180,
                            zIndex: 1000
                        }}>
                            <div style={{ padding: "12px 16px", borderBottom: "1px solid #eee", fontWeight: "bold" }}>
                                {user.email ?? ""}
                            </div>
                            <a href="/my-purchases" style={{ display: "block", padding: "10px 16px", textDecoration: "none", color: "#333" }}>My Purchases</a>
                            <a href="/account-settings" style={{ display: "block", padding: "10px 16px", textDecoration: "none", color: "#333" }}>Account Settings</a>
                            <button
                                onClick={() => signOut(auth)}
                                style={{
                                    width: "100%",
                                    padding: "10px 16px",
                                    background: "none",
                                    border: "none",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    color: "#1976d2",
                                    fontWeight: "bold",
                                    borderTop: "1px solid #eee"
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
