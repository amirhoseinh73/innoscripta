import { getItem } from "localforage"
import { NumberRange, ResponseAPI, anyObject } from "../@types/global"
import { append_and_get_loading } from "../helpers/helper"
import { STATIC_MESSAGES } from "../helpers/Texts"

export const GetData = async <T extends ResponseAPI>(
  url: string,
  enableToken = false,
  headers: anyObject | false = false,
  loadingPercent: NumberRange<101>[number] = 100
): Promise<T> => {
  const preLoader = append_and_get_loading(loadingPercent)

  const fetchParams: RequestInit = {
    headers: {
      Accept: "application/json",
      Authorization: enableToken ? "Bearer " + getItem("token") : "",
    },
  }
  if (headers) fetchParams.headers = headers

  return fetch(url /*+ params*/, fetchParams)
    .then(response => response.json() as Promise<T>)
    .then(respond => {
      //failed
      if (respond.errors || respond.status === "failed") {
        const serverErrors = [respond.message]
        for (const key in respond.errors) {
          serverErrors.push(respond.errors[key][0])
        }
        throw serverErrors
      }

      //success
      if (respond.status === "success") return respond

      throw [STATIC_MESSAGES.ERROR.server]
    })
    .catch(err => {
      throw err
    })
    .finally(() => preLoader && preLoader.length && preLoader.forEach(loader => loader.remove()))
}
