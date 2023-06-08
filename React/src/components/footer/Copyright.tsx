import { Link } from "react-router-dom"
import { NAV_COPYRIGHT, SOCIAL_MEDIA } from "../../helpers/Navs"
import { TEXT_COPYRIGHT } from "../../helpers/Texts"

const Copyright = function () {
  return (
    <footer className="flex justify-between flex-wrap py-2 border-t border-gray-300">
      <p className="text-gray-700 text-xs">{TEXT_COPYRIGHT}</p>
      <ul className="list-none flex flex-wrap text-gray-700 text-sm">
        {NAV_COPYRIGHT.map((item, idx) => (
          <li key={idx} className={idx !== 0 ? "ml-12" : ""}>
            <Link className="block" to={item.route}>
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="list-none flex flex-wrap text-gray-700 text-sm">
        {SOCIAL_MEDIA.map((item, idx) => (
          <li key={idx} className="mr-3 flex justify-center items-center">
            <Link className="block text-gray-600 w-4 h-4" to={item.route}>
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Copyright
