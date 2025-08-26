'use client';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const services = [
  {
    title: "CRM Automation",
    slug: "crm",
    description: "Automate customer management and sales with smart workflows.",
    color: "#E3F2FD"
  },
  {
    title: "AI Billing",
    slug: "ai-billing",
    description: "Effortless invoicing, expense tracking, and billing using AI.",
    color: "#E8F5E9"
  },
  {
    title: "AI Chat Support",
    slug: "ai-chat-support",
    description: "24/7 automated customer support powered by machine learning.",
    color: "#FFF3E0"
  },
  {
    title: "Predictive Analytics",
    slug: "predictive-analytics",
    description: "Forecast revenue, demand, and user behavior with AI models.",
    color: "#F3E5F5"
  },
  {
    title: "SaaS Email Campaigns",
    slug: "email-campaigns",
    description: "Send, track, and optimize your campaigns with AI recommendations.",
    color: "#FBE9E7"
  },
  {
    title: "Document Intelligence",
    slug: "document-intelligence",
    description: "Auto-tag, classify, and summarize business docs in seconds.",
    color: "#ECEFF1"
  }
];

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f6f8fa"
      }}
    >
      {/* Nav/Header */}
      <nav
        style={{
          background: "linear-gradient(90deg, #1976d2 75%, #43a047 100%)",
          color: "white",
          padding: "1rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {session ? (
            <>
              <span style={{ marginRight: "18px" }}>
                Welcome, <b>{session.user?.email}</b>
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                style={{
                  background: "#fff",
                  color: "#1976d2",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(25,118,210,.12)"
                }}
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "2.5rem 0 2rem 0",
          color: "#1976d2",
          background: "#e3f2fd"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          All Your Powerful SaaS & AI Tools, On One Platform.
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#555", marginBottom: "1.5rem" }}>
          Automate your business, gain insights, boost productivity & support customers — with AI-powered cloud solutions.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ margin: "0 auto", maxWidth: "1100px", padding: "1rem 1rem 2rem" }}>
        <h2 style={{ textAlign: "center", color: "#1976d2", margin: "2.2rem 0 2rem", fontSize: "2rem" }}>
          Important SaaS & AI Services
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "2rem",
        }}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: service.color,
                padding: "1.6rem",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(25,118,210,0.08)",
                border: "1px solid #e0e0e0",
                textAlign: "left",
              }}
            >
              <h3 style={{ color: "#1565c0", marginBottom: "12px" }}>{service.title}</h3>
              <p style={{ color: "#444", marginBottom: "18px" }}>{service.description}</p>
              <Link href={`/services/${service.slug}`}>
                <button
                  style={{
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: 500
                  }}
                >
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section
        style={{
          margin: "2rem auto 0",
          maxWidth: "920px",
          background: "#e8f5e9",
          borderRadius: "10px",
          border: "1px solid #cfd8dc",
          padding: "2rem",
          boxShadow: "0 2px 12px rgba(67,160,71,0.10)",
        }}>
        <h2 style={{ textAlign: "center", color: "#43a047", fontSize: "1.7rem", marginBottom: "24px" }}>
          Simple & Affordable Pricing
        </h2>
        <div style={{ display: "grid", gap: "1.8rem" }}>
          <div style={{ background: "#ffffff", padding: "1rem 1.5rem", borderRadius: "8px", boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "6px", color: "#2e7d32" }}>Starter: ₹299/month</h3>
            <p style={{ marginBottom: "8px", fontWeight: "600" }}>Perfect for freelancers & solo founders</p>
            <ul style={{ marginLeft: "1rem", color: "#555", fontSize: "0.95rem" }}>
              <li>Basic CRM automation (leads, follow-ups)</li>
              <li>AI-powered billing for simple invoices</li>
              <li>AI chat support (limited usage)</li>
              <li>1–3 users allowed</li>
              <li>5GB cloud storage</li>
              <li>Basic analytics & dashboard</li>
              <li>Email support</li>
            </ul>
          </div>
          <div style={{ background: "#ffffff", padding: "1rem 1.5rem", borderRadius: "8px", boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "6px", color: "#2e7d32" }}>Business: ₹899/month</h3>
            <p style={{ marginBottom: "8px", fontWeight: "600" }}>For growing teams & startups</p>
            <ul style={{ marginLeft: "1rem", color: "#555", fontSize: "0.95rem" }}>
              <li>Advanced CRM automation (multiple pipelines)</li>
              <li>AI billing with expense tracking</li>
              <li>Priority AI chat support</li>
              <li>Up to 10 users</li>
              <li>50GB cloud storage</li>
              <li>Analytics dashboard & integrations</li>
              <li>Priority email support</li>
            </ul>
          </div>
          <div style={{ background: "#ffffff", padding: "1rem 1.5rem", borderRadius: "8px", boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "6px", color: "#2e7d32" }}>Pro: ₹1799/month</h3>
            <p style={{ marginBottom: "8px", fontWeight: "600" }}>For mature businesses & power users</p>
            <ul style={{ marginLeft: "1rem", color: "#555", fontSize: "0.95rem" }}>
              <li>Unlimited sales pipelines & custom fields</li>
              <li>Advanced automations & workflows</li>
              <li>Predictive analytics & lead scoring</li>
              <li>Up to 30 users</li>
              <li>300GB cloud storage</li>
              <li>All integrations & SaaS campaign tools</li>
              <li>Premium email & chat support</li>
            </ul>
          </div>
          <div style={{ background: "#ffffff", padding: "1rem 1.5rem", borderRadius: "8px", boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "6px", color: "#2e7d32" }}>Enterprise: Custom Pricing</h3>
            <p style={{ marginBottom: "8px", fontWeight: "600" }}>For large organizations & custom needs</p>
            <ul style={{ marginLeft: "1rem", color: "#555", fontSize: "0.95rem" }}>
              <li>Unlimited users & storage</li>
              <li>Dedicated account manager</li>
              <li>Custom hosting & advanced security</li>
              <li>Onboarding & training support</li>
              <li>SLA-backed premium support</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: "1.5rem", color: "#555", textAlign: "center" }}>
          <b>All plans start with a 14-day free trial. No credit card required!</b>
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "3rem",
          color: "#888",
          fontSize: ".98rem",
          padding: "1rem 0"
        }}
      >
        © {new Date().getFullYear()} &mdash; All rights reserved.
      </footer>
    </main>
  );
}
