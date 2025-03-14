import React from 'react'
import { CardsItems } from './CardsItems'
import styles from '../../app/page.module.css'


export const Cards = () => {
  return (
    <div className={`w-full h-full ${styles.bag}`}>
      <div className={`${styles.contenedor}`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 mb-4'>Expande tu conocimiento</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Te gustaria saber mas sobre la infraestructura y reglas de las redes?</p>
          <p className='text-gray-600'>En este apartado encontraras todo sobre conectores, protocoles, normas y tecnologias de redes</p>
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

    </div>

  )
}
