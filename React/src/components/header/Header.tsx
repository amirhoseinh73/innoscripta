import { useState } from "react"
import LinkNav from "./LinkNav"
import { BtnPrimaryLink, BtnTransparent } from "../Buttons"
import { NAV_HEADER, NAV_USER } from "../../helpers/Navs"
import { useSelector } from "react-redux"
import { ReduxReducers } from "../../@types/redux"
import { IMAGES } from "../../helpers/Images"
import Menu from "../icons/Menu"
import Close from "../icons/Close"

const Logo = function () {
  return (
    <LinkNav className="my-1 sm:my-0" href="/">
      <img src={IMAGES.logo} alt="logo" />
    </LinkNav>
  )
}

const Header = function () {
  const userInfo = useSelector((state: ReduxReducers) => state.userInfo)
  const validateUserInfo = userInfo && Object.keys(userInfo).length

  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <header className="py-4 px-4">
      <div className="flex sm:hidden">
        <Logo />
        <BtnTransparent className="ml-auto" onClick={() => setIsShowMenu(!isShowMenu)}>
          {isShowMenu ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </BtnTransparent>
      </div>

      <nav
        className={`${
          isShowMenu ? "left-0" : "-left-[100%]"
        } flex bg-gray-200 transition-all fixed p-4 left-0 top-0 border-r-2 shadow-2xl border-gray-300 w-9/12 sm:shadow-none sm:border-r-0 sm:w-full sm:relative sm:left-auto sm:top-auto sm:bg-transparent h-screen sm:h-auto sm:flex flex-col sm:flex-row`}>
        <Logo />
        {NAV_HEADER.map((item, idx) => (
          <LinkNav
            className="my-1 sm:my-0"
            key={idx}
            href={item.route}
            children={item.content}
            hoverEnable
          />
        ))}
        <BtnPrimaryLink
          href={validateUserInfo ? NAV_USER.dashboard.route : NAV_USER.signIn.route}
          className="my-1 mx-4 sm:my-0 sm:ml-auto sm:mr-1"
          children={validateUserInfo ? NAV_USER.dashboard.content : NAV_USER.signIn.content}
        />
        <BtnPrimaryLink
          href={validateUserInfo ? NAV_USER.logout.route : NAV_USER.signUp.route}
          className="my-1 mx-4 sm:my-0 sm:mx-1"
          children={validateUserInfo ? NAV_USER.logout.content : NAV_USER.signUp.content}
          isOutline
        />
      </nav>
    </header>
  )
}

export default Header
