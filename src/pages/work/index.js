import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import Divider from "@/components/Divider";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function Index() {
  return (
    <PageLayout title="work">
      <div className="py-16">
        <Heading className="mb-6" title="a lil’ peek into my creative playground 👇🏼" subtitle="clickity click to check it out!"/>
      </div>

      <div className="container max-w-screen-md mx-auto px-4">
        <div className="flex flex-row  flex-wrap justify-center items-center gap-8">
          <Link href="/work/social-media-strategy" className="group">
            <div className="flex items-center">
              <img alt="" src="/images/work/phone.png" className="w-40 h-auto"/>
              <div>
                <div className="mb-1">
            <span
              className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-pink-200 text-black group-hover:bg-pink-300">1️⃣</span>
                </div>
                <div className="mb-1">
          <span
            className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-stone-100 text-black group-hover:bg-stone-200">social media</span>
                </div>
                <div>
            <span
              className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-stone-100 text-black group-hover:bg-stone-200">strategy</span>
                </div>

              </div>
            </div>
          </Link>

          <Link href="/work/visual-content" className="md:ml-auto relative group">
            <img alt="" src="/images/work/camera.png" className="w-40 h-auto relative top-3 -mt-3 left-4"/>
            <span
              className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-pink-200 text-black group-hover:bg-pink-300">2️⃣</span>
            <span
              className="ml-1 inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-stone-100 text-black group-hover:bg-stone-200">visual content</span>
          </Link>


          <Link href="/work/campaigns" className="relative pr-6 group">
            <img alt="" src="/images/work/speaker.png"
                 className="w-48 h-auto relative top-[4.25rem] -mt-[4.25rem] left-6 z-0"/>

            <div className="mb-1 relative z-10">
            <span
              className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-pink-200 text-black group-hover:bg-pink-300">3️⃣</span>
            </div>
            <div className="relative z-10">
          <span
            className="inline-block py-4 px-6 text-lg rounded-3xl border border-black bg-stone-100 text-black group-hover:bg-stone-200">campaigns</span>
            </div>
          </Link>

        </div>

      </div>
    </PageLayout>
  )
}