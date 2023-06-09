import LinkNav from "./LinkNav"
import { BtnPrimaryLink } from "../Buttons"
import { NAV_HEADER, NAV_USER } from "../../helpers/Navs"
import { useSelector } from "react-redux"
import { ReduxReducers } from "../../@types/redux"

const Header = function () {
  const userInfo = useSelector((state: ReduxReducers) => state.userInfo)
  const validateUserInfo = userInfo && Object.keys(userInfo).length

  return (
    <header className="py-4 px-4">
      <nav className="flex flex-row">
        {NAV_HEADER.map((item, idx) =>
          item.alt ? (
            <LinkNav key={idx} href={item.route}>
              <img src={item.content} alt={item.alt} />
            </LinkNav>
          ) : (
            <LinkNav key={idx} href={item.route} children={item.content} hoverEnable />
          )
        )}

        {validateUserInfo ? (
          <>
            <BtnPrimaryLink
              href={NAV_USER.dashboard.route}
              className="ml-auto mr-1"
              children={NAV_USER.dashboard.content}
            />
            <BtnPrimaryLink
              href={NAV_USER.logout.route}
              className="mx-1"
              children={NAV_USER.logout.content}
              isOutline
            />
          </>
        ) : (
          <>
            <LinkNav
              href={NAV_USER.signIn.route}
              className="ml-auto mr-1"
              children={NAV_USER.signIn.content}
            />
            <BtnPrimaryLink
              href={NAV_USER.signUp.route}
              className="mx-1"
              children={NAV_USER.signUp.content}
            />
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
