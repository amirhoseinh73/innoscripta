import { useRef, useState } from "react"
import "../assets/css/search.css"
import { SEARCH_BTN, SEARCH_PLACEHOLDER, SEARCH_TEXT } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"
import { useSelector } from "react-redux"
import { ReduxReducers } from "../@types/redux"
import { ArticleBig, ArticleSmall } from "./articles/Articles"
import { ResponseNYT } from "../@types/global"

const Search = function () {
  const resultRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [searchResult, setSearchResult] = useState<ResponseNYT["response"]["docs"]>([])

  const getArticleData = useSelector((state: ReduxReducers) => state.articleNYT)

  const search = function () {
    const input = inputRef.current
    const result = resultRef.current
    if (!input || !getArticleData || !result) return setSearchResult([])

    const searchVal = input.value
    if (searchVal.length < 3) return setSearchResult([])

    const resArt = getArticleData.filter(
      art =>
        art.abstract.toLocaleLowerCase().includes(`${searchVal.toLocaleLowerCase()}`) ||
        art.lead_paragraph.toLocaleLowerCase().includes(`${searchVal.toLocaleLowerCase()}`) ||
        art.pub_date.toLocaleLowerCase().includes(`${searchVal.toLocaleLowerCase()}`)
    )
    console.log(searchVal)

    console.log(resArt)

    if (!resArt) return setSearchResult([])

    setSearchResult(resArt)
  }

  return (
    <section className="search-large w-full my-8">
      <label htmlFor="search" className="mb-3 font-semibold text-xl block">
        {SEARCH_TEXT}
      </label>
      <div className="relative">
        <InputFocus
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          className="mr-2 w-full !mt-0"
          autoComplete="search"
          id="search"
          ref={inputRef}
          onKeyUp={search}
        />
        <BtnPrimary
          className="absolute right-1 bottom-1 top-1 my-auto"
          children={SEARCH_BTN}
          onClick={search}
        />
        <div
          ref={resultRef}
          className={`absolute top-full left-0 bg-gray-200 rounded-md w-full py-2 px-4 ${
            searchResult && searchResult.length ? "flex flex-row flex-wrap" : "hidden"
          }`}>
          {searchResult.map((item, idx) => (
            <ArticleSmall
              className="w-5/12 mx-1 my-1 border border-gray-300"
              content={item.lead_paragraph}
              date={item.pub_date}
              title={item.abstract}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Search
