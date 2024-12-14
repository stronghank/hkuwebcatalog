import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="bg-teal-700 shadow-md">
    <div className="flex items-center justify-between">
      <div className="mr-10 flex items-center">
        <Link href="/" className="text-white">
          {props.logo}
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-6 text-lg font-medium text-white">
          {props.children}
        </ul>
      </nav>
    </div>
  </div>
);

export { NavbarTwoColumns };
