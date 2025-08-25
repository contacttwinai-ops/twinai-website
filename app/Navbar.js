"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "about", label: "About", href: "/about" },
];

export default function Navbar() {
    const { data: session, status } = useSession();
    // Debug line
    console.log("Session (navbar):", session, status);

    if (status === "loading") return null;

    return (
        <nav style={{
            background: "linear-gradient(90deg, #1976d2 75%, #43a047 100%)",
            color: "white",
            padding: "1rem 2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{ fontWeight: "bold", fontSize: "1.75rem" }}>Qynero</div>
            <ul style={{
                display: "flex",
                gap: "1.5rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
                alignItems: "center"
            }}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link href={item.href}
                            style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                {!session && (
                    <>
                        <li>
                            <Link href="/auth/signin"
                                style={{
                                    background: "#1565c0",
                                    color: "#fff",
                                    padding: "8px 16px",
                                    borderRadius: "6px",
                                    fontWeight: 500,
                                    textDecoration: "none"
                                }}>Login</Link>
                        </li>
                        <li>
                            <Link href="/auth/signup"
                                style={{
                                    background: "#43a047",
                                    color: "#fff",
                                    padding: "8px 16px",
                                    borderRadius: "6px",
                                    fontWeight: 500,
                                    textDecoration: "none"
                                }}>Signup</Link>
                        </li>
                    </>
                )}
                {session && (
                    <>
                        <li style={{ color: "white", fontWeight: "bold" }}>
                            {session.user?.name || session.user?.email}
                        </li>
                        <li>
                            <Link href="/profile"
                                style={{ color: "white", fontWeight: "bold", textDecoration: "underline" }}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-purchases"
                                style={{ color: "white", fontWeight: "bold", textDecoration: "underline" }}>
                                My Purchases
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                style={{
                                    background: "white",
                                    color: "#1976d2",
                                    padding: "8px 16px",
                                    borderRadius: "6px",
                                    border: "none",
                                    fontWeight: 500,
                                    cursor: "pointer"
                                }}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}