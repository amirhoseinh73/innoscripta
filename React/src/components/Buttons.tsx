import { Link } from "react-router-dom"
import { BtnInterface, BtnLinkInterface } from "../@types/global"

export const BtnPrimary = function ({ children, isOutline, className, ...htmlAttr }: BtnInterface) {
  return (
    <button
      type="button"
      className={`px-2 py-1 rounded-lg transition-all ${
        isOutline
          ? "bg-transparent border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-gray-50"
          : "bg-teal-700 text-gray-50 border border-transparent hover:bg-transparent hover:border-teal-700 hover:text-teal-700"
      } ${className ?? ""}`}
      {...htmlAttr}>
      {children}
    </button>
  )
}

BtnPrimary.defaultProps = {
  isOutline: false,
}

export const BtnPrimaryLink = function ({
  children,
  href,
  isOutline,
  className,
  classNameBtn,
}: BtnLinkInterface) {
  return (
    <Link className={className ?? ""} to={href}>
      <BtnPrimary className={classNameBtn} isOutline={isOutline}>
        {children}
      </BtnPrimary>
    </Link>
  )
}

BtnPrimaryLink.defaultProps = {
  isOutline: false,
}

export const BtnTransparent = function ({ children, className, ...htmlAttr }: BtnInterface) {
  return (
    <button
      type="button"
      className={`px-2 py-1 transition-all bg-transparent text-teal-700 hover:text-teal-500"
       ${className ?? ""}`}
      {...htmlAttr}>
      {children}
    </button>
  )
}
