import { NumberRange, ResponseAPI, anyObject } from "../@types/global"
import { API_URL, append_and_get_loading, getItem } from "../helpers/helper"
import { STATIC_MESSAGES } from "../helpers/Texts"

export const PostData = async (
  data: string,
  enableToken = false,
  headers: anyObject | false = false,
  loadingPercent: NumberRange<101>[number] = 100
): Promise<ResponseAPI> | never => {
  const preLoader = append_and_get_loading(loadingPercent)

  const fetchParams: RequestInit = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: enableToken ? "Bearer " + getItem("token") : "",
    },
  }
  if (headers) fetchParams.headers = headers

  return fetch(API_URL, fetchParams)
    .then(response => response.json() as Promise<ResponseAPI>)
    .then(respond => {
      //failed

      if (respond.errors) {
        const firstSpecificErr = respond.errors[0].extensions?.validation

        if (firstSpecificErr) for (const key in firstSpecificErr) throw firstSpecificErr[key]

        throw respond.errors[0]["message"]
      }

      //success
      return respond
    })
    .catch(err => {
      if (err) throw err

      throw STATIC_MESSAGES.ERROR.server
    })
    .finally(() => preLoader && preLoader.length && preLoader.forEach(loader => loader.remove()))
}
