import LinkNav from "./LinkNav"
import { BtnPrimaryLink } from "../Buttons"
import { BTNS_LOGIN, NAV_HEADER } from "../../helpers/nav"

const Header = function () {
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

        <LinkNav
          href={BTNS_LOGIN.signIn.route}
          className="ml-auto mr-1"
          children={BTNS_LOGIN.signIn.content}
        />
        <BtnPrimaryLink
          href={BTNS_LOGIN.signUp.route}
          className="mx-1"
          children={BTNS_LOGIN.signUp.content}
        />
      </nav>
    </header>
  )
}

export default Header
