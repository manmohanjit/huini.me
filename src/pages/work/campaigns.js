import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation as SwiperNavigation} from "swiper/modules"
import useIsClient from "@/hooks/useIsClient";
import PageLayout from "@/components/PageLayout";

const posts = [
  "/images/campaigns/posts/day1.jpg",
  "/images/campaigns/posts/day2.jpg",
  "/images/campaigns/posts/day3.jpg",
  "/images/campaigns/posts/day4.jpg",
  "/images/campaigns/posts/day5.jpg",
  "/images/campaigns/posts/day6.jpg",
  "/images/campaigns/posts/day7.jpg",
  "/images/campaigns/posts/day8.jpg",
  "/images/campaigns/posts/day9.jpg",
  "/images/campaigns/posts/day10.jpg",
  "/images/campaigns/posts/day11.jpg",
  "/images/campaigns/posts/day12.jpg",
]

export default function Index() {
  const isClient = useIsClient();

  return (
    <PageLayout title="campaigns">
      <div className="bg-[url(/images/campaigns/xmas-bg-lg.png)] bg-no-repeat bg-[length:100%] bg-[center_top]">
      <div className="py-4">
        <img src="/images/campaigns/ribbon.png" alt="Ribbon" className="w-36 h-auto mx-auto mb-8"/>

        <div className="container max-w-screen-md mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold text-green-900 mb-4">12 Days of Santa’s Journey</h2>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-800 text-white text-xs rounded-full">Contest period: <strong>December 2019</strong></span>
          </div>
          <p className="mb-6">A fun and interactive Christmas giveaway campaign!</p>
          <p>This was a 12-day, story-driven contest where each post connected to the next. Throughout the campaign, some posts were designed to prompt the audience to vote on Santa’s journey, with the most popular choice determining what happened next! In between these voting posts, there were random questions for participants to answer and win prizes.</p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto py-8 md:py-16">
        <Swiper
          modules={[Pagination, Autoplay, SwiperNavigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          loop={isClient}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {posts.map(post => (
            <SwiperSlide key={post}>
              <img className="w-full h-auto" src={post} alt={""}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center flex-wrap   gap-6">
          <h3 className="text-4xl font-bold">results:</h3>
          <div>
            <p>🌱 500+ new followers (organic)</p>
            <p>💌 11.29% of average engagement rate</p>
          </div>
        </div>
      </div>

      </div>

    </PageLayout>
  )
}