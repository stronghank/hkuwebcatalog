import { useEffect } from 'react';
import { Meta } from '../../layout/Meta';
import { Banner } from '../../templates/Banner';
import { Footer } from '../../templates/Footer';
import { Hero } from '../../templates/Hero';
import { AppConfig } from '../../utils/AppConfig';

import { signOut } from "next-auth/react";

const AccessDenied = () => {
  useEffect(() => {
      signOut({ redirect: false });
    }, []);
  return(
  <div className="container mx-auto bg-teal-700 p-6 text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="flex-1 bg-teal-700">
      <Banner image="/assets/images/banner1.png" />
      <div className="flex-1 text-white">
        <h1>Access Denied.</h1>
        <h4>
          You do not have the necessary permissions to access this page. Please login with the authorized account.
        </h4>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default AccessDenied;
