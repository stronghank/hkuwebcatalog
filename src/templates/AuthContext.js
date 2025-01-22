'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/hkuwebcatalog';
    
    return (
        <SessionProvider
            basePath={`${basePath}/api/auth`}
            refetchInterval={0}
            refetchWhenOffline={false}
        >
            {children}
        </SessionProvider>
    );
}