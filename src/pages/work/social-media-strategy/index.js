import Heading from "@/components/Heading";
import Divider from "@/components/Divider";
import Socials from "@/components/Socials";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function Index() {
  return (
    <PageLayout title="social media strategy">
      <div className="py-16">
        <Heading className="mb-6" title="social media strategy"/>

        <div className="container max-w-[700px] mx-auto px-4 text-center">
          <p className="mb-4">as a consumer myself, i love content that’s creative and actually connects with me. i truly believe social media is a powerful tool to build relationships with consumers.</p>
          <p className="mb-4">there’s no one-size-fits-all plan, but the trick is putting myself in the consumer’s shoes and asking: “what would I want to see?”</p>
          <p className="mb-4">👇🏼 check out the different strategies I’ve used for different brands!</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12">
        <div>
          <Link href="/work/social-media-strategy/magnum4d" className="block text-center group">
            <img src="/images/work/logos/magnum.png" className="rounded-full w-48 shadow-lg transition-shadow group-hover:shadow-xl mb-4"/>

            <span className="inline-block font-bold transition-shadow group-hover:shadow-xl bg-[#fbca44] text-black border-[3px] border-black rounded-full px-4 py-3">Magnum4D</span>
          </Link>
        </div>
        <div>
          <Link href="/work/social-media-strategy/sushi-king" className="block text-center group">
            <img src="/images/work/logos/sushi-king.png" className="rounded-full w-48 shadow-lg transition-shadow group-hover:shadow-xl mb-4"/>

            <span className="inline-block font-bold transition-shadow group-hover:shadow-xl bg-[#e50d0d] text-white border-[3px] border-black rounded-full px-4 py-3">Sushi King</span>
          </Link>
        </div>
        <div>
          <Link href="/work/social-media-strategy/hoshino" className="block text-center group">
            <img src="/images/work/logos/hoshino-coffee.jpg" className="rounded-full w-48 shadow-lg transition-shadow group-hover:shadow-xl mb-4"/>

            <span className="inline-block font-bold transition-shadow group-hover:shadow-xl bg-[#613021] text-[#dcb788] border-[3px] border-[#dcb788] rounded-full px-4 py-3">Hoshino Coffee</span>
          </Link>
        </div>
      </div>

      <Divider className="mt-16"/>

      <Socials/>

    </PageLayout>
  )
}