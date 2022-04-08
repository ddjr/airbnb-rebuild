import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestCount } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestCount} guests`} />
      <main className="flex">
        {/* Stays */}
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays • {range} • for {guestCount} guests
          </p>
          <h1 className="text-3xl text-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden flex text-xs space-x-3 text-gray-800 whitespace-nowrap lg:inline-flex items-center m-2">
            <p className="button">Cancellation Flexability</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div>
            {searchResults?.map(
              (
                {
                  img,
                  location,
                  title,
                  description,
                  price,
                  star,
                  total,
                  long,
                  lat,
                },
                idx
              ) => {
                return (
                  <InfoCard
                    key={idx}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    price={price}
                    star={star}
                    total={total}
                    long={long}
                    lat={lat}
                  />
                );
              }
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://links.papareact.com/isz"
  ).then((res) => res.json());
  return {
    props: {
      searchResults,
    },
  };
}
