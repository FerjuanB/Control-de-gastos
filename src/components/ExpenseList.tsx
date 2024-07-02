import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
    const {state} =useBudget()

    const isEmpty = useMemo(()=>state.expenses.length === 0,[state.expenses])
  return (
    <div className="mt-10">
        {isEmpty?(
            <p className="text-orange-700 w-full border-b-2 border-orange-500 font-bold uppercase text-center text-2xl  p-1">
sin gastos
        </p>):(
            <>
            <p className="text-blue-600/90 w-full border-b-2 border-spacing-1 border-blue-400 font-bold uppercase text-center text-2xl  my-5 p-1">
            Listado de gastos
        </p>
        {state.expenses.map(expense =>(
            <ExpenseDetail
            key={expense.id}
            expense={expense}
            />
        ))}
            </>
        )}
    </div>
  )
}
