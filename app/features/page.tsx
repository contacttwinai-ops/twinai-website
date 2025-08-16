import Link from "next/link";

const detailedFeatures = [
    {
        title: "Comprehensive CRM",
        detail:
            "Customers aur leads ko efficiently manage karo, unke interactions track karo aur sales pipeline optimize karo.",
    },
    {
        title: "Integrated Billing & Invoicing",
        detail:
            "Invoice tayar karo, payments manage karo aur automated reminders bhejo, sab kuch ek jagah.",
    },
    {
        title: "Advanced Business Analytics",
        detail:
            "Custom dashboards aur reports ke zariye apne business ke real-time data pe nazar rakho.",
    },
    {
        title: "Collaborative Workspaces",
        detail:
            "Team ke members ko assign karo tasks, communicate karo seamlessly aur projects ko efficiently complete karo.",
    },
    {
        title: "Secure & Scalable Cloud Storage",
        detail:
            "Apna data encrypted cloud par safely store karo, jise kahin se bhi access kar sakte ho.",
    },
];

export default function FeaturesDetails() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 flex flex-col items-center font-sans">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow-lg">
                Explore Our Powerful Features
            </h1>

            <section className="max-w-4xl w-full space-y-10">
                {detailedFeatures.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">
                            {feature.title}
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{feature.detail}</p>
                    </div>
                ))}
            </section>

            <Link href="/contact">
                <button className="mt-16 bg-blue-700 text-white px-12 py-5 rounded-full shadow-lg hover:bg-blue-800 transition text-xl font-semibold drop-shadow-md">
                    Contact Us →
                </button>
            </Link>
        </main>
    );
}
