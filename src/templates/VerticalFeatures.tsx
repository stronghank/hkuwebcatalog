import { Background } from '@/background/Background';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div className="flex-1 bg-teal-700">
    <Background color="bg-teal-700">
      <Section yPadding="py-1">
        <VerticalFeatureRow
          title="Research Data Collaboration Web Catalogue"
          images={[
            { src: '/assets/images/landing2.png', alt: 'image 1' },
            { src: '/assets/images/landing3.png', alt: 'image 2' },
          ]}
        />
      </Section>
    </Background>
  </div>
);

export { VerticalFeatures };
