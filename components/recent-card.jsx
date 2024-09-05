import { formatDate } from "@/lib/formatters";

const RecentCard = ({ activities = 0, lastActive = new Date() }) => {
  const { time, date, day } = formatDate(lastActive);
  return (
    <article className="card_skeleton bg-navy text-white">
      <header className="card_title bg-white bg-opacity-10 m-0 px-4 py-3">
        Recent Activity
      </header>
      <main className="grid gap-1 my-6">
        <time className="text-xs opacity-80 font-roboto">
          {time}, {day} {date}
        </time>
        <span className="text-lg">You posted a new job</span>
        <p className="text-sm normal-case mt-2 font-roboto">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </main>
      <footer className="flex_between text-sm capitalize">
        <span>today you made {activities} activity</span>
        <button className="bg-orange text-white rounded-[4px] px-4 py-[10px]">
          See All Activity
        </button>
      </footer>
    </article>
  );
};

export default RecentCard;
