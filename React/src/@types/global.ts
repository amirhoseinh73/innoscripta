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

export type NumberRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result["length"] extends N ? Result : NumberRange<N, [...Result, Result["length"]]>

export type strArrObject = { [key: string]: string[] }
export type strObject = { [key: string]: string }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type anyObject = { [key: string]: any }

export type UserInfo = {
  id: number
  email: string
  firstname: string
  lastname: string
  created_at: string
  updated_at: string
}

export interface ResponseAPI {
  message: string
  errors?: { [key: string]: string[] }
  status?: "success" | "failed"
  data?: anyObject
}

export interface ResponseLogin extends ResponseAPI {
  data: {
    token: string
    user: UserInfo
  }
}
