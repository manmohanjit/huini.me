import Image from "next/image";
import Heading from "@/components/Heading";
import Quote from "@/components/Home/Quote";
import Brands from "@/components/Home/Brands";
import Skills from "@/components/Home/Skills";
import Socials from "@/components/Socials";
import Divider from "@/components/Divider";
import Navigation from "@/components/Navigation";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import useIsClient from "@/hooks/useIsClient";
import PageLayout from "@/components/PageLayout";


export default function Home() {
  const isClient = useIsClient();

  return (
    <PageLayout title={null}>
      <div className="md:min-h-screen">

        <div className="py-16 md:py-4">
          <div className="container mx-auto px-4 mb-4 text-center">
            <h2 className="block text-5xl md:text-[5rem] leading-[1.1] font-bold text-rose-300">me starter pack</h2>
            <p className="block text-lg md:text-xl text-gray-700">3 quick facts about me</p>
          </div>

          <div className="container max-w-[1000px] mx-auto px-4">
            <img className="select-none block w-full h-auto" src="/images/home/cover.png"
                 alt="Huini"/>
          </div>
        </div>
      </div>

      <div className="py-0">

        <Skills/>

      </div>

      <div className="py-8 md:py-16 my-24 md:my-52">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <h4 className="text-[2.5rem] md:text-[4rem] font-extrabold">
              i’m also good at
            </h4>

            <div>
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                effect="creative"
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                loop={isClient}
                className="h-[4rem] md:h-[5rem]"
              >
                {[
                  ["#66d6d1", "📮 crm & email marketing"],
                  ["#FF600D", "🖥️ website optimization"],
                  ["#00AF50", "🖌️ design"],
                  ["#F5CEC7", "✍️ content marketing"],
                  ["#CC405E", "📈 data analytics"],
                  ["#3140DF", "🤳 social media marketing"],
                  ["#E9CE2C", "🔎 performance marketing"],
                ].map(([background, text]) => (
                  <SwiperSlide key={background}>
                    <div className="text-center md:text-left">
                      <span style={{background}}
                            className="inline-block text-[1rem] md:text-[2rem] text-white px-8 py-4 rounded-full">{text}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <Quote/>

      <div className="py-8 md:py-16 mt-24 md:mt-52">
        <Heading className="mb-6" title="brands i’ve worked with"
                 subtitle="give me beauty, food, automotive, or even lottery – I’m always up for the next thing. 💁🏻‍♀️"/>

        <Brands/>
      </div>

      <Divider/>

      <Socials/>


    </PageLayout>
  );
}
