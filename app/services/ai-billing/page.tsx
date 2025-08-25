'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AIBillingPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using the AI Billing service.");
            // Yahan actual AI Billing tools/dashboard ka code lagao
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>AI Billing</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Automate all your invoicing and expenses with our AI-powered billing system that smartly tracks your finances and saves time.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Auto-generated invoices</li>
                <li>Expense tracking and categorization</li>
                <li>Payment reminders & automated follow-ups</li>
                <li>Integration with popular payment gateways</li>
                <li>Detailed financial reports & analytics</li>
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
