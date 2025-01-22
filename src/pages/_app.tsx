import '../styles/global.css';
import '../styles/collectionTbl.css';
import AuthProvider from '../templates/AuthContext';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
