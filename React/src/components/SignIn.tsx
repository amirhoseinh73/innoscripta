import { Link } from "react-router-dom"
import { SITE_NAME } from "../helpers/Texts"
import { BtnPrimary } from "./Buttons"
import { InputFocus } from "./Inputs"

const SignIn = function () {
  return (
    <div className="relative flex flex-col justify-center h-[calc(100vh_-_7rem)] py-12 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          {SITE_NAME}
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <InputFocus
              type="email"
              autoComplete="email"
              id="email"
              placeholder="someone@innoscripta.com"
            />
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
            />
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
