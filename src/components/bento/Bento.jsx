import React from 'react'
import { BentoItem } from './BentoItem'

const Bento = () => {
  const bigBentoPart = 'col-span-6 h-90 w-full rounded-2xl';
  const smallBentoPart = 'col-span-4 h-90 w-full rounded-2xl';
  return (
    <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4">
      <BentoItem estilo={bigBentoPart} title={'Lineas de comunicacion'} image={'/lineas.jpg'}/>
      <BentoItem estilo={smallBentoPart}  title={'Medios de Conexion'} image={'/medios.jpg'}/>
      <BentoItem estilo={smallBentoPart} title={'Cables y conectores'} image={'/cableado.jpg'}/>
      <BentoItem estilo={bigBentoPart} title={'Velocidades transmision'} image={'/velocidades.jpg'}/>
    </div>
  )
}

export default Bento