import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import LastArticles from "../components/LastArticles"

const Home = function () {
  return (
    <>
      <Header />
      <Search />
      <LastArticles />
      <Footer />
    </>
  )
}

export default Home
