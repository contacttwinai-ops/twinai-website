import Link from "next/link";

const coreFeaturesPhase1 = [
    "🗂️ CRM Module — Lead, contact aur sales pipeline management",
    "🧾 Billing & Invoicing — Invoice creation aur payment tracking",
    "📊 Business Analytics Dashboard — Sales aur performance ka snapshot",
    "🎫 Support & Helpdesk — Customer queries ka quick resolution",
    "📱 Mobile & Desktop Access — Anytime, anywhere access",
    "🔒 Security & Data Backup — Reliable data protection",
    "💳 Payment Gateway Integration — Online payments secure karna",
    "🔔 Automated Notifications — Important updates turant pao",
];

export default function SaaSCoreModules() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white p-10 flex flex-col items-center font-sans">
            <h1 className="text-4xl font-extrabold text-cyan-900 mb-10 text-center drop-shadow-md">
                TwinAI SaaS Core Modules
            </h1>

            <p className="text-lg text-gray-700 mb-12 max-w-3xl text-center leading-relaxed">
                Shuruaat karo core business features se jo har business ke liye zaroori hain,
                aur baaki modules feedback aur growth ke hisaab se add karo.
            </p>

            <section className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8 mb-14">
                <h2 className="text-2xl font-bold text-cyan-800 mb-6 border-b-2 border-cyan-300 pb-2 text-center drop-shadow-sm">
                    Core Features
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
                    {coreFeaturesPhase1.map((feature, idx) => (
                        <li key={idx} className="hover:text-cyan-600 transition cursor-default">
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            <Link href="/features">
                <button className="bg-cyan-700 text-white px-10 py-4 rounded-full shadow-lg hover:bg-cyan-800 transition text-lg font-semibold drop-shadow-md">
                    See Full Features →
                </button>
            </Link>
        </main>
    );
}
