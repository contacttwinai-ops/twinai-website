'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AIChatSupportPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using AI Chat Support.");
            // Yahan actual chat support ka dashboard ya feature laga sakte ho
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>AI Chat Support</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Provide instant, intelligent 24/7 customer support powered by machine learning. Improve customer satisfaction and resolve issues faster.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Automated responses to customer queries</li>
                <li>Multi-language support</li>
                <li>Sentiment analysis for better engagement</li>
                <li>Integration with your website or app</li>
                <li>Chat analytics and reporting</li>
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
