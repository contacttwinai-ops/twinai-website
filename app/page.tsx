'use client';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Service {
  title: string;
  slug: string;
  description: string;
  color: string;
}

const services: Service[] = [
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
  },
  {
    title: "AI Website Builder",
    slug: "ai-website-builder",
    description: "Build stunning, mobile-friendly websites instantly using AI. Drag-and-drop, no coding, and one-click publishing.",
    color: "bg-indigo-50"
  },
  {
    title: "AI App Builder",
    slug: "ai-app-builder",
    description: "Create powerful mobile apps for Android & iOS in minutes with AI-powered templates and deployment.",
    color: "bg-teal-50"
  }
];

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();

  // Payment redirect handler
  const handleGetStart = (amount: number) => {
    router.push(`/payment?amount=${amount}`);
  };

  return (
    <main className="min-h-screen font-sans bg-gray-50">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        {/* Navbar empty */}
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
      <section className="max-w-5xl mx-auto bg-blue-50 border border-gray-300 rounded-xl p-8 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
          Simple & Affordable Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Starter Plan */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-blue-700 font-bold mb-2">Starter: $9/month</h3>
              <p className="font-medium mb-3">Freelancers & solo users ke liye</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>CRM Automation (basic workflows)</li>
                <li>AI Billing (simple invoices)</li>
                <li>AI Chat Support (limited)</li>
                <li>Document Intelligence (basic auto-tag)</li>
                <li>SaaS Email Campaigns (starter)</li>
                <li>AI Website Builder (3 pages tak)</li>
                <li>5 users included · 10GB storage</li>
                <li>500 AI requests / month</li>
              </ul>
            </div>
            <button
              onClick={() => handleGetStart(9)}
              className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Start
            </button>
          </div>
          {/* Business Plan */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-blue-700 font-bold mb-2">Business: $29/month</h3>
              <p className="font-medium mb-3">Small teams & startups ke liye</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Advanced CRM (pipelines & deals)</li>
                <li>AI Billing + expense tracking</li>
                <li>Priority AI Chat Support</li>
                <li>Predictive Analytics (essentials)</li>
                <li>SaaS Email Campaigns (A/B tests)</li>
                <li>AI Website Builder (unlimited pages)</li>
                <li>AI App Builder (basic Android app)</li>
                <li>15 users included · 100GB storage</li>
                <li>5,000 AI requests / month</li>
              </ul>
            </div>
            <button
              onClick={() => handleGetStart(29)}
              className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Start
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-blue-700 font-bold mb-2">Pro: $79/month <span className="text-yellow-500">(Most Popular)</span></h3>
              <p className="font-medium mb-3">Growing companies ke liye</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Unlimited users 👥</li>
                <li>Advanced CRM automations</li>
                <li>Smart AI Billing (tax, quotes → invoices)</li>
                <li>Predictive Analytics + lead scoring</li>
                <li>SaaS Email Campaigns (AI optimization)</li>
                <li>Document Intelligence (OCR + summaries)</li>
                <li>AI Website Builder (SEO ready, custom sections)</li>
                <li>AI App Builder (Android + iOS apps)</li>
                <li>500GB storage · 25,000 AI requests / month</li>
                <li>Premium support (chat + email)</li>
              </ul>
            </div>
            <button
              onClick={() => handleGetStart(79)}
              className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Start
            </button>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-blue-700 font-bold mb-2">Enterprise: $149/month</h3>
              <p className="font-medium mb-3">Large organizations ke liye</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Unlimited users & storage</li>
                <li>All AI services included (CRM + Billing + Web + App + Analytics + Email + Chat + Docs)</li>
                <li>Custom AI models & data residency options</li>
                <li>Enterprise-grade security (SSO, audit logs, compliance)</li>
                <li>Dedicated account manager</li>
                <li>Onboarding & team training</li>
                <li>24/7 priority support with SLA</li>
              </ul>
            </div>
            <button
              onClick={() => handleGetStart(149)}
              className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Start
            </button>
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
