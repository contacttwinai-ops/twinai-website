'use client';

export default function EmailCampaignsPage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                SaaS Email Campaigns
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Send, track, and optimize your email campaigns with AI-powered recommendations designed to increase open rates and conversions.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Smart audience segmentation</li>
                <li>Automated email scheduling</li>
                <li>Personalized content suggestions</li>
                <li>Real-time campaign tracking & analytics</li>
                <li>Integration with popular CRM systems</li>
            </ul>
        </main>
    );
}
