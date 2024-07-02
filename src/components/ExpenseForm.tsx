import { categories } from "../utils/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { ChangeEvent, FormEvent, useState } from "react";
import type { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
    const [expense,setExpense] = useState<DraftExpense>({
        amount:0,
        expenseName:'',
        category:'',
        date: new Date()
    })
    
    const [error,setError] = useState('')
    const {dispatch} = useBudget()
    const handleChangeDate = (value : Value)=>{
            setExpense({
                ...expense,
                date:value
            })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) =>{
        const {name, value} = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name] : isAmountField? +value : value
            
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(expense).includes('')) {
            setError('Completa todos los campos')
            return
        }
        //agregar gastos
        dispatch({type:"add-expense", payload:{expense}})
        //reiniciar el state
        alert("Agregado")
        
        setExpense({
            amount:0,
        expenseName:'',
        category:'',
        date: new Date()
        })
    }




  return (
    <form
    onSubmit={handleSubmit}
    className="space-y-5">
        <legend
        className="uppercase text-center text-2xl border-b-4 py-2 font-black text-blue-700/85 border-blue-500/60">Nuevo Gasto</legend>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div
        className="flex flex-col gap-2">
            <label htmlFor="expenseName" className="font-semibold text-blue-700 text-xl">
                Nombre Gasto:
            </label>
            <input type="text" 
            id="expenseName"
            placeholder="Añade el nombre de tu gasto"
            className="bg-slate-200 p-2 rounded-lg"
            name="expenseName" 
            value={expense.expenseName}
            onChange={handleChange}
            />
        </div>
        <div
        className="flex flex-col gap-2">
            <label htmlFor="amount" className="font-semibold text-blue-700 text-xl">
                Cantidad:
            </label>
            <input type="text" 
            id=""
            placeholder="Añade el monto de tu gasto: ej. 300"
            className="bg-slate-200 p-2 rounded-lg"
            name="amount"
            value={expense.amount}
            onChange={handleChange}/>
        </div>
        <div className="flex flex-col gap-2">
    <label htmlFor="category" className="font-semibold text-blue-700 text-xl">
        Categoria:
    </label>
    <input
        list="categoryList"
        id="category"
        name="category"
        className="bg-slate-200 p-2 rounded-lg"
        placeholder="Seleccione una categoría"
        value={expense.category}
        onChange={handleChange}
    />
    <datalist id="categoryList"
     >
        {categories.map(category => (
            <option key={category.id} value={category.name}>
                {category.name}

            </option>
        ))}
    </datalist>
</div>
<div
        className="flex flex-col gap-2">
            <label htmlFor="amount" className="font-semibold text-blue-700 text-xl">
                Fecha:
            </label>
            <DatePicker 
              className="bg-slate-100 p-2 border-0"    
              autoFocus
              value={expense.date}
              onChange={handleChangeDate}
                                
            />
        </div>
<input type="submit" value={"Agrega tu gasto"}
 className="bg-blue-600 cursor-pointer w-full rounded text-yellow-50 font-semibold uppercase p-2"  
/>
    </form>
  )
}
