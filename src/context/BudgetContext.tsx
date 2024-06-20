import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children : ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!) //se usa createContext de react para el context, luego se usa el type creado mas arriba y entre parentesis se usa esa expresion para que no tire errores. 

export const BudgetProvider = ({children} : BudgetProviderProps)=>{
    const [state,dispatch] = useReducer(budgetReducer,initialState)

    return(
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </BudgetContext.Provider>
    )
    /*en el return está conectado el provider con el context */ 
}