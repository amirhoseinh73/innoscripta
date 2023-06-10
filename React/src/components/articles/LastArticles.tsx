import React, { useState, useEffect } from "react"
import { TEXT_ARTICLES } from "../../helpers/Texts"
import { API_URL_NYT } from "../../helpers/helper"
import { GetData } from "../../models/GET"
import { BtnPrimary } from "../Buttons"
import { ArticleBig, ArticleSmall } from "./Articles"
import { ResponseNYT } from "../../@types/global"
import { useDispatch, useSelector } from "react-redux"
import { setArticleNYT } from "../../Redux/Actions/articleNYT"
import { ReduxReducers } from "../../@types/redux"

const LastArticles = function () {
  const [articleData, setArticleData] = useState<ResponseNYT["response"]["docs"]>([])

  const dispatch = useDispatch()

  const getArticleData = useSelector((state: ReduxReducers) => state.articleNYT)

  const nytArticles = async function () {
    try {
      const data = (await GetData(API_URL_NYT)) as ResponseNYT

      if (data.status !== "OK") return setArticleData([])

      const last4articles = data.response.docs.slice(0, 4)
      setArticleData(last4articles)

      dispatch(setArticleNYT(data.response.docs))
    } catch {
      setArticleData([])
    }
  }

  useEffect(() => {
    if (getArticleData && getArticleData.length) return setArticleData(getArticleData.slice(0, 4))
    nytArticles()
  }, [])

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
        {articleData && articleData[0] && (
          <ArticleBig
            title={articleData[0].abstract}
            content={articleData[0].lead_paragraph}
            date={articleData[0].pub_date}
          />
        )}

        <article className="w-full md:w-1/2 mb-2 md:mb-0 md:pl-2">
          <div className="shadow-lg p-4 flex flex-col rounded-lg justify-between h-full bg-gray-50">
            {articleData &&
              articleData.length &&
              articleData.map((article, idx) => {
                if (idx === 0) return <React.Fragment key={idx} />
                return (
                  <ArticleSmall
                    content={article.lead_paragraph}
                    date={article.pub_date}
                    title={article.abstract}
                    key={idx}
                  />
                )
              })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default LastArticles
