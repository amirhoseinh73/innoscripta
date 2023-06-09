import { ArticleBig } from "./Articles"
import { Swiper, SwiperSlide } from "swiper/react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import { TEXT_FAV_ARTICLES } from "../../helpers/Texts"
import { useSelector } from "react-redux"
import { ReduxReducers } from "../../@types/redux"

const FavouriteArticles = function () {
  const getArticleData = useSelector((state: ReduxReducers) => state.articleNYT)

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
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mt-10">
        {getArticleData.map((item, idx) => (
          <SwiperSlide key={idx} className="flex justify-center shadow-lg h-auto overflow-hidden">
            {
              <ArticleBig
                content={item.lead_paragraph}
                date={item.pub_date}
                title={item.abstract}
                className="!w-full !pr-0"
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FavouriteArticles
