import React from 'react'
import { Card } from '../card/Card'
import { Portal } from '../portal/Portal'
import styles from '../../app/page.module.css'

const Redes = () => {
  return (
    <div className=" w-full h-full pt-16" id="redes">
      <div className={`${styles.contenedor} flex justify-around`}>
        <div className={`grid-cols-2 flex flex-col px-20 justify-center`}>
          <h2 className='text-xl text-blue-800'>Redes informaticas</h2>
          <p className='text-3xl text-slate-900 mb-4'>¿Por qué es importante saber sobre las redes informaticas?</p>
          <p className='text-gray-600'>las redes informaticas se han convertido en un componente esencial para la comunicación y el intercambio de datos entre dispositivos, sistemas y personas. Aquí podrás conocer: </p>
          <ul className='text-gray-600 list-disc list-inside list-(var())'>
            <li>Elementos</li>
            <li>Medios de comunicación</li>
            <li>Transmision de datos</li>
            <li>Medios de transmision de datos</li>
          </ul>
        </div>
        <div>
          <Card
          image={'/redes.jpg'} 
          texto={'Redes'} 
          content={'Las redes han evolucinado el mundo de la tecnologia'}
          />
        </div>
      </div>

  </div>
  )
}

export default Redes