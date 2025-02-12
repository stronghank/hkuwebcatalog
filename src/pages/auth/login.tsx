
import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    useEffect(() => {
        signIn("keycloak", {
            callbackUrl: "/hkuwebcatalog/collection"
        });
    }, []);

    return <div>Redirecting to HKU portal login...</div>;
}