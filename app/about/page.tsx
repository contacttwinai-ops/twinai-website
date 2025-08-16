import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-6">About TwinAI</h1>
                <p className="text-lg text-gray-700 mb-4">
                    TwinAI ka mission hai AI ke zariye businesses aur students dono ki zindagi asaan banana. Hum advanced AI tools aur smart automation solutions develop karte hain jo har user ke experience ko behtareen banaye.
                </p>
                <p className="text-gray-600">
                    Hamari team cutting-edge technology, innovation, aur customer-centric approach se hamesha naye solutions lai rahi hai taaki tumhare goals achieve ho sakein.
                </p>
            </div>

            <Link href="/contact">
                <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                    Contact Us →
                </button>
            </Link>
        </main>
    );
}
