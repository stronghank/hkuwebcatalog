import { Background } from '@/background/Background';

import { LandingPageLastRow } from '../feature/LandingPageLastRow';
import { LandingPageRow } from '../feature/LandingPageRow';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div className="flex-1 bg-teal-700">
    <Background color="bg-teal-700">
      <Section yPadding="py-1">
        <LandingPageRow
          image="/assets/images/landing1.png"
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title="Research Data Collaboration Web Catalogue"
          image="/assets/images/landing2.png"
          imageAlt="First feature alt text"
        />
        <LandingPageLastRow
          image="/assets/images/landing3.png"
          imageAlt="Second feature alt text"
        />
      </Section>
    </Background>
  </div>
);

export { VerticalFeatures };
