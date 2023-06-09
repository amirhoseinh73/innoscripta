import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { SITE_NAME, STATIC_MESSAGES } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"
import { ResponseLogin, anyObject } from "../@types/global"
import Alert from "./Alert/Alert"
import { useDispatch } from "react-redux"
import { emailRegex, setItem } from "../helpers/helper"
import { PostData } from "../models/POST"
import { loginUserBody } from "../models/User"
import { setUserInfo } from "../Redux/Actions/auth"
import ErrorText from "./Alert/ErrorText"

const SignIn = function () {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    server: "",
  })
  const [successMsg, setSuccessMsg] = useState<string>("")
  const [submitData, setSubmitData] = useState<null | anyObject>(null)

  const dispatch = useDispatch()

  const formRef = useRef<HTMLFormElement>(null)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    setSuccessMsg("")

    let currentErrors = {
      email: "",
      password: "",
      server: "",
    }

    if (!email) currentErrors = { ...currentErrors, email: STATIC_MESSAGES.ERROR.emailEmpty }
    else if (!emailRegex.test(email))
      currentErrors = { ...currentErrors, email: STATIC_MESSAGES.ERROR.emailValidation }

    if (!password)
      currentErrors = { ...currentErrors, password: STATIC_MESSAGES.ERROR.passwordEmpty }
    else if (password.length < 6)
      currentErrors = { ...currentErrors, password: STATIC_MESSAGES.ERROR.passwordValidation }

    setErrors(currentErrors)
    if (currentErrors.email || currentErrors.password) return

    const data = {
      email: email,
      password: password,
    }

    setSubmitData(data)
  }

  const submitForm = async (data: string) => {
    setSubmitData(null)
    try {
      const respond = (await PostData(data)) as ResponseLogin

      //success
      formRef.current?.reset()
      setSuccessMsg(STATIC_MESSAGES.SUCCESS.login)

      setItem("token", respond.data.login.token)

      dispatch(setUserInfo(respond.data.login.user))
    } catch (err) {
      setErrors({ ...errors, server: err as string })
    }
  }

  useEffect(() => {
    if (!submitData) return

    const data = loginUserBody(submitData.email, submitData.password)

    submitForm(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitData])

  return (
    <div className="relative flex flex-col justify-center h-[calc(100vh_-_7rem)] p-12 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          {SITE_NAME}
        </h1>
        <form className="mt-6" ref={formRef} onSubmit={submitLogin}>
          <div>
            {errors && errors.server && <Alert type="error" message={errors.server} />}
            {successMsg && <Alert type="success" message={successMsg} />}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <InputFocus
              type="email"
              autoComplete="email"
              id="email"
              placeholder="someone@innoscripta.com"
              ref={emailRef}
            />
            {errors.email && <ErrorText text={errors.email} />}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <InputFocus
              type="password"
              autoComplete="password"
              id="password"
              placeholder="*********"
              ref={passwordRef}
            />
            {errors.password && <ErrorText text={errors.password} />}
          </div>
          <a href="#" className="text-xs text-teal-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <BtnPrimary
              children="Login"
              type="submit"
              className="w-full hover:!bg-teal-600 !text-gray-50"
            />
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link to="/sign-up" className="px-2 font-medium text-teal-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
