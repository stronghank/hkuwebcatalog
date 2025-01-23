/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Hero = () => {
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    //signIn('keycloak', { callbackUrl: '/hkuwebcatalog'});
    router.push("/auth/login");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      setIsLoggedIn(false);;
    }else{
      setIsLoggedIn(true);
    }
  }, [status]);

  return (
    <Background color="bg-teal-700">
      <Section yPadding="py-0">
        <NavbarTwoColumns logo={<Logo xl />}>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/collection">
                Library Collection
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/source">
                Source Management
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/guide">
                Guidelines & Useful Materials
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="ml-auto">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              ) : (
                <button onClick={handleLogin} className="text-white">
                  Login
                </button>
              )}
            </li>
          </ul>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Hero };
