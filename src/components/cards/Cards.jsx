import React from 'react'
import { CardsItems } from './CardsItems'
import styles from '../../app/page.module.css'
import Link from 'next/link'


export const Cards = () => {
  return (
    <div className={`w-full h-full ${styles.bag}`}>
      <div className={`${styles.contenedor}`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 mb-4'>Expande tu conocimiento</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Te gustaría saber más sobre la infraestructura y reglas de las redes?</p>
          <p className='text-gray-600'>En este apartado encontrarás todo sobre conectores, protocoles, normas y tecnologías de redes</p>
        </div>
        <div className='grid grid-cols-4 gap-4'>
        <Link href={'/infraestructura/#Servicios'}>
          <CardsItems title={'Servicios y protocolos'} image={'/internet.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#puertos'}>
          <CardsItems title={'Puertos TCP/UDP'} image={'/lineas.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#OSI'}>
          <CardsItems title={'Modelo OSI'} image={'/redes.jpg'} />
        </Link>
        <Link href={'/infraestructura/#TCP'}>
          <CardsItems title={'Modelo TCP'} image={'/redes.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#cableado'}>
          <CardsItems title={'Elementos y normas de cableado'} image={'/cableado.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#banda'}>
          <CardsItems title={'Ancho de banda'} image={'/velocidades.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#redes'}>
          <CardsItems title={'Tecnología de redes'} image={'/internet-Mundial.jpg'}/>
        </Link>
        <Link href={'/infraestructura/#Servicios'}>
          <CardsItems title={'Ver contenido completo'} image={'/redes.jpg'}/>
        </Link>
        </div>
      </div>

    </div>

  )
}
