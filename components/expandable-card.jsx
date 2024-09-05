import overflowSvg from "@/assets/icons/overflow.svg";
import pinSvg from "@/assets/icons/pin.svg";
import { formatDate } from "@/lib/formatters";
import Image from "next/image";
import DatePill from "./date-pill";

export const ExpandableCard = ({ children, title, buttonText, className }) => {
  return (
    <section className={`card_skeleton border ${className}`}>
      <header className="flex_between">
        <h1 className="card_title">{title}</h1>
        <DatePill />
      </header>
      {children}
      <footer className="border-t py-4 m-0">
        <button className="text-sm text-orange capitalize text-center w-full font-semibold">
          {buttonText}
        </button>
      </footer>
    </section>
  );
};

export const Leaflet = ({ title, date, showPin = true }) => {
  const { time, date: formattedDate } = formatDate(date);
  return (
    <article className="bg-[#fafafa] text-[#303030] flex px-3 py-4 border border-gray-300 rounded-md justify-between">
      <div>
        <h1>{title}</h1>
        <time className="card_footer">
          {formattedDate}, {time}
        </time>
      </div>
      <div className="flex gap-3">
        {showPin && <Image src={pinSvg} alt="pin" width={20} height={20} />}
        <Image src={overflowSvg} alt="pin" width={20} height={20} />
      </div>
    </article>
  );
};
