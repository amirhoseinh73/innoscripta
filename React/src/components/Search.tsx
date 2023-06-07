import "../assets/css/search.css"
import { SEARCH_BTN, SEARCH_PLACEHOLDER, SEARCH_TEXT } from "../helpers/text"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./inputs"

const Search = function () {
  return (
    <section className="search-large w-full my-8">
      <h2 className="mb-3 font-semibold text-xl">{SEARCH_TEXT}</h2>
      <div className="flex flex-row">
        <InputFocus type="text" placeholder={SEARCH_PLACEHOLDER} className="mr-2 w-full mt-0" />
        <BtnPrimary children={SEARCH_BTN} />
      </div>
    </section>
  )
}

export default Search
