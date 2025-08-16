import Link from "next/link"; // File ke upar import karo

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl px-8 py-12 text-center max-w-lg">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 font-sans">
          Welcome to TwinAI
        </h1>
        <p className="text-xl mb-4 text-gray-700">
          AI-powered SaaS solutions for your business!
        </p>
        <p className="mb-6 text-gray-500">
          Contact us: <span className="font-mono">contact.twinai@gmail.com</span>
        </p>
        {/* Yeh Link tumhe "/start" page par le jayega */}
        <Link href="/start">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            🚀 Get Started
          </button>
        </Link>
      </div>
    </main>
  );
}
