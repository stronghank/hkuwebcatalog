import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import GuideTabs from './GuideTabs';
import { Hero } from './Hero';

const Guide = () => (
  <div className="container mx-auto bg-teal-700 p-6 text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="flex-1 bg-teal-700">
      <Banner image="/assets/images/banner1.png" />
      <GuideTabs />
    </div>
    <Footer />
  </div>
);

export { Guide };
