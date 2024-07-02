import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import { useMemo } from "react"
import { Expense } from "../types"
import { formatDate } from "../utils"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../utils/categories"
import "react-swipeable-list/dist/styles.css"
type ExpenseDetailProps ={
    expense:Expense
}

export default function ExpenseDetail({expense}:ExpenseDetailProps) {

  const categoryInfo = useMemo(()=>categories.filter(cat => cat.name === expense.category)[0], [expense])
  
  

  
  const leadingActions = ()=>(
    <LeadingActions>
      <SwipeAction
      onClick={() => {}}
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingingActions = ()=>(
    <TrailingActions>
      <SwipeAction
      onClick={() => {}}
      destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )


  return (
  <SwipeableList>
    <SwipeableListItem
    maxSwipe={30}
    leadingActions={leadingActions()}
    trailingActions={trailingingActions()}
    >

        <div 
        className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex items-center gap-5 rounded-lg mb-2">
                <div>
              <img 
              src={`/icono_${categoryInfo.icon}.svg`} 
              alt="icono de gasto"
              className="w-16" 

              />
            </div>
                     <div className="flex-1 space-y-2">
                         <p className="text-lg font-bold uppercase text-orange-700">{categoryInfo.name}</p>
                         <p className="text-lg uppercase italic font-semibold">{expense.expenseName}</p>
                         <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                     </div>

            <AmountDisplay
            amount={expense.amount}
            />
        </div>
    </SwipeableListItem>
  </SwipeableList>
  )
}
