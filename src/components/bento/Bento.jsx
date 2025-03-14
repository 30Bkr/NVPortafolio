import React from 'react'
import { BentoItem } from './BentoItem'
import styles from '../../app/page.module.css'

const Bento = () => {
  const bigBentoPart = 'col-span-6 h-90 w-full rounded-2xl';
  const smallBentoPart = 'col-span-4 h-90 w-full rounded-2xl';
  return (
    <div className={`w-full`}>
      <div className={`${styles.contenedor} py-8 px-4`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 '>Medios de comunicacion</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Como se conectan los dispositivos a internet?</p>
          <p className='text-gray-600'>Los dispositivos se conectan a internet mediante cables, ondas de radio, o a través de redes inalámbricas</p>
        </div>
        <div className={`grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4`}>
          <BentoItem estilo={bigBentoPart} title={'Lineas de comunicacion'} image={'/lineas.jpg'}/>
          <BentoItem estilo={smallBentoPart}  title={'Medios de Conexion'} image={'/medios.jpg'}/>
          <BentoItem estilo={smallBentoPart} title={'Cables y conectores'} image={'/cableado.jpg'}/>
          <BentoItem estilo={bigBentoPart} title={'Velocidades transmision'} image={'/velocidades.jpg'}/>
        </div>
      </div>

    </div>

  )
}

export default Bento