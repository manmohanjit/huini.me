import Link from 'next/link';

export default function Skills() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 lg:px-0 mb-4">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative group transition-shadow shadow hover:shadow-xl bg-[#f1d0c4] rounded-2xl  flex flex-col justify-between">
          <div className="px-4 py-4 lg:px-8 lg:py-12">
            <h4 className="text-white text-3xl lg:text-5xl font-extrabold mb-6 leading-none">Social Media
              Strategy</h4>
            <p className="text-xs lg:text-base text-black tracking-wide group-hover:underline underline-offset-4">Read more &rarr;</p>
          </div>

          <img src="/images/home/skills/social-media-strategy.png" alt="" className="self-end w-4/12 lg:w-8/12 rounded-br-2xl"/>
          <Link href="/work/social-media-strategy" className="absolute top-0 left-0 w-full h-full" />
        </div>

        <div className="relative group transition-shadow shadow hover:shadow-xl bg-[#d8d0bb] rounded-2xl flex flex-col justify-between">
          <div className="px-4 py-4 lg:px-8 lg:py-12">
            <h4 className="text-white text-3xl lg:text-5xl font-extrabold mb-6 leading-none">Visual Content</h4>
            <p className="text-xs lg:text-base text-black tracking-wide group-hover:underline underline-offset-4">Read more &rarr;</p>
          </div>
          <img src="/images/home/skills/visual-content.png" alt="" className="self-end w-4/12 lg:w-8/12 rounded-br-2xl"/>
          <Link href="/work/visual-content" className="absolute top-0 left-0 w-full h-full" />
        </div>

        <div className="relative group transition-shadow shadow hover:shadow-xl bg-[#eba960] rounded-2xl  flex flex-col justify-between">
          <div className="px-4 py-4 lg:px-8 lg:py-12">
            <h4 className="text-white text-3xl lg:text-5xl font-extrabold mb-6 leading-none">Campaigns</h4>
            <p className="text-xs lg:text-base text-black tracking-wide group-hover:underline underline-offset-4">Read more &rarr;</p>

          </div>
          <img src="/images/home/skills/campaign.png" alt="" className="self-end w-4/12 lg:w-8/12 rounded-br-2xl"/>
          <Link href="/work/campaigns" className="absolute top-0 left-0 w-full h-full" />
        </div>

      </div>


    </div>
  )
}