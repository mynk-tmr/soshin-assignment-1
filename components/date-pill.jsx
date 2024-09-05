"use client";
import { useState, useRef } from "react";
import { formatDate } from "../lib/formatters";
import ic_arrow_down from "../assets/icons/ic_arrow_down.svg";
import Image from "next/image";

const DatePill = () => {
  const inputRef = useRef();
  const [date, setDate] = useState(new Date());

  const { time, date: formattedDate } = formatDate(date);
  return (
    <div className="relative">
      <div className="rounded-[4px] px-3 py-1 card_footer border border-gray-300">
        <output>
          {formattedDate}, {time}
        </output>
        <button onClick={() => inputRef.current.showPicker()} className="ml-2">
          <Image
            src={ic_arrow_down}
            alt="open calendar"
            width={18}
            height={18}
          />
        </button>
      </div>
      <input
        type="datetime-local"
        className="absolute w-0 h-0"
        ref={inputRef}
        onChange={() => setDate(new Date(inputRef.current.value))}
      />
    </div>
  );
};

export default DatePill;
