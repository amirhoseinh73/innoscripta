import { IMAGES } from "../helper"
import { BtnPrimary } from "./Buttons"

const LastArticles = function () {
  return (
    <section className="w-full my-20">
      <div className="flex flex-row items-center flex-wrap">
        <div className="mr-auto">
          <h2 className="mb-3 font-bold text-xl">Latest Articles:</h2>
          <p className="font-normal text-sm">
            Check out our contents. Like what you see? Explore the guide to see more.
          </p>
        </div>
        <BtnPrimary children="See all articles" className="text-sm" isOutline />
      </div>
      <div className="flex flex-row flex-wrap">
        <article className="w-1/2 pr-2">
          <div className="shadow-lg p-4 rounded-lg h-full">
            <img
              src={IMAGES.logo}
              alt="article"
              className="w-full h-64 rounded-2xl mb-4 shadow-2xl"
            />
            <time className="text-right mb-4 block">July 06, 2023</time>
            <h4 className="font-semibold text-lg mb-4">TV: Is it a good thing?</h4>
            <p className="font-normal text-base">
              Television is one of the most important inventions of the century. Almost everyone
              owns a TV set at home today. Be it educational or entertainment, life would be so
              boring without one nowadays...
            </p>
          </div>
        </article>
        <article className="w-1/2 pl-2">
          <div className="shadow-lg p-4 flex flex-col rounded-lg justify-between h-full">
            <section className="flex flex-row items-center">
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
            <section className="flex flex-row items-center">
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
            <section className="flex flex-row items-center">
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
          </div>
        </article>
      </div>
    </section>
  )
}

export default LastArticles
