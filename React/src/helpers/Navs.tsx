import { NavFooterInterface } from "../@types/global"
import EnvelopOpen from "../components/icons/EnvelopOpen"
import Facebook from "../components/icons/Facebook"
import LinkedIn from "../components/icons/LinkedIn"
import Phone from "../components/icons/Phone"
import Telegram from "../components/icons/Telegram"
import Twitter from "../components/icons/Twitter"
import Youtube from "../components/icons/Youtube"
import { IMAGES } from "./Images"

export const NAV_HEADER = [
  {
    route: "/",
    content: IMAGES.logo,
    alt: "logo",
  },
  {
    route: "/contact-us",
    content: "Contact Us",
  },
  {
    route: "/about-us",
    content: "About Us",
  },
]

export const BTNS_LOGIN = {
  signIn: {
    route: "/sign-in",
    content: "Sign in",
  },
  signUp: {
    route: "/sign-up",
    content: "Sign up",
  },
} as const

export const NAV_COPYRIGHT = [
  {
    route: "/",
    content: "Terms of Service",
  },
  {
    route: "/",
    content: "Privacy policy",
  },
  {
    route: "/",
    content: "Cookies",
  },
] as const

export const SOCIAL_MEDIA = [
  {
    route: "/",
    content: <Telegram />,
  },
  {
    route: "/",
    content: <Youtube />,
  },
  {
    route: "/",
    content: <Twitter />,
  },
  {
    route: "/",
    content: <LinkedIn />,
  },
  {
    route: "/",
    content: <Facebook />,
  },
] as const

export const CONTACT_FOOTER = [
  {
    icon: <EnvelopOpen className="mr-2 w-4 h-4" />,
    content: "info@innoscripta.com",
    href: "mailto:info@innoscripta.com",
  },
  {
    icon: <Phone className="mr-2 w-4 h-4" />,
    content: "+49 123 456 78910",
    href: "tel:004912345678910",
  },
] as const

export const NAV_FOOTER_NEWS: NavFooterInterface = {
  title: "News",
  links: [
    {
      route: "/",
      content: "Features",
    },
    {
      route: "/",
      content: "Downloads",
    },
    {
      route: "/",
      content: "Pricing",
    },
    {
      route: "/",
      content: "Imagination",
    },
  ],
}

export const NAV_FOOTER_SOLUTIONS: NavFooterInterface = {
  title: "Solutions",
  links: [
    {
      route: "/",
      content: "Time Keeping",
    },
    {
      route: "/",
      content: "Reporting",
    },
    {
      route: "/",
      content: "Management",
    },
    {
      route: "/",
      content: "Industry",
    },
    {
      route: "/",
      content: "Calculators",
    },
  ],
}

export const NAV_FOOTER_COMPANY: NavFooterInterface = {
  title: "Company",
  links: [
    {
      route: "/about-us",
      content: "About Us",
    },
    {
      route: "/",
      content: "Careers",
    },
    {
      route: "/",
      content: "Affiliates",
    },
    {
      route: "/",
      content: "Engineering",
    },
    {
      route: "/",
      content: "Customers",
    },
  ],
}

export const NAV_FOOTER_SUPPORT: NavFooterInterface = {
  title: "Support",
  links: [
    {
      route: "/contact-us",
      content: "Contact",
    },
    {
      route: "/",
      content: "Tutorials",
    },
    {
      route: "/",
      content: "Resources",
    },
    {
      route: "/",
      content: "Blog",
    },
    {
      route: "/",
      content: "Help",
    },
  ],
}
