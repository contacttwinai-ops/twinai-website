"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type Customer = {
    name: string;
    email: string;
    phone: string;
};

export default function CRMAutomation() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [form, setForm] = useState<Customer>({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddCustomer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCustomers([...customers, form]);
        setForm({ name: "", email: "", phone: "" });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>CRM Automation</h2>
            <form onSubmit={handleAddCustomer} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Customer Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    style={{ marginRight: "10px" }}
                />
                <button type="submit">Add Customer</button>
            </form>

            <h3>Customer List</h3>
            <table border={1} cellPadding={8} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust, idx) => (
                        <tr key={idx}>
                            <td>{cust.name}</td>
                            <td>{cust.email}</td>
                            <td>{cust.phone}</td>
                        </tr>
                    ))}
                    {customers.length === 0 && (
                        <tr>
                            <td colSpan={3} style={{ textAlign: "center" }}>
                                No customers added yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
