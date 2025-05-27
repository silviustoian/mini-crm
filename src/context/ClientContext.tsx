'use client';

import { createContext, useReducer, useContext, ReactNode } from 'react';
import { Client } from '@/types/client';
import { v4 as uuid } from 'uuid';

type Action =
    | { type: 'add'; payload: Omit<Client, 'id'> }
    | { type: 'remove'; id: string };



function reducer(state: Client[], action: Action): Client[] {
    switch (action.type) {
        case 'add':
            return [...state, { ...action.payload, id: uuid() }];
        case 'remove':
            return state.filter((c) => c.id !== action.id);
        default:
            return state;
    }
}


const ClientContext = createContext<{
    clients: Client[];
    dispatch: React.Dispatch<Action>;
}>({
    clients: [],
    dispatch: () => { },
})

const initialClients: Client[] = [
    {
        id: '1',
        name: 'Andrei Popescu',
        email: 'andrei@freelance.dev',
        budget: 1200,
        status: 'prospect',
    },
    {
        id: '2',
        name: 'Ioana Ionescu',
        email: 'ioana@design.ro',
        budget: 1800,
        status: 'negotiation',
    },
];

export function ClientProvider({ children }: { children: ReactNode }) {
    const [clients, dispatch] = useReducer(reducer, initialClients);

    return (
        <ClientContext.Provider value={{ clients, dispatch }}>
            {children}
        </ClientContext.Provider>
    )
}

export const useClients = () => useContext(ClientContext);