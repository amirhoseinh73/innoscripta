import { ArticleInterface } from "../../@types/global"
import { IMAGES } from "../../helpers/Images"

export const ArticleBig = function (props: ArticleInterface) {
  return (
    <article className={`w-full md:w-1/2 mb-2 md:mb-0 md:pr-2 ${props.className ?? ""}`}>
      <div className="shadow-lg p-4 rounded-lg h-full bg-gray-50">
        <img src={IMAGES.logo} alt="article" className="w-full h-64 rounded-2xl mb-4 shadow-2xl" />
        <time className="text-right mb-4 block">July 06, 2023</time>
        <h4 className="font-semibold text-lg mb-4">TV: Is it a good thing?</h4>
        <p className="font-normal text-base">
          Television is one of the most important inventions of the century. Almost everyone owns a
          TV set at home today. Be it educational or entertainment, life would be so boring without
          one nowadays...
        </p>
      </div>
    </article>
  )
}

export const ArticleSmall = function (props: ArticleInterface) {
  return (
    <section className={`flex flex-row items-center ${props.className ?? ""}`}>
      <img
        src={IMAGES.logo}
        alt="logo"
        className="w-28 h-28 rounded-2xl mr-4 shadow-sm border border-gray-200 p-2"
      />
      <div className="w-full">
        <time className="mb-2 block">July 06, 2023</time>
        <h4 className="font-semibold text-lg mb-4">TV: Is it a good thing?</h4>
      </div>
    </section>
  )
}
