import Image from "next/image";
import {
   SearchIcon,
   GlobeAltIcon,
   MenuIcon,
   UserCircleIcon,
   UsersIcon,
} from "@heroicons/react/solid"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'; // DatePicker
import { useRouter } from "next/dist/client/router";
import Dropdown from "./Dropdown";

function Header({ placeholder }) {

   // "useState" from React
   const [searchInput, setSearchInput] = useState("");
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [noOfGuests, setNoOfGuests] = useState(1);
   const router = useRouter();

   const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
   };

   // clear the calender search by clicking Cancel button
   const resetInput = () => {
      setSearchInput("");
   };

   // Router - linking the search page with home page
   const search = () => {
      router.push({
         pathname: "/search",
         query: {
            location: searchInput,
            startDate: startDate.toISOString(), //
            endDate: endDate.toISOString(),
            noOfGuests,

         },
      });
   };

   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
   };


   return (

      <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 bg-white shadow-md p-4 md:px-8">

         {/* Big-Logo only in large screen */}
         {/* router */}
         <div onClick={() => router.push("/")} className="hidden lg:inline left-logo relative h-10 cursor-pointer my-auto">
            <Image
               src="https://links.papareact.com/qd3"
               layout="fill"
               objectFit="contain"
               objectPosition="left"
               className=""
            />

         </div>

         {/* Small logo only in medium screen */}
         <div onClick={() => router.push("/")}
            className="hidden md:inline pt-1 md:pt-0 pr-1 md:pr-0 md:pl-2 lg:hidden text-red-400"
         >
            <svg className="h-8 w-8 md:h-10 md:w-10 md:pt-2 cursor-pointer relative"
               layout="fill"
               objectFit="contain"
               xmlns="http://www.w3.org/2000/svg" fill="currentcolor" ><path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path></svg>
         </div>


         {/* Middle-Search */}
         <div className="flex items-center flex-grow border-2 rounded-full py-1 md:py-2 px-3 md:px-4 md:shadow-md hover:shadow-lg">

            {/* Small logo only in Small Screen */}
            <div onClick={() => router.push("/")}
               className="md:pt-0 pr-2 md:pr-0 md:pl-2 md:hidden lg:hidden text-red-400"
            >
               <svg className="h-8 w-8 md:h-10 md:w-10 md:pt-2 cursor-pointer relative"
                  layout="fill"
                  objectFit="contain"
                  xmlns="http://www.w3.org/2000/svg" fill="currentcolor" ><path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path></svg>
            </div>

            <div className="flex items-center justify-center flex-grow cursor-pointer">
               <input
                   value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className=" bg-transparent flex-grow outline-none text-base md:text-base text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 cursor-pointer" type="text" placeholder={placeholder || "Where are you going?"} />

            </div>
            <SearchIcon className="h-5 p-1 ml-1 text-white bg-red-400 rounded-full cursor-pointer lg:hidden text-center" />
            <SearchIcon className="hidden h-8 ml-1 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:inline-flex md: " />
         </div>

         {/* Right */}
         <div className="flex items-center space-x-4 justify-end">
            <p className="hidden lg:inline p-2 px-3 font-medium rounded-full cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-200">Become a host</p>
            <div className="hidden md:inline">
               <div className="flex items-center animate-bounce space-x-2 rounded-full p-2 hover:bg-gray-300 ">
                  <GlobeAltIcon className="h-6 text-sm cursor-pointer text-gray-500 hover:text-gray-900" />

               </div>
            </div>
            <div className="hidden md:inline">
               <Dropdown />
               
            </div>
         </div>

         {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto ">
               <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5B61"]}
                  onChange={handleSelect}
               />
               <div className="flex items-center border-b mb-4">
                  <h2 className="text-2xl font-semibold pl-2 flex-grow">Number of Guests :</h2>
                  <UsersIcon
                     className="h-5 "
                  />
                  <input
                     value={noOfGuests}
                     onChange={(e) => setNoOfGuests(e.target.value)}
                     min={1}
                     type="number" className="w-12 pl-2 text-lg outline-none text-red-400" />
               </div>
               <div className="flex text-center ">
                  <button onClick={resetInput} className="text-gray-500 flex-grow">Cancel</button>
                  <button onClick={search} className="text-red-400 flex-grow">Search</button>

               </div>

            </div>
         )}

      </header>

   )
}

export default Header
