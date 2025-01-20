/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    signIn('keycloak', { callbackUrl: `${process.env.NEXT_PUBLIC_SUB_PATH}/` });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
