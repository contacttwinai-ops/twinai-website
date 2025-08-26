'use client';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const services = [
  {
    title: "CRM Automation",
    slug: "crm",
    description: "Automate customer management and sales with smart workflows.",
    color: "bg-blue-50"
  },
  {
    title: "AI Billing",
    slug: "ai-billing",
    description: "Effortless invoicing, expense tracking, and billing using AI.",
    color: "bg-green-50"
  },
  {
    title: "AI Chat Support",
    slug: "ai-chat-support",
    description: "24/7 automated customer support powered by machine learning.",
    color: "bg-orange-50"
  },
  {
    title: "Predictive Analytics",
    slug: "predictive-analytics",
    description: "Forecast revenue, demand, and user behavior with AI models.",
    color: "bg-purple-50"
  },
  {
    title: "SaaS Email Campaigns",
    slug: "email-campaigns",
    description: "Send, track, and optimize your campaigns with AI recommendations.",
    color: "bg-pink-50"
  },
  {
    title: "Document Intelligence",
    slug: "document-intelligence",
    description: "Auto-tag, classify, and summarize business docs in seconds.",
    color: "bg-gray-100"
  }
];

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen font-sans bg-gray-50">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-4 flex justify-between items-center">
        {/* Navbar is now empty, no site name */}
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-50 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
          All Your Powerful SaaS & AI Tools, On One Platform.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Automate your business, gain insights, boost productivity & support customers — with AI-powered cloud solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-10">
          Important SaaS & AI Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.color} p-6 rounded-xl shadow-md border border-gray-200`}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={`/services/${service.slug}`}>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto bg-green-50 border border-gray-300 rounded-xl p-8 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
          Simple & Affordable Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-green-700 font-bold mb-2">Starter: ₹299/month</h3>
            <p className="font-medium mb-3">Perfect for freelancers & solo founders</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Basic CRM automation (leads, follow-ups)</li>
              <li>AI-powered billing for simple invoices</li>
              <li>AI chat support (limited usage)</li>
              <li>1–3 users allowed</li>
              <li>5GB cloud storage</li>
              <li>Basic analytics & dashboard</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-green-700 font-bold mb-2">Business: ₹899/month</h3>
            <p className="font-medium mb-3">For growing teams & startups</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Advanced CRM automation (multiple pipelines)</li>
              <li>AI billing with expense tracking</li>
              <li>Priority AI chat support</li>
              <li>Up to 10 users</li>
              <li>50GB cloud storage</li>
              <li>Analytics dashboard & integrations</li>
              <li>Priority email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-green-700 font-bold mb-2">Pro: ₹1799/month</h3>
            <p className="font-medium mb-3">For mature businesses & power users</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Unlimited sales pipelines & custom fields</li>
              <li>Advanced automations & workflows</li>
              <li>Predictive analytics & lead scoring</li>
              <li>Up to 30 users</li>
              <li>300GB cloud storage</li>
              <li>All integrations & SaaS campaign tools</li>
              <li>Premium email & chat support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-green-700 font-bold mb-2">Enterprise: Custom Pricing</h3>
            <p className="font-medium mb-3">For large organizations & custom needs</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Unlimited users & storage</li>
              <li>Dedicated account manager</li>
              <li>Custom hosting & advanced security</li>
              <li>Onboarding & training support</li>
              <li>SLA-backed premium support</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6 font-medium">
          <b>All plans start with a 14-day free trial. No credit card required!</b>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} — All rights reserved.
      </footer>
    </main>
  );
}
