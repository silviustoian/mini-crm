'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useClients } from "@/context/ClientContext";

export default function NewClientPage() {
    const { dispatch } = useClients();
    const router = useRouter();

    const [form, setForm] = useState({
        name: '',
        email: '',
        budget: '',
        status: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({
            type: 'add',
            payload: {
                name: form.name,
                email: form.email,
                budget: Number(form.budget),
                status: form.status,
            },
        });
        router.push('/clients');
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">➕ Adaugă client nou</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border px-3 py-2 rounded"
                    type="text"
                    placeholder="Nume"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    className="w-full border px-3 py-2 rounded"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    className="w-full border px-3 py-2 rounded"
                    type="number"
                    placeholder="Buget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    required
                />
                <select
                    className="w-full border px-3 py-2 rounded"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                    <option value="prospect">Prospect</option>
                    <option value="negotiation">Negotiation</option>
                    <option value="closed">Closed</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Salvează clientul
                </button>
            </form>
        </div>
    );
}