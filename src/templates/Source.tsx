import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import AddSource from './AddSource';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Source = () => (
  <div className="container mx-auto bg-teal-700 p-6 text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="flex-1 bg-teal-700">
      <Banner image="/assets/images/banner1.png" />
      <AddSource />
    </div>
    <Footer />
  </div>
);

export { Source };
