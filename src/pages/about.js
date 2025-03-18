import Heading from "@/components/Heading";
import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import Navigation from "@/components/Navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import useIsClient from "@/hooks/useIsClient";
import PageLayout from "@/components/PageLayout";

const tools = [
  {title: "Photoshop", image: "/images/about/toolbox/photoshop.png"},
  {title: "Premiere Pro", image: "/images/about/toolbox/premierepro.png"},
  {title: "Illustrator", image: "/images/about/toolbox/illustrator.png"},
  {title: "Canva", image: "/images/about/toolbox/canva.png"},
  {title: "WordPress", image: "/images/about/toolbox/wp.png"},
]
const platforms = [
  {title: "Meta", image: "/images/about/toolbox/meta.png"},
  {title: "Sprinklr", image: "/images/about/toolbox/sprinklr.png"},
  {title: "Google Analytics", image: "/images/about/toolbox/ga4.webp"},
]

const skills = [
  "/images/about/skills/01_social media marketing.jpg",
  "/images/about/skills/02_design.jpg",
  "/images/about/skills/03_email marketing.jpg",
  "/images/about/skills/04_website optimization.jpg",
  "/images/about/skills/05_data analytics.jpg",
  "/images/about/skills/06_performance marketing.jpg",
  "/images/about/skills/07_content marketing.jpg",
]

export default function Index() {
  const isClient = useIsClient();

  return (
    <PageLayout title="about">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row items-center justify-center md:space-x-12 md:space-y-0">
            <div className="md:w-8/12 order-1 md:order-0">
              <h3 className="block text-center text-6xl font-extrabold mb-8">hello, i'm Huini</h3>
              <p className="block text-center text-lg md:text-xl mb-8">TL;DR quick intro of me:</p>
              <div
                className="flex flex-col md:flex-row items-center text-center space-y-4 md:space-y-0 md:space-x-4 text-sm md:text-base mb-8 md:mb-12">
                <p className="md:w-2/3">in-house & agency experience</p>
                <div className="bg-gray-300 w-12 h-[1px] md:h-12 md:w-[1px]"></div>
                <p className="md:w-full">worked across various industries <br/><span className="italic">– automotive, retail, f&b, etc</span>
                </p>
                <div className="bg-gray-300 w-12 h-[1px] md:h-12 md:w-[1px]"></div>
                <p className="md:w-2/3">6 years of experience in digital marketing</p>
              </div>

              <div className="text-center">
                <a className="bg-black text-white rounded-full px-4 py-3 text-xs hover:shadow-xl hover:bg-gray-700"
                   href="/ChunHuiNi_Resume.pdf" target="_blank">Download Resume</a>
              </div>
            </div>
            <div className="w-[264px] mb-6 md:w-4/12 md:order-1 md:mb-0">
              <img src="/images/about/headshot.png"/>
            </div>
          </div>


          <div
            className="px-10 lg:px-6 py-8 text-black">
            <h4 className="mb-4 font-bold text-lg">READ MORE HERE!</h4>
            <p className="mb-4">I got into digital marketing after my internship out of pure curiosity. I
              self-taught
              everything while working as a digital marketer at an in-house automotive brand. It was the perfect
              playground to explore everything—from social media content to website management, photo/video work,
              and
              more.</p>
            <p className="mb-4">Then I jumped into agency life because I wanted to learn more. I worked across
              various
              industries, specializing in social media content creation with lots of brainstorming and teamwork.</p>
            <p className="mb-4">One thing about me is I’m always up for something new. On the side, I’ve picked up
              design, video/photo editing, website development, and data analysis, even though my role was solely
              focused on social media content creation. Give me a new tool today, and I’ll be flexing it tomorrow!
              👏🏼</p>
            <p className="mb-4">Oh, and I’m also great at leading a team in fast-paced environments. You’re pretty
              much getting the full 360° package with me.</p>
          </div>


        </div>


      </div>


      <div className="py-16 relative">
        <div className="w-[300px] md:w-[400px] mx-auto relative">
          <h3 className="text-4xl font-bold px-8 text-center absolute top-[20%]">my area of expertise</h3>
          <img
            className="w-full h-auto"
            src="/images/about/skills/phone.jpg"
            alt="Mobile"
          />
        </div>
        <div className="absolute top-[40%] left-0 right-0">
          <Swiper
            key={isClient ? "loop" : "no-loop"}
            className="!px-4"
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={3}
            spaceBetween={20}
            slidesOffsetAfter={0}
            slidesOffsetBefore={0}
            loop={isClient}
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {skills.map(image => (
              <SwiperSlide key={image}>
                <div className="aspect-square">
                  <img className="w-full h-auto rounded-3xl" src={image} alt={""}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-16 ">
        <Heading className="mb-12" title="my marketing toolbox:"/>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 mb-6">
            {tools.map(tool => (
              <div className="w-16 h-16">
                <img className="w-full h-auto" src={tool.image} alt={tool.title} title={tool.title} key={tool.title}/>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-8">
            {platforms.map(tool => (
              <div className="w-40">
                <img className="w-full h-auto" src={tool.image} alt={tool.title} title={tool.title} key={tool.title}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider/>

      <Socials/>

    </PageLayout>
  )
}