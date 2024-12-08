import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Contact = () => (
  <div className="flex min-h-screen flex-col text-white antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="flex-1 bg-teal-700"> </div>
    <Footer />
  </div>
);

export { Contact };
