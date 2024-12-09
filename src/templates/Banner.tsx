import { Background } from '@/background/Background';

import { BannerRow } from '../feature/BannerRow';
import { Section } from '../layout/Section';

const Banner = (props: any) => (
  <div className="flex-1 bg-teal-700">
    <Background color="bg-teal-700">
      <Section yPadding="py-1">
        <BannerRow
          image={props.image} // "/assets/images/banner.png"
          imageAlt="Banner"
        />
      </Section>
    </Background>
  </div>
);

export { Banner };
