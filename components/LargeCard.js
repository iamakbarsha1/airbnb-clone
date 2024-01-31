import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-8">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-16 left-9 md:top-20 lg:top-24 xl:top-24 2xl:top-32 md:left-10 lg:left-12 xl:left-14 2xl:left-14">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm cursor-pointer bg-gray-900 rounded-md px-4 py-2 font-semibold text-white mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
