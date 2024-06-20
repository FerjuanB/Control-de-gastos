import { PropsWithChildren } from "react"



export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p
    className="text-red-600 text-center font-semibold text-lg">{children}</p>
  )
}
