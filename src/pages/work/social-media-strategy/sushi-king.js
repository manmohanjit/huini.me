import Socials from "@/components/Socials";
import Billboard from "@/components/Brands/Billboard";
import SlideshowBillboard from "@/components/Brands/SlideshowBillboard";
import NumberedBillboard from "@/components/Brands/NumberedBillboard";
import PrimaryBillboard from "@/components/Brands/PrimaryBillboard";
import ImageGrid from "@/components/Brands/ImageGrid";
import VideoGrid from "@/components/Brands/VideoGrid";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import useIsClient from "@/hooks/useIsClient";
import PageLayout from "@/components/PageLayout";

export default function Index() {
  const isClient = useIsClient();

  return (
    <PageLayout title="Sushi King">
      <Billboard
        image="/images/work/sushi-king/sk-logo.png"
        brand="Sushi King"
        href="https://sushi-king.com/company/"
        color="#cf2e2e"
        title={(
          <>
            First to introduce<br />
            sushi on kaiten in M’sia, 1995
          </>
        )}
      >
        <p>Halal and available nationwide so takde hal lah if you’re out of the city<br/>
          but still craving for some japanese 👌🏼</p>
      </Billboard>

      <SlideshowBillboard
        backgroundColor="#f8eeee"
        color="#cf2e2e"
        subtitle="The old content"
        title={(
          <>
            Sushi was fresh,<br/>
            but the content wasn’t
          </>
        )}
        images={[
          "/images/work/sushi-king/old-posts/old-post-1.jpg",
          "/images/work/sushi-king/old-posts/old-post-2.jpg",
          "/images/work/sushi-king/old-posts/old-post-3.jpg",
          "/images/work/sushi-king/old-posts/old-post-4.jpg",
          "/images/work/sushi-king/old-posts/old-post-5.jpg",
          "/images/work/sushi-king/old-posts/old-post-6.jpg",
          "/images/work/sushi-king/old-posts/old-post-7.jpg",
          "/images/work/sushi-king/old-posts/old-post-8.jpg",
          "/images/work/sushi-king/old-posts/old-post-9.jpg",
        ]}
      >
        <ul className="list-disc ml-8 space-y-1">
          <li>bland copy, same-old food pics straight from the menu</li>
          <li>copy-pasted content across platforms</li>
          <li>one-way convo, easy to scroll past</li>
        </ul>
      </SlideshowBillboard>

      <PrimaryBillboard
        title={(
          <>
            Let’s serve up that <strong>Sushi King’s flavour</strong> in the new content!
          </>
        )}
        subtitle="New content strategy"
        image="/images/work/sushi-king/cut-sushi.jpg"
        note="*Click on the visuals to view the original posts with captions. Engagement stats are sourced from the platform's insights."
      >
        <p>Just like the name suggests, Sushi King' is the legend of Japanese food in Malaysia—one of the first halal ones 🙌🏼. So, we’re cooking up content with a tasty mix of Japanese x Malaysian flavours: talking about Japanese food in Manglish with a side of local humour for a chill vibe. And also customising content for every platform with a channel strategy.</p>
      </PrimaryBillboard>

      <NumberedBillboard
        color="#cf2e2e"
        image="/images/work/sushi-king/sushi.png"
        number="first."
        title="facebook"
        subtitle="Ditching the usual promo stuff, we bring fun, light-hearted content that our audience can resonate with to cut through the noise! Because people scroll to laugh, not to get sold to. 👀"
      >
        <ImageGrid
          items={[
            {
              image: "/images/work/sushi-king/new-posts/sk-post-1.jpg",
              engagement: [262, 222, 104],
              href: "https://www.facebook.com/sushikingasia/posts/pfbid036MF8JY9M9p2hFXKR34bnAAx5QZ9jcVVAvJ2RemWjEwa2QPrRg4wkihRFpEA2zAd6l",
            },
            {
              image: "/images/work/sushi-king/new-posts/sk-post-2.jpg",
              engagement: [51, 8, 3],
              href: "https://www.facebook.com/sushikingasia/posts/pfbid0fhgiJ5Ck4xNCQPUuTAu3FfX3q9aaXmfhMAnSMm3cUiupLyUPArzz3fEEkzLXP85ol",
            },
            {
              image: "/images/work/sushi-king/new-posts/sk-post-3.jpg",
              engagement: [49, 28, 4],
              href: "https://www.facebook.com/sushikingasia/posts/pfbid02FTbynGTA34PHNHDEZvrpde8w37Ym58sgSbJC6bs4SpfkD2onDj5Adsumvq3k4GSLl",
            },
            {
              image: "/images/work/sushi-king/new-posts/sk-post-4.jpg",
              engagement: [96, 23, 16],
              href: "https://www.facebook.com/sushikingasia/posts/pfbid03239wRNMrYXrZNcDMVSpf7xKFX2qBViJTGBCWvBK2upQDnbYseEGoUq8sAcgAmEXMl",
            }
          ]}
        />

        <div className="mt-16 grid grid-cols-3 gap-4">
          <div className="order-2 md:order-1 col-span-3 md:col-span-1 place-content-center">
            <p className="mb-4"><strong>Fun fact 🤓:</strong> 44% of young Europeans from Generation Z use social networks to learn new things. (Source: <a className="text-red-500 hover:text-red-700 underline" href="https://www.freemalaysiatoday.com/category/leisure/2023/10/15/why-are-young-people-turning-to-social-media-to-learn-new-things/" target="_blank">Free Malaysia Today</a>)</p>
            <p>So, we mix in some fun Japanese food and culture facts to keep it interesting, and help audience get to know the brand better!</p>
          </div>
          <div className="order-1 md:order-2 col-span-3 md:col-span-2">
            <a href="" target="_blank">
              <img className="w-full h-auto" src="/images/work/sushi-king/types-of-sushi.png" alt="Types of sushi" />
            </a>
          </div>
        </div>

      </NumberedBillboard>

      <NumberedBillboard
        color="#cf2e2e"
        image="/images/work/sushi-king/noodle.png"
        number="second."
        title="instagram"
        subtitle={(
          <>
            <strong className="text-lg">Warning ⚠️</strong><br/>Scrolling our feed may cause extreme hunger! It’s not
            just visually delicious real-life food shots, we also showcase the full Sushi King lifestyle that’ll
            make you want to be a part of it.
          </>
        )}
      >

        <ImageGrid
          size="xl"
          items={[
            {
              image: "/images/work/sushi-king/new-posts/sk-post-5.jpg",
              engagement: [38, 0, 3],
              href: "https://www.instagram.com/p/C4xT4ZChqXm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            },
            {
              image: "/images/work/sushi-king/new-posts/sk-post-6.jpg",
              engagement: [68, 0, 5],
              href: "https://www.instagram.com/p/C7Qa2i-sQzI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            },
            {
              image: "/images/work/sushi-king/new-posts/sk-post-7.jpg",
              engagement: [236, 10, 14],
              href: "https://www.instagram.com/p/C8ZK8BrJplE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            },
          ]}
        />

        <a
          href="https://www.facebook.com/sushikingasia/posts/pfbid0yBvGy1nbzo6QMg24nvNLNz6tenwm8j3mQbfuTEdGN3jfVaDJPsQcnKz4TNdyy4QDl">
          <img src="/images/work/sushi-king/how-to-sushi.png" alt="How to eat Sushi"
               className="mt-16 w-full h-auto"/>
        </a>

        <div className="mt-16 grid grid-cols-5 gap-4 max-w-screen-lg mx-auto">
          <div className="col-span-5 md:col-span-3 place-content-center">
            <p className="mb-4"><strong>the brief:</strong> please help to promote our “sushi tower challenge” with this picture to attract more people to join the challenge</p>

            <div className="mb-4">
              <img className="max-w-[200px] w-full h-auto" src="/images/work/sushi-king/contestant-768x513.jpg" alt="Contestant" />
            </div>

            <p className="mb-4"><strong>the thought process:</strong> ok let’s make it fun 🧠</p>

            <p><strong>the result: <span className="hidden md:inline"> 👉🏼</span><span className="inline md:hidden">👇</span></strong></p>
          </div>
          <div className="col-span-5 md:col-span-2">
            <Swiper
              key={isClient ? "sk-loop" : "sk-no-loop"}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={1}
              loop={isClient}
              navigation={true}
              autoHeight={true}
              pagination={{
                dynamicBullets: true,
              }}
            >
              {["sk post 5.1.jpg", "sk post 5.2.jpg", "sk post 5.3.jpg", "sk post 5.4.jpg"].map(image => (
                <SwiperSlide key={image}>
                  <div className="aspect-square">
                    <img className="w-full h-auto" src={`/images/work/sushi-king/new-posts/${image}`} alt={""}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </NumberedBillboard>


      <NumberedBillboard
        color="#cf2e2e"
        image="/images/work/sushi-king/chopsticks.png"
        number="third."
        title="tiktok & ig reel"
        subtitle="No room for boring ads here! 🙅🏻‍♀️ Just real, down-to-earth content that’ll make you laugh or teach you something new."
      >
        <VideoGrid
          size="xl"
          items={[
            {
              key: 1,
              video: "https://player.vimeo.com/video/1056444303?h=7278ea9169&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 2,
              video: "https://player.vimeo.com/video/1056446411?h=df11285361&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 3,
              video: "https://player.vimeo.com/video/1056446870?h=ec4f86526a&amp;dnt=1&amp;app_id=122963",
            },

          ]}
        />
      </NumberedBillboard>
      <Socials/>

    </PageLayout>
  )
}