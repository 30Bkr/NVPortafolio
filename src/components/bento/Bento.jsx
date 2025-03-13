import React from 'react'
import { BentoItem } from './BentoItem'

const Bento = () => {
  const bigBentoPart = 'col-span-6 h-90 w-full rounded-md';
  const smallBentoPart = 'col-span-4 h-90 w-full rounded-md';
  return (
    <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4">
      <BentoItem estilo={bigBentoPart} />
      <BentoItem estilo={smallBentoPart} />
      <BentoItem estilo={smallBentoPart} />
      <BentoItem estilo={bigBentoPart} />
    </div>
  )
}

export default Bento