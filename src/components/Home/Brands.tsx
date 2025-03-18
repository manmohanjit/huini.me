import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import useIsClient from "@/hooks/useIsClient";

const brands = [
  { title: "Akzonobel", image: "/images/home/brands/akzonobel.png", link: "https://www.akzonobel.com/en" },
  { title: "Caltex", image: "/images/home/brands/caltex.png", link: "https://www.caltex.com/my/about-us.html" },
  { title: "Cherry", image: "/images/home/brands/cherry.png", link: "https://www.chery.my/about-us" },
  { title: "Continental", image: "/images/home/brands/continental.png", link: "https://www.continental-tires.com/my/en/" },
  { title: "Glo", image: "/images/home/brands/glo.png", link: "https://www.bat.com/brands-and-innovation/glo" },
  { title: "Goodrich", image: "/images/home/brands/goodrich.png", link: "https://www.bfgoodrich.com.my/" },
  { title: "HLeBroking", image: "/images/home/brands/hlebroking.png", link: "https://www.hlebroking.com/v3/aboutus.aspx" },
  { title: "Hoshino", image: "/images/home/brands/hoshino.png", link: "https://www.hoshinocoffee.com.my/about-us" },
  { title: "IPC", image: "/images/home/brands/ipc.png", link: "https://www.ipc.com.my/about-ipc/our-company/" },
  { title: "Magnum4D", image: "/images/home/brands/magnum.png", link: "https://www.magnum4d.my/en/" },
  { title: "Mercedes Benz", image: "/images/home/brands/mercedes-benz.png", link: "https://www.mercedes-benz.com.my/" },
  { title: "Michelin", image: "/images/home/brands/michelin.png", link: "https://www.michelin.com.my/" },
  { title: "Revlon", image: "/images/home/brands/revlon.png", link: "https://www.revlon.com/" },
  { title: "Smart", image: "/images/home/brands/smart.png", link: "https://my.smart.com/company/" },
  { title: "Sushi King", image: "/images/home/brands/sushi-king.png", link: "https://sushi-king.com/company/" },
  { title: "Tyreplus", image: "/images/home/brands/tyreplus.png", link: "https://tyreplus.com.my/about" },
]

export default function Brands() {
  const isClient = useIsClient();

  return (
    <div className="max-w-[1200px] mx-auto">
      <Swiper
        key={isClient ? "brands-loop" : "brands-no-loop"}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2}
        spaceBetween={50}
        loop={isClient}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {brands.map(brand => (
          <SwiperSlide key={brand.title}>
            <a className="aspect-square flex items-center p-2 select-none" href={brand.link} target="_blank">
              <img className="w-full h-auto" src={brand.image} alt={brand.title}/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}