import React from 'react'
import Image from 'next/image'

const Perfil = ({ name, image}) => {
  return (
          <div className='w-auto rounded-full flex items-center font-semibold text-[20px] text-slate-600 hover:text-rose-500'>
            <div className='w-16 h-16 relative border-3 border-gray-500 rounded-full hover:border-rose-500'>
              <Image 
                src={image}
                fill
                alt={name}
                className='rounded-full'
              />
            </div>
            <h2 className='mx-4 '>{name}</h2>
          </div>
  )
}

export default Perfil