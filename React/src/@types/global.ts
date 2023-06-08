export interface BtnInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string
  isOutline: boolean
  className?: string
}

export interface BtnLinkInterface extends BtnInterface {
  href: string
  classNameBtn?: string
}

export interface ArticleInterface {
  className?: string
}

export interface NavItemInterface {
  route: string
  content: string
}

export interface NavFooterInterface {
  title: string
  links: NavItemInterface[]
}
