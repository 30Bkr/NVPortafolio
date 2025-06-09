import React from 'react'
import { CardsItems } from './CardsItems'
import styles from '../../app/page.module.css'


export const Cards = () => {
  return (
    <div className={`w-full h-full ${styles.bag}`}>
      <div className={`${styles.contenedor} px-5`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 mb-4'>Tecnologías</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Cuáles fueron las tecnologías utilizadas para realizar este proyecto?</p>
          <p className='text-gray-600'>En este apartado encontrarás todo sobre la realización de este proyecto</p>
        </div>
        <div className='lg:grid lg:grid-cols-4 lg:gap-4 flex flex-col items-center gap-4 mt-4'>

            <CardsItems title={'HTML'} image={'/internet.jpg'} path={'/infraestructura/#Servicios'}/>

            <CardsItems title={'Bootstrap'} image={'/lineas.jpg'} path={'/infraestructura/#puertos'}/>

            <CardsItems title={'PHP'} image={'/redes.jpg'} path={'/infraestructura/#OSI'}/>

            <CardsItems title={'Javascript'} image={'/redes.jpg'} path={'/infraestructura/#TCP'}/>

            <CardsItems title={'MYSQL'} image={'/cableado.jpg'} path={'/infraestructura/#cableado'}/>

            <CardsItems title={'Apache'} image={'/velocidades.jpg'} path={'/infraestructura/#banda'}/>

            <CardsItems title={'Github'} image={'/mundial.jpg'} path={'/infraestructura/#redes'}/>

            <CardsItems title={'Draw.io'} image={'/redes.jpg'} path={'/infraestructura/#Servicios'}/>
        </div>
      </div>

    </div>

  )
}
