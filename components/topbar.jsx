import Image from "next/image";
import ic_search from "@/assets/icons/ic_search.svg";
import ic_bell from "@/assets/icons/ic_bell.svg";
import ic_message from "@/assets/icons/ic_message.svg";
import ic_arrow_down from "@/assets/icons/ic_arrow_down.svg";
import ic_hamburger from "@/assets/icons/ic_hamburger.svg";

const SearchInput = () => {
  return (
    <search className="flex_between border border-gray-300 rounded-md p-3 focus-within:border-orange">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-[calc(100%-36px)] hidden sm:inline"
      />
      <button>
        <Image src={ic_search} alt="search icon" width={24} />
      </button>
    </search>
  );
};

const UserProfile = () => {
  return (
    <section className="flex_between gap-3">
      <Image
        src="https://i.pravatar.cc/120"
        alt="profile image"
        height={42}
        width={42}
        className="rounded-full"
      />
      <span className="font-semibold hidden lg:inline">Admirra John</span>
      <button>
        <Image
          src={ic_arrow_down}
          alt="down icon"
          width={20}
          className="min-w-5"
        />
      </button>
    </section>
  );
};

const TopBar = ({ className }) => {
  return (
    <header className={`flex_between border-b gap-7 ${className}`}>
      <button>
        <Image
          src={ic_hamburger}
          alt="open menu"
          width={24}
          className="sm:hidden"
        />
      </button>
      <SearchInput />
      <section className="flex_between gap-7">
        <Image src={ic_bell} alt="bell icon" width={24} />
        <Image src={ic_message} alt="message icon" width={24} />
        <UserProfile />
      </section>
    </header>
  );
};

export default TopBar;
