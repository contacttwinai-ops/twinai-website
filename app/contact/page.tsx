"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        companyOrShop: "",  // <-- Optional field
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            setSubmitted(true);
        } else {
            alert("Error sending message. Please try again.");
        }
    };

    if (submitted) {
        return (
            <p className="text-green-600 text-center mt-10">
                Thank you for contacting us!
            </p>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
            <form onSubmit={handleSubmit} className="max-w-md m-auto p-8 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

                <label className="block mb-2 font-semibold" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2 font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2 font-semibold" htmlFor="mobile">
                    Mobile Number
                </label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                />

                <label className="block mb-2 font-semibold" htmlFor="companyOrShop">
                    Company / Shop (Optional)
                </label>
                <input
                    type="text"
                    id="companyOrShop"
                    name="companyOrShop"
                    value={formData.companyOrShop}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Optional"
                />

                <label className="block mb-2 font-semibold" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
}
