import Socials from "@/components/Socials";
import Billboard from "@/components/Brands/Billboard";
import SlideshowBillboard from "@/components/Brands/SlideshowBillboard";
import NumberedBillboard from "@/components/Brands/NumberedBillboard";
import PrimaryBillboard from "@/components/Brands/PrimaryBillboard";
import ImageGrid from "@/components/Brands/ImageGrid";
import PageLayout from "@/components/PageLayout";

export default function Index() {

  return (
    <PageLayout title="Magnum4D">
      <Billboard
        image="/images/work/magnum4d/magnum4d-logo.jpg"
        brand="Magnum4D"
        href="https://www.magnum4d.my/en/50andbeyond"
        color="#fcb900"
        title={(
          <>
            The OG of<br/>
            4D lottery in Malaysia
          </>
        )}
      >
        <p>(first to get that gov-approved license!)</p>
      </Billboard>

      <SlideshowBillboard
        backgroundColor="#ffefce"
        color="#fcb900"
        subtitle="The old content"
        title={(
          <>
            Just background noise,<br/>
            existing but not engaging
          </>
        )}
        images={[
          "/images/work/magnum4d/old-posts/magnum-old-1.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-2.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-3.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-4.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-5.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-6.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-7.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-8.jpg",
          "/images/work/magnum4d/old-posts/magnum-old-9.jpg",
        ]}
      >
        <ul className="list-disc ml-8 space-y-1">
          <li>no brand personality, just same-same generic content like the competitors’</li>
          <li>all ‘dream big’ talk, couldn’t relate bro 🥲</li>
          <li>no real connection with the audience, just posting because… had to post</li>
        </ul>
      </SlideshowBillboard>

      <PrimaryBillboard
        title={(
          <>
            Forget working hard, in this economy <strong>we👏🏼work👏🏼smart</strong>
          </>
        )}
        subtitle="New content strategy"
        image="/images/work/magnum4d/lottery-ticket.jpg"
        note="*Click on the visuals to view the original posts with captions. Engagement stats are sourced from the platform's insights."
      >
        <p>We’re living in a generation where money can buy happiness, so let’s keep it 100. 💁🏻‍♀️ We roast adulting,
          poke fun at our struggles in this wild economy… but here’s the tea: Magnum4D could be your fairy godmother
          making you a real-life Cinderella with a little luck.</p>
      </PrimaryBillboard>

      <NumberedBillboard
        color="#fcb900"
        image="/images/work/magnum4d/8.png"
        number="first."
        title="social media-friendly visuals"
        subtitle={(
          <>
            Memes people actually get, copy that’s quick to read and doesn’t bore them.<br/>
            Overall, it should be easy to digest!
          </>
        )}
      >

        <ImageGrid
          size="xl"
          items={[
            {
              image: "/images/work/magnum4d/new-posts/magnum-post2-768x768.jpg",
              engagement: [470, 105, 157],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid02LMDVQ4uMRRn4ZR3Ams6aA1EzqMeyfm1KcfQddrtJQDStCd78qpfbVD9JQ68uijHxl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post3-768x768.jpg",
              engagement: [319, 60, 77],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid09zzqYC94hC87oNUo4njzhvHjEsYh7EtGSpYABLGonefWwCrPrumZPvuK4QBpsEwWl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post5-768x768.jpg",
              engagement: [529, 10, 15],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid0bQtfn762DUMVNPqPrHoKk33s2YCEFw1nGYqk5ocNHxj4BxjPVD548ybwpf63y7uQl",
            }
          ]}
        />

      </NumberedBillboard>

      <NumberedBillboard
        color="#fcb900"
        image="/images/work/magnum4d/11.png"
        number="second."
        title="be relatable"
        subtitle={(
          <>
            Get on their wavelength! Hit them with real struggles to tap into<br/>
            those pain points. Because people love content that feels personal.
          </>
        )}
      >
        <ImageGrid
          size="xl"
          items={[
            {
              image: "/images/work/magnum4d/new-posts/magnum-post1-768x770.jpg",
              engagement: [477, 65, 109],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid0pDdSoDQADcS84RMAS9zyawwGDZroGxWNmoHNCgiBSbzYN617B44uXsx4SAZeohSAl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post4-768x768.jpg",
              engagement: [240, 13, 43],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid02QX7NDggk1GZS5MvJL6FcNfS6JdTdEYYZBenuCJ3UbTpfuGD3nkcDLM59ckVEQMkHl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post9-768x768.jpg",
              engagement: [1206, 138, 94],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid02NGw1v73PPapeqBYG5NfnCN5p9Y5Pt1qk3wjgoJdYfx7BJT4ghkfGuL3WGUsr1g5vl",
            }
          ]}
        />
      </NumberedBillboard>


      <NumberedBillboard
        color="#fcb900"
        image="/images/work/magnum4d/13.png"
        number="third."
        title="2-way conversation"
        subtitle={(
          <>
            Don’t just talk <i>at</i> them, talk <i>with</i> them! Get them to engage and give them<br/>
            a reason to comment, not just scroll by.
          </>
        )}
      >
        <ImageGrid
          size="xl"
          items={[
            {
              image: "/images/work/magnum4d/new-posts/magnum-post8-768x768.jpg",
              engagement: [925, 95, 94],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid02u8aCATGiy3DKwg8YE5UW5fwow2dQznUqDA5vro29SVoShetCBomuZoce322Su27gl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post10-768x768.jpg",
              engagement: [488, 16, 8],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid0kmMSPzF7p4sb6p6wNmDJSoLaYy4aEG9VUTVy4cinuUEhFDW9svCThh5wKAFCvtril",
            },
          ]}
        />
      </NumberedBillboard>

      <NumberedBillboard
        color="#fcb900"
        image="/images/work/magnum4d/2.png"
        number="fourth."
        title="trend-hopping"
        subtitle={(
          <>
            Another way to stay relevant! We want them to think we’re <i>so</i> in,<br/>
            but we don’t force it. They’ll be thinking, ‘Damn, that was smooth!’ 😏
          </>
        )}
      >
        <ImageGrid
          size="xl"
          items={[
            {
              image: "/images/work/magnum4d/new-posts/magnum-post7-768x768.jpg",
              engagement: [704, 48, 213],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid0kAifFkF8yULx1ZrjmWgTUoZopGnhRKHk37C2yWexyYdvXAivMj82XTngF1HAbTNAl",
            },
            {
              image: "/images/work/magnum4d/new-posts/magnum-post11-768x768.jpg",
              engagement: [103, 4, 7],
              href: "https://www.facebook.com/Magnum4D/posts/pfbid02w5iBqJRLCbDAkn9AdtWPXM95QYLsh35WTQZ6ovHMiuvJhhymvyUFX8NxMjrojMLFl",
            },
          ]}
        />
      </NumberedBillboard>

      <div className="container max-w-screen-lg mx-auto">
        <div className="lg:rounded-xl" style={{backgroundColor: "#ffefce"}}>

          <div className="flex flex-wrap px-14 md:px-24 gap-4 sm:gap-8">
            <div className="order-1 md:order-0 w-full sm:w-2/6 self-end">
              <img src="/images/work/magnum4d/magnum-new-grid-1-768x974.png" className="max-w-[300px] md:max-w-none mx-auto w-full h-auto sm:mt-16"/>
            </div>
            <div className="order-0 md:order-1 flex-1 pt-12 sm:pb-12 self-center">
              <h3 className="text-4xl font-bold mb-4" style={{color: "#fcb900"}}>
                Seeing Yellow?<br/>
                Yup, it’s Magnum4D
              </h3>
              <p>Because that’s our statement. We want to be the first thing that pops into your head when you think
                lottery – top of mind! The second you see that pop of yellow, you know it’s us (no logo, no profile pic
                needed).</p>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <h3 className="text-4xl font-bold mb-8 text-center">
          Some receipts that prove our<br className="hidden md:block" />
          content hits right!
        </h3>
        <img src="/images/work/magnum4d/reciepts.png" alt="Reciepts" className="max-w-screen-md mx-auto w-full h-auto" />
      </div>

      <Socials/>

    </PageLayout>
  )
}