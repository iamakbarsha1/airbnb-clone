import Image from "next/image";

function SmallCard({ img, location, distance }) {
  //   const Location = [
  //     {
  //       location: "Hydrebad",
  //       distance: "6-hour drive",
  //      },
  //      {
  //         loaction: "Bangalore",
  //         distance: "7-hour drive",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //      {
  //         loaction: "",
  //         distance: "",
  //      },
  //   ];

  return (
    <div className="flex items-center mt-4 m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out sm:m-3">
      {/* left div */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right div */}
      <div>
        <h2 className="text-gray-600 font-bold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
