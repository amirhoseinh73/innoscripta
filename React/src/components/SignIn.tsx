import { InputFocus } from "./Inputs"

const SignIn = function () {
  return (
    <div className="relative flex flex-col justify-center h-[calc(100vh_-_7rem)] py-12 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-1 ring-teal-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 underline uppercase decoration-wavy">
          Innoscripta
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <InputFocus type="email" id="email" placeholder="someone@innoscripta.com" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <InputFocus type="password" id="password" placeholder="*********" />
          </div>
          <a href="#" className="text-xs text-teal-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <a href="/sign-up" className="px-2 font-medium text-teal-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn
