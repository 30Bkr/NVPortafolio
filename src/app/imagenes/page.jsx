import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'



const imagenes = () => {
  return (
    <div className={`${styles.contenedor}`}>
      <div className='flex pt-20'>
        <div>
          <Image src={'/firma.jpeg'}
            width={320}
            height={600}
            alt='Primera visita a la institución'
          ></Image>
        </div>
        <div className='h-120'>
          <h2>Primer visita</h2>
          <p>En esta visita nos encargamos de levantar toda la información relevante para comenzar a realizar el sistema de inscripción</p>
        </div>
      </div>
      <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>

      <div className='flex mt-4'>
        <div>
          <Image src={'/firma.jpeg'}
            width={320}
            height={600}
            alt='Primera visita a la institución'
          ></Image>
        </div>
        <div className='h-120'>
          <h2>Primer visita</h2>
          <p>En esta visita nos encargamos de levantar toda la información relevante para comenzar a realizar el sistema de inscripción</p>
        </div>
      </div>  
    </div>
    
  )
}

export default imagenes