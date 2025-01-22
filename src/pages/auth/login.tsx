
import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    useEffect(() => {
        signIn("keycloak", {
            callbackUrl: "/hkuwebcatalog"
        });
    }, []);

    return <div>Redirecting to HKU portal login...</div>;
}