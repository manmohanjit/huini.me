import Heading from "@/components/Heading";
import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import PageLayout from "@/components/PageLayout";
import MasonryLayout from "@/components/MasonryLayout";


const socialPhotoshootItems = Array(8).fill("").map((_, i) => ({image: `/images/work/social-photoshoot/${i + 1}.jpg`}))
const merchandisePhotoshootItems = Array(7).fill("").map((_, i) => ({image: `/images/work/merch-photoshoot/${i + 1}.jpg`}))
const carPhotoshootItems = Array(17).fill("").map((_, i) => ({image: `/images/work/car-photoshoot/${i + 1}.jpg`}))
const socialVideoshootItems = [
  {video: "https://player.vimeo.com/video/1067012677?h=cc15573204&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012721?h=8ecd48f09d&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012111?h=67cd44e39c&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012792?h=6bc252ae99&amp;dnt=1&amp;app_id=122963", aspectRatio: "aspect-square"},
  {video: "https://player.vimeo.com/video/1067012825?h=86d5ef0f0b&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012854?h=19dae07cdb&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012887?h=f7403d683b&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012943?h=78575a0937&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067012988?h=84ea366f07&amp;dnt=1&amp;app_id=122963"},
  {video: "https://player.vimeo.com/video/1067013028?h=33897f0343&amp;dnt=1&amp;app_id=122963", aspectRatio: "aspect-square"},
];

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