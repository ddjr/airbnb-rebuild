import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  console.log(startDate, endDate);
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestCount: guestCount,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:p-6">
      {/* Logo */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="ml-5 bg-transparent outline-none flex-grow w-0 text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
      </div>
      {/* Menu */}
      <div className="flex items-center space-x-2 justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer rounded-full p-2 px-3 hover:bg-gray-100">
          Become a host
        </p>
        <GlobeAltIcon className="h-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full hover:shadow-md">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={guestCount}
              min="1"
              max="20"
              className="w-12 pl-2 text-lg text-red-400 text-right"
              onChange={(e) => setGuestCount(e.target.value)}
            />
          </div>
          <div className="flex pt-5">
            <button
              className="flex-1 text-gray-400"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-1 text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
