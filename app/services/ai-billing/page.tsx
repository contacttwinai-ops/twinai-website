'use client';

export default function AIBillingPage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                AI Billing
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Automate all your invoicing and expenses with our AI-powered billing system that smartly tracks your finances and saves time.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Auto-generated invoices</li>
                <li>Expense tracking and categorization</li>
                <li>Payment reminders & automated follow-ups</li>
                <li>Integration with popular payment gateways</li>
                <li>Detailed financial reports & analytics</li>
            </ul>
        </main>
    );
}
