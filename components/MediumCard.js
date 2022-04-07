import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 cursor-pointer ">
        <Image src={img} alt="" layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
