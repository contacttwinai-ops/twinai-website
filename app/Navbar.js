"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "about", label: "About", href: "/about" },
];

export default function Navbar() {
    const { data: session, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    if (status === "loading") return null;

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">Qynero</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                className="hover:text-gray-200 font-semibold"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    {!session && (
                        <>
                            <li>
                                <Link
                                    href="/auth/signin"
                                    className="bg-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-800"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/auth/signup"
                                    className="bg-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-700"
                                >
                                    Signup
                                </Link>
                            </li>
                        </>
                    )}

                    {session && (
                        <>
                            <li className="font-semibold">{session.user?.name || session.user?.email}</li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="hover:underline font-semibold"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-purchases"
                                    className="hover:underline font-semibold"
                                >
                                    My Purchases
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-3 space-y-3 bg-blue-700 rounded-lg p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="block hover:text-gray-200 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {!session && (
                        <>
                            <Link
                                href="/auth/signin"
                                className="block bg-blue-600 px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="block bg-green-600 px-4 py-2 rounded-lg font-medium text-center hover:bg-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Signup
                            </Link>
                        </>
                    )}

                    {session && (
                        <>
                            <p className="font-semibold">{session.user?.name || session.user?.email}</p>
                            <Link
                                href="/profile"
                                className="block hover:underline font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link
                                href="/my-purchases"
                                className="block hover:underline font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                My Purchases
                            </Link>
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="w-full bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}