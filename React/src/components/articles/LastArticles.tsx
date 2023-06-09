import { TEXT_ARTICLES } from "../../helpers/Texts"
import { BtnPrimary } from "../Buttons"
import { ArticleBig, ArticleSmall } from "./Articles"

const LastArticles = function () {
  return (
    <section className="w-full my-20">
      <div className="flex flex-row items-center flex-wrap">
        <div className="mr-auto">
          <h2 className="mb-3 font-bold text-xl">{TEXT_ARTICLES.title}</h2>
          <p className="font-normal text-sm">{TEXT_ARTICLES.description}</p>
        </div>
        <BtnPrimary children="See all articles" className="text-sm" isOutline />
      </div>
      <div className="flex flex-row flex-wrap mt-8">
        <ArticleBig />
        <article className="w-full md:w-1/2 mb-2 md:mb-0 md:pl-2">
          <div className="shadow-lg p-4 flex flex-col rounded-lg justify-between h-full bg-gray-50">
            <ArticleSmall />
            <ArticleSmall />
            <ArticleSmall />
          </div>
        </article>
      </div>
    </section>
  )
}

export default LastArticles
