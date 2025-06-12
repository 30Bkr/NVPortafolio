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

            <CardsItems title={'HTML'} image={'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'} path={'/infraestructura/#Servicios'}/>

            <CardsItems title={'Bootstrap'} image={'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'} path={'/infraestructura/#puertos'}/>

            <CardsItems title={'PHP'} image={'https://www.php.net//images/logos/new-php-logo.svg'} path={'/infraestructura/#OSI'}/>

            <CardsItems title={'Javascript'} image={'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'} path={'/infraestructura/#TCP'}/>

            <CardsItems title={'MYSQL'} image={'https://upload.wikimedia.org/wikipedia/commons/c/ca/MariaDB_colour_logo.svg'} path={'/infraestructura/#cableado'}/>

            <CardsItems title={'Apache'} image={'https://upload.wikimedia.org/wikipedia/commons/1/10/Apache_HTTP_server_logo_%282019-present%29.svg'} path={'/infraestructura/#banda'}/>

            <CardsItems title={'Github'} image={'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'} path={'/infraestructura/#redes'}/>

            <CardsItems title={'Draw.io'} image={'https://upload.wikimedia.org/wikipedia/commons/3/3e/Diagrams.net_Logo.svg'} path={'/infraestructura/#Servicios'}/>
        </div>
      </div>

    </div>

  )
}
