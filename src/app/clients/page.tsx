'use client';

import { useClients } from '@/context/ClientContext';
import Link from 'next/link';

export default function ClientsPage() {
  const { clients } = useClients();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Lista de clienți</h1>
      <Link
      href="/clients/new"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      ➕ Adaugă client
    </Link>

      {clients.length === 0 ? (
        <p className="text-gray-500">Nu există clienți încă.</p>
      ) : (
        <ul className="space-y-4">
          {clients.map((client) => (
            <li
              key={client.id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-semibold">{client.name}</h2>
              <p className="text-sm text-gray-600">{client.email}</p>
              <p className="text-sm text-gray-500">
                Buget: €{client.budget} — Status:{" "}
                <span className="italic">{client.status}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}