import Head from 'next/head';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import SmallCard from '../components/SmallCard.js';
import MediumCard from '../components/MediumCard.js';
import LargeCard from '../components/LargeCard.js';
import Footer from '../components/Footer.js';

export default function Home({ exploreData, cardsData }) {
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

      {/*This is Main section*/}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/*Add Medium section card*/}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
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

        {/*Add Medium section card*/}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.title} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/*Add Large section card*/}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      {/*Add footer*/}
      <Footer />
    </div>
  );
}

// Static rendering;
export async function getStaticProps() {
  // Bypass SSL certificate validation (temporary workaround, not recommended for production)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
