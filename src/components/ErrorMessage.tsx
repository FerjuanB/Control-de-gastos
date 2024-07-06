import { PropsWithChildren } from "react"



export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p
    className="text-slate-100 rounded-md uppercase bg-orange-700 text-center font-semibold text-lg">{children}</p>
  )
}
