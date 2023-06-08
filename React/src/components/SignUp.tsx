import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { SITE_NAME, STATIC_MESSAGES } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"
import Eye from "./icons/Eye"
import EyeSlash from "./icons/EyeSlash"
import { RESTFUL_API_URL, emailRegex, setItem } from "../helpers/helper"
import { ResponseLogin, anyObject } from "../@types/global"
import { PostData } from "../models/POST"
import { useDispatch } from "react-redux"
import { setUserInfo } from "../Redux/Actions/auth"

export const ErrorComponent = function ({ text }: { text: string }) {
  return <span className="text-red-600 text-xs font-medium">{text}</span>
}

const SignUp = function () {
  const [isPassword, setIsPassword] = useState(true)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    server: [""],
  })
  const [successMsg, setSuccessMsg] = useState<string>("")
  const [submitData, setSubmitData] = useState<null | anyObject>(null)

  const dispatch = useDispatch()

  const formRef = useRef<HTMLFormElement>(null)

  const emailRef = useRef<HTMLInputElement>(null)
  const firstnameRef = useRef<HTMLInputElement>(null)
  const lastnameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)

  const submitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrors({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      server: [""],
    })
    setSuccessMsg("")

    const email = emailRef.current?.value
    const firstname = firstnameRef.current?.value
    const lastname = lastnameRef.current?.value
    const password = passwordRef.current?.value
    const passwordConfirm = passwordConfirmRef.current?.value

    let currentErrors = { ...errors }

    if (!firstname) currentErrors = { ...currentErrors, firstname: STATIC_MESSAGES.ERROR.firstname }
    if (!lastname) currentErrors = { ...currentErrors, lastname: STATIC_MESSAGES.ERROR.lastname }

    if (!email) currentErrors = { ...currentErrors, email: STATIC_MESSAGES.ERROR.emailEmpty }
    else if (!emailRegex.test(email))
      currentErrors = { ...currentErrors, email: STATIC_MESSAGES.ERROR.emailValidation }

    if (!password)
      currentErrors = { ...currentErrors, password: STATIC_MESSAGES.ERROR.passwordEmpty }
    else if (password.length < 6)
      currentErrors = { ...currentErrors, password: STATIC_MESSAGES.ERROR.passwordValidation }

    if (!passwordConfirm)
      currentErrors = {
        ...currentErrors,
        passwordConfirm: STATIC_MESSAGES.ERROR.confirmPasswordEmpty,
      }
    else if (passwordConfirm !== password)
      currentErrors = {
        ...currentErrors,
        passwordConfirm: STATIC_MESSAGES.ERROR.confirmPasswordValidation,
      }

    if (
      currentErrors.email ||
      currentErrors.firstname ||
      currentErrors.lastname ||
      currentErrors.password ||
      currentErrors.passwordConfirm
    )
      return setErrors(currentErrors)

    const data = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
      password_confirmation: passwordConfirm,
    }

    setSubmitData(data)
  }

  const submitForm = async (data: anyObject) => {
    setSubmitData(null)
    try {
      // prettier-ignore
      const respond = await PostData( RESTFUL_API_URL.USER.register, data ) as ResponseLogin

      //success
      formRef.current?.reset()
      setSuccessMsg(respond.message)

      setItem("token", respond.data.token)
      dispatch(setUserInfo(respond.data.user))
    } catch (err) {
      if (Array.isArray(err)) return setErrors({ ...errors, server: err })

      setErrors({ ...errors, server: [STATIC_MESSAGES.ERROR.server] })
    }
  }

  useEffect(() => {
    if (!submitData) return

    submitForm(submitData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitData])

  return (
    <div className="relative flex flex-col justify-center h-[calc(100vh_-_7rem)] py-12 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          {SITE_NAME}
        </h1>
        <form className="mt-6" onSubmit={submitRegister}>
          <section className="flex flex-wrap">
            <div className="mb-3 px-2 w-1/2">
              <label htmlFor="firstname" className="block text-sm font-semibold text-gray-800">
                Firstname
              </label>
              <InputFocus
                type="text"
                id="firstname"
                placeholder="amirhossein"
                autoComplete="first_name"
              />
              {errors.firstname && <ErrorComponent text={errors.firstname} />}
            </div>
            <div className="mb-3 px-2 w-1/2">
              <label htmlFor="lastname" className="block text-sm font-semibold text-gray-800">
                Lastname
              </label>
              <InputFocus
                type="text"
                id="lastname"
                placeholder="hassani"
                autoComplete="family_name"
              />
              {errors.lastname && <ErrorComponent text={errors.lastname} />}
            </div>
          </section>
          <div className="mb-2 px-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <InputFocus
              type="email"
              autoComplete="email"
              id="email"
              placeholder="someone@innoscripta.com"
            />
            {errors.email && <ErrorComponent text={errors.email} />}
          </div>
          <div className="mb-2 px-2 relative">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <div className="relative">
              <InputFocus
                type={isPassword ? "password" : "text"}
                autoComplete="password"
                id="password"
                placeholder="*********"
              />
              <BtnPrimary
                className="absolute right-1 bottom-1 z-10 h-8 w-8"
                children={
                  isPassword ? <Eye className="w-6 h-6" /> : <EyeSlash className="w-6 h-6" />
                }
                isOutline
                onClick={() => setIsPassword(!isPassword)}
                tabIndex={-1}
              />
            </div>
            {errors.password && <ErrorComponent text={errors.password} />}
          </div>
          <div className="mb-2 px-2">
            <label htmlFor="password_confirm" className="block text-sm font-semibold text-gray-800">
              Password Confirm
            </label>
            <div className="relative">
              <InputFocus
                type={isPasswordConfirm ? "password" : "text"}
                autoComplete="new-password"
                id="password_confirm"
                placeholder="*********"
              />
              <BtnPrimary
                className="absolute right-1 bottom-1 z-10 h-8 w-8"
                children={
                  isPasswordConfirm ? <Eye className="w-6 h-6" /> : <EyeSlash className="w-6 h-6" />
                }
                isOutline
                onClick={() => setIsPasswordConfirm(!isPasswordConfirm)}
                tabIndex={-1}
              />
            </div>
            {errors.passwordConfirm && <ErrorComponent text={errors.passwordConfirm} />}
          </div>
          <div className="mt-6 px-2">
            <BtnPrimary
              children="Register"
              type="submit"
              className="w-full hover:!bg-teal-600 !text-gray-50"
            />
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account?
          <Link to="/sign-in" className="px-2 font-medium text-teal-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
