import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import useIsClient from "@/hooks/useIsClient";

const SlideshowBillboard = ({backgroundColor, color, subtitle, title, images, children}) => {
  const isClient = useIsClient();

  return (
    <div className="py-16" style={{backgroundColor}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
          <div className="w-full md:w-1/2">

            <div className="max-w-[400px] mx-auto">
              <Swiper
                key={isClient ? title+"-loop" : title+"-no-loop"}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 1500,
                  // disableOnInteraction: false,
                  // pauseOnMouseEnter: false,
                }}
                slidesPerView={1}
                loop={isClient}
                navigation={true}
                autoHeight={true}
                pagination={{
                  dynamicBullets: true,
                }}
              >
                {images.map(image => (
                  <SwiperSlide key={image}>
                    <div className="aspect-square">
                      <img className="w-full h-auto" src={image} alt={""}/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
          <div className="w-full md:w-1/2">
            <h5 className="uppercase tracking-tight text-gray-500 text-base font-light">{subtitle}</h5>
            <h3 className="text-4xl font-bold" style={{color}}>{title}</h3>

            <div className="mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideshowBillboard;