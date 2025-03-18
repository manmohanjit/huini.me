import LinkedIn from "./LinkedIn";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Mail from "./Mail";

const socials = [
  {
    title: "LinkedIn",
    image: <LinkedIn />,
    link: "https://www.linkedin.com/in/chunhuini/",
  },
  {
    title: "Facebook",
    image: <Facebook />,
    link: "https://www.facebook.com/chun.huini",
  },
  {
    title: "Instagram",
    image: <Instagram />,
    link: "https://www.instagram.com/huini",
  },
  {
    title: "Email",
    image: <Mail />,
    link: "huini.29@gmail.com",
  },
]

export default function Socials() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-center">
      <div className="mb-4">
        <h3 className="block text-xl md:text-2xl font-bold">Let's connect!</h3>
        <p className="block text-gray-700">If you’ve made it this far, you might as well say hi. 👋🏼</p>
      </div>

      <div className="flex items-center justify-center space-x-2">
        {socials.map(social => (
          <a key={social.title} title={social.title} href={social.link} className="block">
            {social.image}
          </a>
        ))}
      </div>
    </div>
  )
}