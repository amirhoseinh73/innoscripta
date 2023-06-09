import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { SITE_NAME, STATIC_MESSAGES } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"
import Eye from "./icons/Eye"
import EyeSlash from "./icons/EyeSlash"
import { emailRegex } from "../helpers/helper"
import { ResponseRegister, anyObject } from "../@types/global"
import { PostData } from "../models/POST"
import { useDispatch } from "react-redux"
import { setUserInfo } from "../Redux/Actions/auth"
import Alert from "./Alert/Alert"
import { createUserBody } from "../models/User"
import ErrorText from "./Alert/ErrorText"

const SignUp = function () {
  const [isPassword, setIsPassword] = useState(true)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    server: "",
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

    const email = emailRef.current?.value
    const firstname = firstnameRef.current?.value
    const lastname = lastnameRef.current?.value
    const password = passwordRef.current?.value
    const passwordConfirm = passwordConfirmRef.current?.value

    setSuccessMsg("")

    let currentErrors = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      server: "",
    }

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

    setErrors(currentErrors)
    if (
      currentErrors.email ||
      currentErrors.firstname ||
      currentErrors.lastname ||
      currentErrors.password ||
      currentErrors.passwordConfirm
    )
      return

    const data = {
      email: email,
      name: firstname + " " + lastname,
      password: password,
      password_confirmation: passwordConfirm,
    }

    setSubmitData(data)
  }

  const submitForm = async (data: string) => {
    setSubmitData(null)
    try {
      const respond = (await PostData(data)) as ResponseRegister

      //success
      formRef.current?.reset()
      setSuccessMsg(STATIC_MESSAGES.SUCCESS.register)

      dispatch(setUserInfo(respond.data.createUser))
    } catch (err) {
      setErrors({ ...errors, server: err as string })
    }
  }

  useEffect(() => {
    if (!submitData) return

    const data = createUserBody(submitData.name, submitData.email, submitData.password)

    submitForm(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitData])

  return (
    <div className="relative flex flex-col justify-center h-[calc(100vh_-_7rem)] p-12 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          {SITE_NAME}
        </h1>
        <form ref={formRef} className="mt-6" onSubmit={submitRegister}>
          <div className="px-2">
            {errors && errors.server && <Alert type="error" message={errors.server} />}
            {successMsg && <Alert type="success" message={successMsg} />}
          </div>
          <section className="flex flex-wrap">
            <div className="mb-3 px-2 w-full sm:w-1/2">
              <label htmlFor="firstname" className="block text-sm font-semibold text-gray-800">
                Firstname
              </label>
              <InputFocus
                type="text"
                id="firstname"
                placeholder="amirhossein"
                autoComplete="first_name"
                ref={firstnameRef}
              />
              {errors.firstname && <ErrorText text={errors.firstname} />}
            </div>
            <div className="mb-3 px-2 w-full sm:w-1/2">
              <label htmlFor="lastname" className="block text-sm font-semibold text-gray-800">
                Lastname
              </label>
              <InputFocus
                type="text"
                id="lastname"
                placeholder="hassani"
                autoComplete="family_name"
                ref={lastnameRef}
              />
              {errors.lastname && <ErrorText text={errors.lastname} />}
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
              ref={emailRef}
            />
            {errors.email && <ErrorText text={errors.email} />}
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
                ref={passwordRef}
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
            {errors.password && <ErrorText text={errors.password} />}
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
                ref={passwordConfirmRef}
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
            {errors.passwordConfirm && <ErrorText text={errors.passwordConfirm} />}
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
