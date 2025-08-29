'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');

    // Supported plans ke amounts (string me)
    const supportedAmounts = ['9', '29', '79', '149'];

    if (!amount || !supportedAmounts.includes(amount)) {
        return (
            <main className="max-w-md mx-auto p-6 mt-20 font-sans">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Invalid payment amount</h1>
                <p>Please select a valid plan from the pricing page.</p>
            </main>
        );
    }

    return (
        <main className="max-w-md mx-auto p-6 mt-20 font-sans">
            <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>
            <p className="mb-6">
                You are about to pay <strong>${amount}</strong>. Please enter your payment details below.
            </p>

            {/* Payment form (simple example) */}
            <form>
                <label className="block mb-2">Card Number</label>
                <input
                    type="text"
                    className="border p-2 w-full mb-4"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                />

                <label className="block mb-2">Expiration Date</label>
                <input
                    type="text"
                    className="border p-2 w-full mb-4"
                    placeholder="MM/YY"
                    required
                />

                <label className="block mb-2">CVV</label>
                <input
                    type="text"
                    className="border p-2 w-full mb-6"
                    placeholder="123"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Pay ${amount}
                </button>
            </form>
        </main>
    );
}
