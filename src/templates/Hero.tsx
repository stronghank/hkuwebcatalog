import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-teal-700">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link className="text-white" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white" href="/">
            Library Collection
          </Link>
        </li>
        <li>
          <Link className="text-white" href="/">
            Source Management
          </Link>
        </li>
        <li>
          <Link className="text-white" href="/">
            Guidelines & Useful Materials
          </Link>
        </li>
        <li>
          <Link className="text-white" href="/">
            Contact Us
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    {/* }
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>
    */}
  </Background>
);

export { Hero };
