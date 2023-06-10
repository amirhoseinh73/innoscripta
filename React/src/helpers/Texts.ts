export const SITE_NAME = "innoscripta" as const

export const SEARCH_TEXT = "Search for articles you like:" as const
export const SEARCH_PLACEHOLDER = "Please type more than 3 character to search articles..." as const
export const SEARCH_BTN = "Search" as const

export const TEXT_ARTICLES = {
  title: "Latest Articles:",
  description: "Check out our contents. Like what you see? Explore the guide to see more.",
} as const

export const TEXT_FAV_ARTICLES = {
  title: "Favourite Articles:",
  description: "Check out our contents. Like what you see? Explore the guide to see more.",
} as const

export const TEXT_COPYRIGHT = "Copyright © 2023 amirhossein hassani. All rights reserved." as const

export const FOOTER_ABOUT_US =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices tristique tortor." as const

export const STATIC_MESSAGES = {
  ERROR: {
    server: "Server Error! Please try again later.",

    emailEmpty: "Email is required!",
    emailValidation: "Email format is wrong!",
    firstname: "firstname is required!",
    lastname: "lastname is required!",
    passwordEmpty: "password can not be empty!",
    passwordValidation: "password must be at least 6 character!",
    confirmPasswordEmpty: "password confirmation is empty!",
    confirmPasswordValidation: "password confirmation not match!",
  },

  SUCCESS: {
    operation: "Operation success.",
    register: "Success Registeration.",
    login: "You logged in successfully",
  },

  INFO: {
    loading: "Please wait...",
  },
} as const
