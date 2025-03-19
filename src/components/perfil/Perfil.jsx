import React from 'react'
import Image from 'next/image'
import styles from './perfil.module.css'

const Perfil = ({ name, image}) => {
  return (
          <div className='w-auto flex mx-4 flex-col items-center font-semibold text-[20px] text-slate-600 hover:text-rose-500'>
            <div className='w-31 h-31 relative'>
              <Image 
                src={image}
                fill
                alt={name}
                className={`${styles.clip}`}
                style={'clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}
              />
            </div>
            <div>
             <h2 className='mx-4 mt-4 text-white hover:text-rose-500'>{name}</h2>
            </div>
          </div>
  )
}

export default Perfil