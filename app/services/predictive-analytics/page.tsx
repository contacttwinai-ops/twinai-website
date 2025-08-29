'use client';

export default function PredictiveAnalyticsPage() {
    return (
        <main style={{
            maxWidth: "700px",
            margin: "2rem auto",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "1rem",
            background: "#fff"
        }}>
            <h1 style={{ color: "#1976d2", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>
                Predictive Analytics
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                Forecast revenue, demand, and customer behavior with advanced AI models. Make smarter business decisions backed by data.
            </p>
            <h3 style={{ color: "#1565c0", marginBottom: "0.8rem", fontWeight: 600, fontSize: "1.1rem" }}>
                Key Features:
            </h3>
            <ul style={{ color: "#222", fontSize: "1.07rem", marginBottom: "1.2rem", paddingLeft: "1.2em" }}>
                <li>Revenue and demand forecasting</li>
                <li>Customer segmentation and behavior analysis</li>
                <li>Customizable prediction models</li>
                <li>Real-time data visualization dashboard</li>
                <li>Integration with existing CRM and sales tools</li>
            </ul>
        </main>
    );
}
