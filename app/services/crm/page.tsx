'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CRMServicePage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using the CRM Automation service.");
            // Yahan actual CRM functionality ya dashboard ka code lagao
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>CRM Automation</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Automate your customer management and sales process with our advanced AI-powered CRM Automation. Track leads, set reminders, and close deals faster.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Lead tracking & management with AI insights</li>
                <li>Automated follow-ups and reminders</li>
                <li>Sales pipeline visualization</li>
                <li>Integrations with popular email & calendar apps</li>
                <li>Real-time analytics dashboard</li>
            </ul>
            <button
                onClick={handleTryNow}
                style={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer"
                }}
            >
                Try Now
            </button>
        </main>
    );
}
