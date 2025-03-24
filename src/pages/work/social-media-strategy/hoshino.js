import Socials from "@/components/Socials";
import Billboard from "@/components/Brands/Billboard";
import NumberedBillboard from "@/components/Brands/NumberedBillboard";
import SlideshowBillboard from "@/components/Brands/SlideshowBillboard";
import PrimaryBillboard from "@/components/Brands/PrimaryBillboard";
import VideoGrid from "@/components/Brands/VideoGrid";
import ImageGrid from "@/components/Brands/ImageGrid";
import PageLayout from "@/components/PageLayout";


export default function Index() {
  return (
    <PageLayout title="Hoshino Coffee">
      <Billboard
        image="/images/work/hoshino/hoshino-logo.png"
        brand="Hoshino Coffee"
        href="https://www.hoshinocoffee.com.my/about-us"
        color="#c98643"
        title={(
          <>
            A fusion japanese restaurant
            with an aesthetic vibe
          </>
        )}
      >
        <p>Serving food that’s almost too pretty to eat 🥺 and famous for its hand-drip coffee ☕️</p>
      </Billboard>


      <SlideshowBillboard
        backgroundColor="#fceace"
        color="#855736"
        subtitle="The old content"
        title={"Copy-pasting a menu isn’t social content, it’s just… a menu"}
        images={[
          "/images/work/hoshino/posts/hoshino-old-2.jpg",
          "/images/work/hoshino/posts/hoshino-old-1.jpg",
          "/images/work/hoshino/posts/hoshino-old-3.jpg",
          "/images/work/hoshino/posts/hoshino-old-4.jpg",
          "/images/work/hoshino/posts/hoshino-old-5.jpg",
          "/images/work/hoshino/posts/hoshino-old-6.jpg",
          "/images/work/hoshino/posts/hoshino-old-7.jpg",
          "/images/work/hoshino/posts/hoshino-old-8.jpg",
          "/images/work/hoshino/posts/hoshino-old-9.jpg",
        ]}
      >
        <ul className="list-disc ml-8 space-y-1">
          <li>feed was giving… karaoke menu look</li>
          <li>lacked the Japanese-Western vibe (didn’t reflect their identity)</li>
          <li>it was all just 🔁 promotion, 🔁 food menu, 🔁 greetings ON REPEAT</li>
        </ul>
      </SlideshowBillboard>

      <PrimaryBillboard
        title={(
          <>
            Bringing a ✨personality✨ to the brand for that <strong>glow-up</strong>
          </>
        )}
        subtitle="New content strategy"
        image="/images/work/hoshino/hoshino-food.jpg"
        note="*Click on the visuals to view the original posts with captions. Engagement stats are sourced from the platform's insights."
      >
        <p className="mb-4"><strong>Goal:</strong> Bringing the menu to life!</p>

        <p>The aim is to sell the entire Hoshino Coffee lifestyle. From romanticizing the joy of great food, the cozy atmosphere, to the impeccable service. Just like that one friend of yours who’s always posts cute café pics, shares their morning coffee runs, and knows the latest social trends. That’s the new vibe we’re going for!</p>
      </PrimaryBillboard>


      <NumberedBillboard
        color="#855736"
        image="/images/work/hoshino/coffee.png"
        number="first."
        title="visual makeover"
        subtitle="A fresh feed full of make-you-hungry food shots and interiors that highlight Hoshino's unique Japanese x Western vibe. Adding Hoshino’s brown tones for brand recall since Malaysians are still getting familiar with the brand."
      >
        <VideoGrid
          items={[
            {
              key: 1,
              video: "https://player.vimeo.com/video/1067012284?h=13a452ad86&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 2,
              video: "https://player.vimeo.com/video/1067012079?h=fce7073849&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 3,
              video: "https://player.vimeo.com/video/1067011956?h=62bf5d89f7&amp;dnt=1&amp;app_id=122963",
            }
          ]}
        />
      </NumberedBillboard>


      <NumberedBillboard
        color="#855736"
        image="/images/work/hoshino/fork.png"
        number="second."
        title="lifestyle"
        subtitle="Hoshino’s got that aesthetic vibe (food + interiors). So, we use it to capture the atmosphere, the moments, and the whole lifestyle that make the Hoshino Coffee experience. 10/10 Insta-worthy!"
      >
        <VideoGrid
          className="mb-8"
          items={[
            {
              key: 1,
              video: "https://player.vimeo.com/video/1067012160?h=9a308c2712&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 2,
              video: "https://player.vimeo.com/video/1067012111?h=67cd44e39c&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 3,
              video: "https://player.vimeo.com/video/1067011987?h=10730b76f7&amp;dnt=1&amp;app_id=122963",
            },
          ]}
        />
        <ImageGrid
          items={[
            {image: "/images/work/hoshino/new-posts/post-7.jpg"},
            {image: "/images/work/hoshino/new-posts/post-8.jpg"},
          ]}
        />
      </NumberedBillboard>


      <NumberedBillboard
        color="#855736"
        image="/images/work/hoshino/matcha.jpg"
        number="third."
        title="on top of the trends"
        subtitle="Targeting Gen Z (the brief from the client) means staying on top of trends for that brand exposure! Our reels here are pulling in way more reach and engagement than regular posts."
      >
        <VideoGrid
          className="mb-8"
          items={[
            {
              key: 1,
              video: "https://player.vimeo.com/video/1067012235?h=058dcbce63&amp;dnt=1&amp;app_id=122963",
            },
            {
              key: 2,
              video: "https://player.vimeo.com/video/1067012044?h=973276424f&amp;dnt=1&amp;app_id=122963",
            },
          ]}
        />
      </NumberedBillboard>

      <NumberedBillboard
        color="#855736"
        image="/images/work/hoshino/pancake.png"
        number="fourth."
        title="scroll-stopping campaigns"
        subtitle="Hard sell campaign? Not our style. We make them fun and trendy because quality > quality. 💅🏼"
      >
        <VideoGrid
          className="mb-8"
          items={[
            {
              key: 1,
              video: "https://player.vimeo.com/video/1067012201?h=d4e39bbd14&amp;dnt=1&amp;app_id=122963",
              text: (
                <>Using 'tea' as the gossip material in Gen Z slang as a hook to promote our <strong>Buy 1 Free 1 Tea campaign</strong></>
              )
            },
            {
              key: 2,
              video: "https://player.vimeo.com/video/1067012012?h=5f80ba8d8f&amp;dnt=1&amp;app_id=122963",
              text: (
                <>Featuring 3 different value meals in 3 frames, each for a different time zone to promote <strong>All-Day Value Meal</strong></>
              )
            },
          ]}
        /></NumberedBillboard>


    </PageLayout>
  )
}