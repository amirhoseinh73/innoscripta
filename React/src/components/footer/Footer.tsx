import { Link } from "react-router-dom"
import {
  CONTACT_FOOTER,
  NAV_FOOTER_COMPANY,
  NAV_FOOTER_NEWS,
  NAV_FOOTER_SOLUTIONS,
  NAV_FOOTER_SUPPORT,
} from "../../helpers/Navs"
import Copyright from "./Copyright"
import { IMAGES } from "../../helpers/Images"
import { FOOTER_ABOUT_US, SITE_NAME } from "../../helpers/Texts"
import { NavFooterInterface } from "../../@types/global"

const FooterNav = function ({ nav }: { nav: NavFooterInterface }) {
  return (
    <section className="w-auto mb-6 px-2">
      <h4 className="font-semibold text-gray-800 mb-4">{nav.title}</h4>
      <ul className="list-none">
        {nav.links.map((item, idx) => (
          <li key={idx} className="my-2 text-gray-600 flex items-center text-sm">
            <Link to={item.route}>{item.content}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const Footer = function () {
  return (
    <div className="px-2">
      <footer className="mt-8 pt-8 flex justify-between flex-wrap">
        <section className="sm:w-2/6 mb-6 mr-20">
          <div className="flex flex-row flex-nowrap uppercase items-center text-lg font-semibold text-teal-700 mb-4">
            <img src={IMAGES.logo} alt="Logo" className="w-12 h-12 mr-6" />
            {SITE_NAME}
          </div>
          <p className="text-sm mb-6">{FOOTER_ABOUT_US}</p>
          <ul className="list-none">
            {CONTACT_FOOTER.map((item, idx) => (
              <li key={idx} className="my-2 text-gray-500 flex items-center text-sm">
                {item.icon}
                <a href={item.href}>{item.content}</a>
              </li>
            ))}
          </ul>
        </section>

        <FooterNav nav={NAV_FOOTER_NEWS} />
        <FooterNav nav={NAV_FOOTER_SOLUTIONS} />
        <FooterNav nav={NAV_FOOTER_COMPANY} />
        <FooterNav nav={NAV_FOOTER_SUPPORT} />
      </footer>
      <Copyright />
    </div>
  )
}

export default Footer
