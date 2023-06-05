import "../assets/css/search.css"
import { BtnPrimary } from "./Buttons"

const Search = function () {
  return (
    <section className="search-large w-full my-8">
      <h2 className="mb-3 font-semibold text-xl">Search for articles you like:</h2>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search articles..."
          className="bg-white rounded-lg mr-2 w-full py-1 px-2 focus:shadow-inner"
        />
        <BtnPrimary children="Search" />
      </div>
    </section>
  )
}

export default Search
