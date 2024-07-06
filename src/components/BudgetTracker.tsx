import AmountDisplay from './AmountDisplay'
import { useBudget } from '../hooks/useBudget'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
export default function BudgetTracker() {

  const {state, dispatch,totalExpenses,remainingBudget} = useBudget()

  const percentaje = +((totalExpenses / state.budget) *100).toFixed(2)
  
  return (
    <div
    className='grid grid-cols-1 md:grid-cols-2 gap-5'
    >
        <div className=' flex justify-center'>
          <CircularProgressbar
              value={percentaje}
              styles={buildStyles({
                pathColor:percentaje > 95? '#dc2626': percentaje >80? '#c2410c':'#FF9999',
                trailColor: percentaje >80? '#f5f5f5': '#D2F8C0',
                textSize:10,
                textColor:percentaje > 95? '#dc2626': percentaje >80? '#c2410c':'#79D84B'
              })}
              text={`${percentaje} % Gastado`}
              />
        </div>


        <div className='flex flex-col justify-center items-center gap-8'>
            <button
            type='button'
            onClick={()=> dispatch({type:"reset-budget"})}
            className='bg-orange-700 p-2 w-full text-white uppercase rounded-lg font-semibold'
            >
                Resetear App
            </button>

            <AmountDisplay
            label="Presupuesto"
            amount={state.budget}
            />
            <AmountDisplay
            label="Disponible"
            amount={remainingBudget}
            />
            <AmountDisplay
            label="Gastado"
            amount={totalExpenses}
            />
        </div>

    </div>
  )
}
