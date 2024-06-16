import { useMemo, useState } from "react"

export default function BudgetForm() {

  const [budget,setBudget] =useState(0)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
setBudget(e.target.valueAsNumber) }

const isValid = useMemo( ()=>{
return isNaN(budget)
},[budget])
  return (
<form action="" className="space-y-5">
<div className="flex flex-col space-y-5">
    <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
        Definir Presupuesto
    </label>
    <input 
    id="budgetID"
    name="budget"
    type="number"
    value={budget} 
  
    className="w-full bg-white border border-gray-200 p-2" 
    placeholder="Ingresá tu presupuesto" 
    onChange={ handleChange} />

</div>

<input
type="submit"
value="Agregar presupuesto"
className="bg-blue-600 hover:bg-blue-700 ease-in-out duration-150 cursor-pointer w-full p-2 text-white font-black disabled:opacity-30 disabled:duration-150 disabled:ease-in-out "
disabled={isValid}
/>
</form>  )
}
