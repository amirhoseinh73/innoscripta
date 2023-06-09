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
  name: string
  created_at: string
}

export interface ResponseAPI {
  errors?: {
    [key: string]: {
      message: string
      extensions?: {
        validation: { [key: string]: string[] }
      }
    }
  }
  data?: anyObject
}

export interface ResponseRegister extends ResponseAPI {
  data: {
    createUser: {
      id: number
      name: string
      email: string
      created_at: string
    }
  }
}

export interface ResponseLogin extends ResponseAPI {
  data: {
    login: {
      token: string
      user: UserInfo
    }
  }
}

export interface ResponseUserInfo extends ResponseAPI {
  data: {
    me: UserInfo
  }
}

export type AlertType = "error" | "success" | "info" | "warning" | null
