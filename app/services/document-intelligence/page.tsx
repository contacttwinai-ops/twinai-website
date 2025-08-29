'use client';

export default function DocumentIntelligencePage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                Document Intelligence
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Auto-tag, classify, and summarize your business documents with our powerful AI tools to save time and improve organization.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Auto-tagging & classification</li>
                <li>Document summarization</li>
                <li>Search and retrieval</li>
                <li>Integration with cloud storage</li>
                <li>Secure & compliant processing</li>
            </ul>
        </main>
    );
}
