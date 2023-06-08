import { ArticleBig } from "./Articles"
import { Swiper, SwiperSlide } from "swiper/react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import { TEXT_FAV_ARTICLES } from "../../helpers/Texts"

const FavouriteArticles = function () {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <section className="my-8 bg-gray-200 px-6 pt-6 pb-12">
      <div className="mr-auto">
        <h2 className="mb-3 font-bold text-xl">{TEXT_FAV_ARTICLES.title}</h2>
        <p className="font-normal text-sm">{TEXT_FAV_ARTICLES.description}</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mt-10">
        {slides.map(item => (
          <SwiperSlide key={item} className="flex justify-center shadow-lg h-auto overflow-hidden">
            {<ArticleBig className="w-full !pr-0" />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FavouriteArticles
