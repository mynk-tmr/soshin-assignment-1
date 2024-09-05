import RecentCard from "@/components/recent-card";
import Sidebar from "@/components/sidebar";
import StatDisplay from "@/components/stat-display";
import TopBar from "@/components/topbar";
import { Announcements, UpcomingSchedule } from "@/components/view-agendas";
import { dummy_dates } from "@/config/mockdata";

const Home = () => {
  return (
    <main className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] items-start gap-7 pr-7">
      <Sidebar className="row-span-full" />
      <TopBar className="p-6" />
      <section className="row-span-1 flex flex-wrap lg:flex-nowrap *:grow gap-7 ">
        <section className="space-y-4">
          <StatDisplay />
          <Announcements />
        </section>
        <section className="space-y-4 w-1/3">
          <RecentCard activities={5} lastActive={dummy_dates[0]} />
          <UpcomingSchedule />
        </section>
      </section>
    </main>
  );
};

export default Home;
