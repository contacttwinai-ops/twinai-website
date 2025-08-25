'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EmailCampaignsPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using SaaS Email Campaigns.");
            // Yahan tum apna email campaign dashboard ya features start karwa sakte ho
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>SaaS Email Campaigns</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Send, track, and optimize your email campaigns with AI-powered recommendations designed to increase open rates and conversions.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Smart audience segmentation</li>
                <li>Automated email scheduling</li>
                <li>Personalized content suggestions</li>
                <li>Real-time campaign tracking & analytics</li>
                <li>Integration with popular CRM systems</li>
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
