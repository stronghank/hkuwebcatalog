import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import EditSource from '@/templates/EditSource';

import { Meta } from '../../layout/Meta';
import { Banner } from '../../templates/Banner';
import { Footer } from '../../templates/Footer';
import { Hero } from '../../templates/Hero';
import { AppConfig } from '../../utils/AppConfig';

const Edit = () => {
  const router = useRouter();
  const [colId, setColId] = useState<string | null>(null);
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (typeof id === 'string') {
        setColId(id);
      } else if (Array.isArray(id)) {
        console.error('ID is an array:', id);
      }
    }
  }, [router.isReady, router.query]);
  return (
    <div className="container mx-auto bg-teal-700 p-6 text-gray-700">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <div className="flex-1 bg-teal-700">
        <Banner image="/assets/images/banner1.png" />
        {colId !== null ? <EditSource id={colId} /> : <p>Loading...</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Edit;
