import Heading from "@/components/Heading";
import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import PageLayout from "@/components/PageLayout";
import MasonryLayout from "@/components/MasonryLayout";


const socialPhotoshootItems = Array(8).fill("").map((_, i) => ({image: `/images/work/social-photoshoot/${i + 1}.jpg`}))
const merchandisePhotoshootItems = Array(7).fill("").map((_, i) => ({image: `/images/work/merch-photoshoot/${i + 1}.jpg`}))
const carPhotoshootItems = Array(17).fill("").map((_, i) => ({image: `/images/work/car-photoshoot/${i + 1}.jpg`}))
const socialVideoshootItems = [
  "hoshino-me-time-spot.mp4",
  "hoshino-solo-date.mp4",
  "shopping-center.mp4",
  "sk-no-reason.mp4",
  "makeup-demure.mp4",
  "hoshino-a-lot-on-my-plate.mp4",
  "IPC-Workpod.mp4",
  "hoshino-procaffeinating.mp4",
  "dermatix.mp4",
  "sk-slurping-noodle.mp4",
].map((i) => ({video: `/images/work/social-videoshoot/${i}`}))

export default function Index() {

  return (
    <PageLayout title="visual content">
      <div className="py-16">
        <Heading className="mb-6" title="visual content"/>

        <div className="container max-w-[700px] mx-auto px-4 text-center">
          <p className="mb-4">It’s all about the first 3 seconds in this fast-scrolling world of social media. That's why I love putting extra effort into making scroll-stopping visuals. Take a look at my past projects below!</p>
        </div>
      </div>

      <MasonryLayout title="social photoshoot" items={socialPhotoshootItems}/>

      <Divider className="max-w-[300px]  my-16"/>

      <MasonryLayout title="social videoshoot" items={socialVideoshootItems} reverse={true}/>

      <Divider className="max-w-[300px]  my-16"/>

      <MasonryLayout title="merchandise photoshoot" items={merchandisePhotoshootItems}/>

      <Divider className="max-w-[300px]  my-16"/>

      <MasonryLayout title="car photoshoot" items={carPhotoshootItems} reverse={true}/>

      <Divider className="mt-16"/>

      <Socials/>

    </PageLayout>
  )
}