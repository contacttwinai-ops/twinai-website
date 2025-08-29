'use client';

export default function CRMServicePage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                CRM Automation
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Automate your customer management and sales process with our advanced AI-powered CRM Automation. Track leads, set reminders, and close deals faster.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Lead tracking & management with AI insights</li>
                <li>Automated follow-ups and reminders</li>
                <li>Sales pipeline visualization</li>
                <li>Integrations with popular email & calendar apps</li>
                <li>Real-time analytics dashboard</li>
            </ul>
        </main>
    );
}
