import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";


function InfoCard({ img, location, title, description, star, price, total }) {
   return (
      <div className="flex border-b py-7 px-2 pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
         <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image
               src={img}
               layout="fill"
               objectFit="cover"
               className="rounded-2xl "
            />
         </div>

         <div className="flex flex-col flex-grow pl-5">

            <div className="flex justify-between">
               <p className="text-gray-500 ">{location}</p>
               <HeartIcon className="h-7 cursor-pointer text-gray-700" />
            </div>

            <h4 className="text-xl font-medium lg:text-2xl pb-3 ">{title}</h4>

            <div className="border-b w-10 pt-2" />

            <p className=" flex text-gray-500 pt-2 text-sm flex-grow">{description}</p>

            <div className="flex justify-between items-end pt-5">

               <p className="flex items-center ">
                  <StarIcon className="h-6 text-red-400" />
                  {star}
               </p>

               <div>
                  <p className="text-lg lg:text-2xl pb-2 font-semibold">{price}</p>
                  <p className=" font-extralight float-right">{total}</p>
               </div>

            </div>

         </div>

      </div>
   )
}

export default InfoCard
