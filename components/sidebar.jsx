import logo_url from "@/assets/logo.svg";
import logo_small_url from "@/assets/logo_small.svg";
import ic_dashboard from "@/assets/icons/ic_dashboard.svg";
import ic_recruitment from "@/assets/icons/ic_recruitment.svg";
import ic_calendar from "@/assets/icons/ic_calendar.svg";
import ic_employee from "@/assets/icons/ic_employee.svg";
import ic_department from "@/assets/icons/ic_department.svg";
import ic_support from "@/assets/icons/ic_support.svg";
import ic_settings from "@/assets/icons/ic_settings.svg";
import Image from "next/image";

const mainLinks = [
  { title: "Dashboard", icon: ic_dashboard },
  { title: "Recruitment", icon: ic_recruitment },
  { title: "Schedule", icon: ic_calendar },
  { title: "Employee", icon: ic_employee },
  { title: "Department", icon: ic_department },
];

const otherLinks = [
  { title: "Support", icon: ic_support },
  { title: "Settings", icon: ic_settings },
];

const LinkSection = ({ title, links }) => {
  return (
    <section className="hidden sm:block *:p-4">
      <h3 className="uppercase text-xs font-medium">{title}</h3>
      <ul className="grid gap-y-4">
        {links.map((link) => (
          <li
            key={link.title}
            className="flex items-center gap-6 cursor-pointer hover:text-orange active:text-orange focus:text-orange">
            <Image src={link.icon} alt={link.title} width={24} height={24} />
            <span className="hidden lg:inline">{link.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Sidebar = ({ className }) => {
  return (
    <aside
      className={`w-0 sm:w-auto sm:p-5 sm:border-r sm:h-full text-aside bg-[#fafafa] ${className}`}>
      <div className="flex items-center">
        <Image
          src={logo_url}
          alt="logo"
          width={170}
          height={60}
          className="hidden lg:inline"
        />
        <Image
          src={logo_small_url}
          alt="logo_small"
          width={60}
          height={60}
          className="lg:hidden"
        />
      </div>
      <nav>
        <LinkSection title="main menu" links={mainLinks} />
        <LinkSection title="others" links={otherLinks} />
      </nav>
    </aside>
  );
};

export default Sidebar;
