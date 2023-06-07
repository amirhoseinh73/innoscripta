import { Link } from "react-router-dom"

const LinkNav = function ({
  href,
  children,
  className,
  hoverEnable,
}: {
  href: string
  children: JSX.Element | string
  className?: string
  hoverEnable: boolean
}) {
  return (
    <Link
      className={`mx-4 p-1 hover:text-gray-500 transition-all ${
        hoverEnable ? "border-b-2 border-transparent hover:border-gray-800" : ""
      } ${className ?? ""}`}
      to={href}>
      {children}
    </Link>
  )
}

LinkNav.defaultProps = {
  hoverEnable: false,
}

export default LinkNav
