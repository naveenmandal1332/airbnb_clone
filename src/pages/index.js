import Head from 'next/head';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import SmallCard from '../components/SmallCard.js';

export default function Home({ exploreData }) {
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
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/** pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        </section>
      </main>
    </div>
  );
}

// Static rendering;
export async function getStaticProps() {
  try {
    // Bypass SSL certificate validation (temporary workaround, not recommended for production)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const response = await fetch('https://links.papareact.com/pyp');
    const exploreData = await response.json();

    return {
      props: {
        exploreData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        exploreData: [],
      },
    };
  }
}
