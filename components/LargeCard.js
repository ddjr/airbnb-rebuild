import Image from "next/image";

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-1 cursor-pointer">
      <div className="relative min-w-300 h-96 ">
        <Image
          src={img}
          layout="fill"
          alt=""
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm text-white bg-slate-900 px-4 py-2 rounded-lg mt-5 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
