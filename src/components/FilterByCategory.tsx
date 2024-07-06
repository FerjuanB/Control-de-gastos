import { ChangeEvent } from "react";
import { useBudget } from "../hooks/useBudget";
import { categories } from "../utils/categories";
export default function FilterByCategory() {
  const {dispatch} = useBudget()


  const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
    dispatch({type:'filter-by-category',payload:{id: e.target.value}})
  }
  return (
    <div
    className=" bg-white shadow-lg rounded-lg  p-10">
      <form action="">
       <div className="flex flex-col md:flex-row md:items-center gap-5">

        <label htmlFor="category">Filtrar gastos</label>
          <select  
          onChange={handleChange}
          id="category"
          className="flex-1 bg-slate-100 p-3 rounded-lg"
          >
            <option value="">
              --Todos las categorías--            </option>
              {categories.map(category =>(
                <option 
                value={category.name}
                key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
       </div>
      </form>
      </div>
  )
}
