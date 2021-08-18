import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router"; //react router
import moment from "moment"; //moment.js
import InfoCard from "../components/InfoCard";

function Search({ searchesults }) {
   const router = useRouter();
   // ES6 Destructuring
   const { location, startDate, endDate, noOfGuests } = router.query;

   const formattedStartDate = moment(startDate).format("LL");
   const formattedEndDate = moment(endDate).format("LL");
   const range = `${formattedStartDate} - ${formattedEndDate}`

   console.log(router.query);

   return (
      <div>
         <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

         <main className="flex">
            <section className="flex-grow pt-16 px-6">
               <p className=" text-lg">300+ stays - {range} - for {noOfGuests} Guests </p>

               <h1 className="font-bold text-5xl text-gray-800 mt-2 mb-6 ">Stays in {location}</h1>

               <div className="hidden lg:inline-flex mb-6 font-medium space-x-3 text-gray-800 whitespace-nowrap">
                  <p className="button">Cancellation Flexibility</p>
                  <p className="button">Type of place</p>
                  <p className="button">Price</p>
                  <p className="button">Rooms and  Beds</p>
                  <p className="button">More filters</p>
               </div>

               <div className="flex flex-col">
                  {searchesults.map(({ img, location, title, description, star, price, total }) => (
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
         </main>

         <Footer />
      </div>
   )
}

export default Search;

export async function getServerSideProps() {
   const searchesults = await fetch("https://links.papareact.com/isz").then(
      res => res.json()
   );

   return {
      props: {
         searchesults,
      },
   };
}

