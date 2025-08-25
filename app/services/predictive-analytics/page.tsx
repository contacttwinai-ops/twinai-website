'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PredictiveAnalyticsPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using Predictive Analytics.");
            // Yahan tum apna analytics dashboard ya service logic lagao
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>Predictive Analytics</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Forecast revenue, demand, and customer behavior with advanced AI models. Make smarter business decisions backed by data.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Revenue and demand forecasting</li>
                <li>Customer segmentation and behavior analysis</li>
                <li>Customizable prediction models</li>
                <li>Real-time data visualization dashboard</li>
                <li>Integration with existing CRM and sales tools</li>
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
