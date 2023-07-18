import '../styles/globals.css';
import { NextResponse } from 'next/server';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
