import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";

import Thirunelveli from "../public/img/exploreNearby/5j2.webp";
import Pulicat from "../public/img/exploreNearby/1to.webp";
import Bangalore from "../public/img/exploreNearby/40m.webp";
import Yelagiri from "../public/img/exploreNearby/msp.webp";
import Mahaballipuram from "../public/img/exploreNearby/2k3.webp";
import Pondicherry from "../public/img/exploreNearby/ynx.webp";
import Hydrebad from "../public/img/exploreNearby/kji.webp";
import Kochi from "../public/img/exploreNearby/41m.webp";

import og from "../public/img/liveAnywhere/outdoorGataeways.webp";
import us from "../public/img/liveAnywhere/uniqueStays.webp";
import eh from "../public/img/liveAnywhere/entireHomes.webp";
import pa from "../public/img/liveAnywhere/petAllowed.webp";

import ga from "../public/img/liveAnywhere/greatestOutdoor.webp";

export default function Home() {
  const router = useRouter();
  const indexPage = () => {
    router.push({
      pathname: "/",
    });
  };
  const login = () => {
    router.push({
      pathname: "/login",
    });
  };

  const exploreData = [
    {
      img: Thirunelveli,
      location: "Thirunelveli",
      distance: "9-hour drive",
    },
    {
      img: Pulicat,
      location: "Pulicat",
      distance: "1-hour drive",
    },
    {
      img: Bangalore,
      location: "Bangalore",
      distance: "7-hour drive",
    },
    {
      img: Yelagiri,
      location: "Yelagiri",
      distance: "4-hour drive",
    },
    {
      img: Mahaballipuram,
      location: "Mahaballipuram",
      distance: "2-hour drive",
    },
    {
      img: Pondicherry,
      location: "Pondicherry",
      distance: "3-hour drive",
    },
    {
      img: Hydrebad,
      location: "Hydrebad",
      distance: "7-hour drive",
    },
    {
      img: Kochi,
      location: "Kochi",
      distance: "13-hour drive",
    },
  ];

  const cardsData = [
    {
      img: og,
      title: "Outdoor getaways",
    },
    {
      img: us,
      title: "Unique stays",
    },
    {
      img: eh,
      title: "Entire homes",
    },
    {
      img: pa,
      title: "Pet allowed",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="" />
      <Banner clasName="" />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 shadow-lg mb-8">
        <section className="pt-6">
          <h2 className="font-semibold text-3xl pb-5">Explore Nearby</h2>
          {/* Pull some data from a Server - API endpoints SERVER-SIDE-RENDERING */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="pb-5 py-8 font-semibold text-3xl">Live Anywhere</h2>
          <div className="p-3 space-x-3 flex overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <div>
          <LargeCard
            img={ga}
            title="The Greatest Outdoors"
            description="Wishlist curated by Airbnb."
            buttonText="Get Inspired"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch("https://jsonkeeper.com/b/7BHL").then((res) =>
  //   res.json()
  // );

  // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
  //   res.json()
  // );

  return {
    props: {
      // exploreData,
      // cardsData,
    },
  };
}
