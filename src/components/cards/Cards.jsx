import React from 'react'
import { CardsItems } from './CardsItems'

export const Cards = () => {
  return (
    <div className=' w-full'>
      <div>
        <h2>Conectores <strong className='text-blue-700'>Fisicos</strong> de redes informaticas</h2>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
      </div>
    </div>

  )
}
