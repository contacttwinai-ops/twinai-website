"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { auth } from "./lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            unsubscribe();
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setMenuOpen(false);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const getInitial = () => {
        if (!user) return "";
        if (user.displayName) return user.displayName.trim().charAt(0).toUpperCase();
        if (user.email) {
            const emailPrefix = user.email.split("@")[0];
            return emailPrefix.charAt(0).toUpperCase();
        }
        return "?";
    };

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center relative z-30">
            <div className="text-xl font-bold">Qynero</div>

            <ul className="flex items-center gap-x-3">
                {!user ? (
                    <>
                        <li>
                            <Link
                                href="/auth/login"
                                className="bg-blue-800 px-3 py-2 rounded hover:bg-blue-900"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/auth/signup"
                                className="bg-green-600 px-3 py-2 rounded hover:bg-green-700"
                            >
                                Signup
                            </Link>
                        </li>
                    </>
                ) : (
                    <li className="relative flex items-center" ref={dropdownRef}>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center gap-2 font-semibold focus:outline-none"
                        >
                            <span
                                className="w-9 h-9 rounded-full flex items-center justify-center bg-blue-400 border-2 border-white text-white font-bold text-lg select-none overflow-hidden"
                                title={user.displayName || user.email}
                            >
                                {user.photoURL && user.photoURL !== "" ? (
                                    <img
                                        src={user.photoURL}
                                        alt="Avatar"
                                        className="w-9 h-9 rounded-full object-cover"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                ) : (
                                    getInitial()
                                )}
                            </span>
                            <span className="hidden sm:inline">{user.displayName || user.email}</span>
                        </button>

                        {menuOpen && (
                            <div
                                className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg flex flex-col z-50"
                                style={{
                                    minWidth: "10rem",
                                    maxWidth: "calc(100vw - 1rem)",
                                    marginRight: "0.5rem",
                                }}
                            >
                                <Link
                                    href="/profile"
                                    className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    href="/my-purchases"
                                    className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    My Purchases
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-left hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </li>
                )}
            </ul>
        </nav>
    );
}
