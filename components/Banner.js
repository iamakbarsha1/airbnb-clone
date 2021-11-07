// _rfce

import Image from "next/image";

function Banner() {
   return (
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] ">
         <Image
            src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
         />

         <div className="absolute top-1/2 w-full text-center ">
            <p className=" text-lg font-semibold ">Not sure where to go?<br></br>Perfect. </p>
            <button className="md:text-transparent text-red-500 bg-white md:border md:bg-clip-text md:bg-gradient-to-r md:from-blue-800  md:to-pink-500 mt-1 md:my-3 px-4 md:px-10 py-2 md:py-4 rounded-full cursor-pointer font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150 
            ">I'm flexible</button>
         </div>

         <div>


         </div>


      </div>



   )
}

export default Banner
