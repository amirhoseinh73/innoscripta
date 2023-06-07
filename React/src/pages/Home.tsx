import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Search from "../components/Search"
import LastArticles from "../components/articles/LastArticles"
import FavouriteArticles from "../components/articles/FavouriteArticles"

const Home = function () {
  return (
    <>
      <Header />
      <Search />
      <LastArticles />
      <FavouriteArticles />
      <Footer />
    </>
  )
}

export default Home
