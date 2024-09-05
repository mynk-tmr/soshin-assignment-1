import { ExpandableCard, Leaflet } from "@/components/expandable-card";
import { dummy_dates, dummy_titles } from "@/config/mockdata";

export const Announcements = () => {
  return (
    <ExpandableCard title={"announcements"} buttonText={"view all"}>
      {dummy_titles.slice(0, 3).map((title, index) => (
        <Leaflet key={index} title={title} date={dummy_dates[index]} />
      ))}
    </ExpandableCard>
  );
};

export const UpcomingSchedule = () => {
  return (
    <ExpandableCard
      title={"upcoming schedule"}
      buttonText={"create a new schedule"}>
      <h3 className="text-xs text-gray-500">Priority</h3>
      <Leaflet
        title="Review candidate applications"
        date={dummy_dates[3]}
        showPin={false}
      />

      <h3 className="text-xs text-gray-500">Others</h3>
      {dummy_titles.slice(4).map((title, index) => (
        <Leaflet
          key={index}
          title={title}
          date={dummy_dates[index]}
          showPin={false}
        />
      ))}
    </ExpandableCard>
  );
};
