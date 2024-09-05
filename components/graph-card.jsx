import linegraphup from "../assets/linegraphup.png";
import linegraphdown from "../assets/linegraphdown.png";
import Image from "next/image";

const Graph = ({ data }) => {
  const src = data.change >= 0 ? linegraphup : linegraphdown;
  return (
    <div className="relative">
      <data className="text-red-500 text-xs absolute left-12">
        {data.change} %
      </data>
      <Image src={src} alt="graph" width={130} />
    </div>
  );
};

const HeadCount = ({ data }) => (
  <>
    <div className="grid gap-2 text-gray-600">
      <span>{data.men} men</span>
      <span>{data.women} women</span>
    </div>
    <span className="rounded-[4px] px-3 py-1 bg-[#ffefe7]">
      <span>{data.change}% Past month</span>
    </span>
  </>
);

const GraphCard = ({ title, className, data }) => {
  return (
    <article className={`card_skeleton ${className}`}>
      <header className="card_title">{title}</header>
      <main className="flex_between">
        <data className="text-5xl">{data.men + data.women}</data>
        <Graph data={data} />
      </main>
      <footer className="card_footer flex_between">
        <HeadCount data={data} />
      </footer>
    </article>
  );
};

export default GraphCard;
