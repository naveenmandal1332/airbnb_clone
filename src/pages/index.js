import Head from 'next/head';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png"
        />
      </Head>
      <Header />
    </div>
  );
}
