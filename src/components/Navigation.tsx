import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
  { title: "Home", href: "/" },
  {
    title: "Work",
    href: "/work",
    children: [
      {
        title: "Social Media Strategy",
        href: "/work/social-media-strategy",
        children: [
          {title: "Magnum4D", href: "/work/social-media-strategy/magnum4d"},
          {title: "Sushi King", href: "/work/social-media-strategy/sushi-king"},
          {title: "Hoshino Coffee", href: "/work/social-media-strategy/hoshino"},
        ]
      },
      {
        title: "Visual Content",
        href: "/work/visual-content",
      },
      {
        title: "Campaigns",
        href: "/work/campaigns",
      },
    ]
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

const NavigationLink = ({item, level = 0, current}) => {
  const isActive = (item.href !== "/" && current.startsWith(item.href)) || item.href === current;

  return (
    <li className={`bg-white relative ${level === 0 ? "group/0" : level === 1 ? "group/1" : "group/2"}`}>
      <Link
        href={item.href}
        className={`text-xs tracking-tight font-semibold block text-nowrap px-5 py-3 ${isActive ? "text-rose-400" : ""} hover:text-rose-400 ${level === 0 ? " group-hover/0:text-rose-400 " : level === 1 ? " group-hover/1:text-rose-400 " : " group-hover/2:text-rose-400 "} text-gray-700`}
      >
        {item.title}
        {item.children && <span className="hidden md:inline text-[0.5rem] ml-2 leading-[1rem]">▼</span>}
      </Link>
      {item.children && (
        <div className={`md:absolute ${level === 0 ? "right-0" : "top-[-1px] left-[100%]"} ${level === 0 ? "z-10" : level === 1 ? "z-20" : "z-30"}`}>
          <ul className={`bg-white pl-4 md:pl-0 md:border md:border-neutral-200 md:hidden ${level === 0 ? "group-hover/0:block" : level === 1 ? "group-hover/1:block" : "group-hover/2:block"}`}>
            {item.children.map(child => (
              <NavigationLink key={child.href} item={child} level={level + 1} current={current} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="group/mobile relative">
      <button className="md:hidden p-4 px-8 cursor-pointer">
        <img src="/images/hamburger.svg" className="w-6 h-6" alt="Menu" />
      </button>

      <ul className="border border-neutral-200 md:border-0 hidden group-hover/mobile:block absolute right-4 md:static z-50 md:!flex justify-end gap-4">
        {links.map(item => (
          <NavigationLink key={item.href} item={item} current={pathname}/>
        ))}
      </ul>
    </div>
  )
}