import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";


function InfoCard({ img, location, title, description, star, price, total }) {
   return (
      <div className="flex flex-col md:flex-row border-b p-3 md:py-7 md:px-2 md:pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
         <div className="relative h-44 w-88 md:h-52 md:w-80 flex-shrink-0">
            <Image
               src={img}
               layout="fill"
               objectFit="cover"
               className="rounded-2xl "
            />
         </div>

         <div className="flex flex-col flex-grow p-1 pl-1 md:pl-5 ">

            <div className="flex justify-between mt-1">
               <p className="text-gray-500  ">{location}</p>
               <HeartIcon
                  className="h-7 cursor-pointer text-gray-700 active:scale-75 transition duration-100 ease-out outline-none" />
            </div>

            <h4 className="text-xl font-medium lg:text-xl pb-1 md:pb-3 ">{title}</h4>

            <div className="border-b w-10 pt-2" />

            <p className=" flex text-gray-500 pt-2 text-sm flex-grow">{description}</p>

            <div className="flex justify-between items-end pt-2 md:pt-5">

               <p className="flex items-center ">
                  <StarIcon className="h-6 text-red-400" />
                  {star}
               </p>

               <div>
                  <p className="text-lg lg:text-xl pb-2 font-semibold">{price}</p>
                  <p className=" font-extralight float-right">{total}</p>
               </div>

            </div>

         </div>

      </div>
   )
}

export default InfoCard
