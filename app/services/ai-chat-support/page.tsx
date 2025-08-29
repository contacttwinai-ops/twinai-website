'use client';

export default function AIChatSupportPage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                AI Chat Support
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Provide instant, intelligent 24/7 customer support powered by machine learning. Improve customer satisfaction and resolve issues faster.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Automated responses to customer queries</li>
                <li>Multi-language support</li>
                <li>Sentiment analysis for better engagement</li>
                <li>Integration with your website or app</li>
                <li>Chat analytics and reporting</li>
            </ul>
        </main>
    );
}
