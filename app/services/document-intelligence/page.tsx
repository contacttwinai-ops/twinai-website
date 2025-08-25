'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DocumentIntelligencePage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleTryNow = () => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            alert("Welcome! You can now start using Document Intelligence.");
            // Yahan tum apna document intelligence tools ya dashboard laga sakte ho
        }
    };

    return (
        <main style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem" }}>Document Intelligence</h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Auto-tag, classify, and summarize your business documents with our powerful AI tools to save time and improve organization.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.7rem" }}>Key Features:</h3>
            <ul style={{ color: "#555", fontSize: "1rem", marginBottom: "1.5rem" }}>
                <li>Auto-tagging & classification</li>
                <li>Document summarization</li>
                <li>Search and retrieval</li>
                <li>Integration with cloud storage</li>
                <li>Secure & compliant processing</li>
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
