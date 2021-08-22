import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router"; //react router
import moment from "moment"; //moment.js
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
   const router = useRouter();
   // ES6 Destructuring
   const { location, startDate, endDate, noOfGuests } = router.query;

   const formattedStartDate = moment(startDate).format("ll");
   const formattedEndDate = moment(endDate).format("ll");
   const range = `${formattedStartDate} - ${formattedEndDate}`

   console.log(router.query);

   return (
      <div>
         <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

         <main className="flex">
            <section className="flex-grow py-4 px-3 md:pt-12 md:px-6 mb-4">
               <p className=" text-xs md:text-xs lg:text-sm ">300+ stays · {range} · {noOfGuests} Guests </p>

               <h1 className="font-bold text-xl md:text-3xl lg:text-3xl text-gray-800 mt-1 mb-3 md:mt-2 md:mb-6 ">Stays in {location}</h1>

               <div className="hidden lg:inline-flex mb-6 font-medium space-x-3 text-gray-800 whitespace-nowrap">
                  <p className="button">Cancellation Flexibility</p>
                  <p className="button">Type of place</p>
                  <p className="button">Price</p>
                  <p className="button">Rooms and  Beds</p>
                  <p className="button">More filters</p>
               </div>

               <div className="flex flex-col ">
                  {searchResults.map(({ img, location, title, description, star, price, total }) => (
                     <InfoCard
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}

                     />
                  ))}
               </div>

            </section>

            <section className="hidden lg:inline-flex xl:min-w-[600px]">
               <Map searchResults={searchResults} className="" />
            </section>

         </main>

         <Footer />
      </div>
   )
}

export default Search;

export async function getServerSideProps() {
   const searchResults = await fetch("https://links.papareact.com/isz").then(
      res => res.json()
   );

   return {
      props: {
         searchResults,
      },
   };
}

