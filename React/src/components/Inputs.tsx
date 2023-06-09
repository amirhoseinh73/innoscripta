import { forwardRef } from "react"

export const InputFocus = forwardRef(function (
  { className, ...htmlAttr }: React.InputHTMLAttributes<HTMLInputElement>,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={forwardedRef}
      className={`block h-10 w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md transition-all focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
        className ?? ""
      }`}
      {...htmlAttr}
    />
  )
})
