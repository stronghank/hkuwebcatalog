import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/hkuwebcatalog';
        
        // Handle authentication
        if (!req.nextauth.token) {
            const signInUrl = new URL(`${basePath}/auth/signin`, req.url);
            return NextResponse.redirect(signInUrl);
        }

        // Check for required roles
        const userRoles = req.nextauth.token.roles || [];
        const requiredRoles = ['Role_Webcatalog_Library_Admin', 'Role_Webcatalog_HKUMed', 'Role_Webcatalog_System_Admin'];
        
        if (!userRoles.some(role => requiredRoles.includes(role))) {
            return NextResponse.redirect(new URL(`${basePath}/auth/access-denied`, req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
);
/*
export const config = {
    matcher: [
        '/hkuwebcatalog/:path*',
        '/((?!api|_next/static|_next/image|auth/signin|auth/error|auth/access-denied|favicon.ico).*)'
    ]
};
*/