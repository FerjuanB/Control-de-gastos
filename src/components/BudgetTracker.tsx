import React from 'react'
import AmountDisplay from './AmountDisplay'

export default function BudgetTracker() {
  return (
    <div
    className='grid grid-cols-1 md:grid-cols-2 gap-5'
    >
        <div className=' flex justify-center'>
            <img src="/grafico.jpg" alt="gráfico de gastos" />
        </div>


        <div className='flex flex-col justify-center items-center gap-8'>
            <button
            type='button'
            className='bg-orange-700 p-2 w-full text-white uppercase rounded-lg font-semibold'
            >
                Resetear App
            </button>

            <AmountDisplay
            label="Presupuesto"
            amount={300}
            />
            <AmountDisplay
            label="Disponible"
            amount={200}
            />
            <AmountDisplay
            label="Gastado"
            amount={100}
            />
        </div>

    </div>
  )
}
