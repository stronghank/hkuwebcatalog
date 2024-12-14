import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import DetailedPage from '@/templates/DetailedPage';

import { Meta } from '../../layout/Meta';
import { Banner } from '../../templates/Banner';
import { Footer } from '../../templates/Footer';
import { Hero } from '../../templates/Hero';
import { AppConfig } from '../../utils/AppConfig';

const Detail = () => {
  const router = useRouter();
  const [numericId, setNumericId] = useState<number | null>(null); // State for numeric ID

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      if (typeof id === 'string') {
        const convertedId = Number(id.trim());
        if (!Number.isNaN(convertedId)) {
          setNumericId(convertedId); // Set the state with the numeric ID
        } else {
          console.error('Invalid ID:', id);
        }
      } else if (Array.isArray(id)) {
        console.error('ID is an array:', id);
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div className="flex min-h-screen flex-col text-white antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <div className="flex-1 bg-teal-700">
        <Banner image="/assets/images/banner1.png" />
        {numericId !== null ? (
          <DetailedPage id={numericId} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
