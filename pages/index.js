import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react/cjs/react.development";
import jwt from "jsonwebtoken";
// import useHistory from "react-router-dom";

export default function Home({ exploreData, cardsData }) {
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

  // const history = useHistory();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token) {
  //     const user = jwt.decode(token);
  //     if(!user) {
  //       localStorage.removeItem('token');
  //       router.push("/");
  //       // history.replace(login);
  //     }
  //   }
  // }, [])

  return (
    <div className="">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header className="" />

      {/* Banner */}
      <Banner clasName="" />

      {/* Main */}
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
          <h2 className="font-semibold text-3xl pb-5 py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <div>
          <LargeCard
            img="https://links.papareact.com/4cj"
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
  const exploreData = await fetch("https://jsonkeeper.com/b/7BHL").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
