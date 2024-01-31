import Image from "next/image";
import hero from "../public/img/hero.webp";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] ">
      <Image src={hero} layout="fill" objectFit="cover" />

      <div className="absolute top-1/2 w-full text-center ">
        <p className=" text-lg font-semibold ">
          Not sure where to go?<br></br>Perfect.{" "}
        </p>
        <button
          className="md:text-transparent text-red-500 bg-white md:border md:bg-clip-text md:bg-gradient-to-r md:from-blue-800 md:to-pink-500 mt-1 md:my-3 px-4 md:px-10 py-2 md:py-4 rounded-full cursor-pointer font-bold shadow-md hover:shadow-xl active:scale-90 transition transform duration-150 animate-wiggle
            "
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
