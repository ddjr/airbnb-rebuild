import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div className="flex m-2 mt-5 space-x-4 items-center rounded-xl cursor-pointer hover:bg-slate-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt="" layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-slate-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
