import { NumberRange, ResponseAPI, anyObject } from "../@types/global"
import { append_and_get_loading, getItem } from "../helpers/helper"
import { STATIC_MESSAGES } from "../helpers/Texts"

export const PostData = async (
  url: string,
  data: anyObject,
  enableToken = false,
  headers: anyObject | false = false,
  loadingPercent: NumberRange<101>[number] = 100
): Promise<ResponseAPI> | never => {
  const preLoader = append_and_get_loading(loadingPercent)

  const formData = new FormData()
  for (const key in data) formData.append(key, data[key])

  const fetchParams: RequestInit = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: enableToken ? "Bearer " + getItem("token") : "",
    },
  }
  if (headers) fetchParams.headers = headers

  return fetch(url, fetchParams)
    .then(response => response.json() as Promise<ResponseAPI>)
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
      if (Array.isArray(err) && err.every(er => typeof er === "string")) throw err

      throw [STATIC_MESSAGES.ERROR.server]
    })
    .finally(() => preLoader && preLoader.length && preLoader.forEach(loader => loader.remove()))
}
