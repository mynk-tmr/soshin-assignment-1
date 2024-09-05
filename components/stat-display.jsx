import DataCard from "@/components/data-card";
import GraphCard from "@/components/graph-card";

const StatDisplay = ({ className }) => {
  return (
    <section className={`${className}`}>
      <section className="grid sm:grid-cols-3 gap-4 mb-4">
        <DataCard
          title="available positions"
          data="24"
          footer="4 urgently needed"
          className="bg-[#FFEFE7] [&>footer]:text-orange"
        />
        <DataCard
          title="job open"
          data="10"
          footer="4 active hiring"
          className="bg-[#e8f0fb] [&>footer]:text-[#3786f1]"
        />
        <DataCard
          title="new employees"
          data="24"
          footer="4 department"
          className="bg-[#FDEBF9] [&>footer]:text-[#EE61CF]"
        />
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        <GraphCard
          title="total employees"
          data={{
            men: 120,
            women: 96,
            change: "+2",
          }}
        />

        <GraphCard
          title="Talent Request"
          data={{
            men: 6,
            women: 10,
            change: "-5",
          }}
        />
      </section>
    </section>
  );
};

export default StatDisplay;
