import "../assets/css/search.css"
import { SEARCH_BTN, SEARCH_PLACEHOLDER, SEARCH_TEXT } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"

const Search = function () {
  return (
    <section className="search-large w-full my-8">
      <label htmlFor="search" className="mb-3 font-semibold text-xl block">
        {SEARCH_TEXT}
      </label>
      <div className="flex flex-row">
        <InputFocus
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          className="mr-2 w-full !mt-0"
          autoComplete="search"
          id="search"
        />
        <BtnPrimary children={SEARCH_BTN} />
      </div>
    </section>
  )
}

export default Search
