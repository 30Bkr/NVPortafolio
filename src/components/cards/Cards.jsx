import React from 'react'
import { CardsItems } from './CardsItems'
import styles from '../../app/page.module.css'


export const Cards = () => {
  return (
    <div className={`w-full h-full ${styles.bag}`}>
      <div className={`${styles.contenedor} px-5`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 mb-4'>Expande tu conocimiento</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Te gustaría saber más sobre la infraestructura y reglas de las redes?</p>
          <p className='text-gray-600'>En este apartado encontrarás todo sobre conectores, protocoles, normas y tecnologías de redes</p>
        </div>
        <div className='lg:grid lg:grid-cols-4 lg:gap-4 flex flex-col items-center gap-4 mt-4'>

            <CardsItems title={'Servicios y protocolos'} image={'/internet.jpg'} path={'/infraestructura/#Servicios'}/>

            <CardsItems title={'Puertos TCP/UDP'} image={'/lineas.jpg'} path={'/infraestructura/#puertos'}/>

            <CardsItems title={'Modelo OSI'} image={'/redes.jpg'} path={'/infraestructura/#OSI'}/>

            <CardsItems title={'Modelo TCP'} image={'/redes.jpg'} path={'/infraestructura/#TCP'}/>

            <CardsItems title={'Elementos y normas de cableado'} image={'/cableado.jpg'} path={'/infraestructura/#cableado'}/>

            <CardsItems title={'Ancho de banda'} image={'/velocidades.jpg'} path={'/infraestructura/#banda'}/>

            <CardsItems title={'Tecnología de redes'} image={'/mundial.jpg'} path={'/infraestructura/#redes'}/>

            <CardsItems title={'Ver contenido completo'} image={'/redes.jpg'} path={'/infraestructura/#Servicios'}/>
        </div>
      </div>

    </div>

  )
}
