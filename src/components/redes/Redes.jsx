import React from 'react'
import { Card } from '../card/Card'
import { Portal } from '../portal/Portal'
import styles from '../../app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Redes = () => {
  return (
    <div className=" w-full h-full pt-16 mt-16 lg:relative" id="redes">
      <div className={`xl:${styles.contenedor} xl:grid xl:grid-cols-3 xl:justify-around flex flex-col`}>
        <div className={` lg:col-span-2 flex flex-col lg:px-20 px-4 justify-center`}>
          <h2 className='text-xl text-blue-800 mb-4'>Redes informáticas</h2>
          <p className='text-3xl text-slate-900 font-semibold mb-4'>¿Son las Redes el tejido invisible que conecta nuestro mundo?</p>
          <p className='text-gray-900 '>En la era digital, las redes informáticas son mucho más que cables y routers. Son el lenguaje secreto que permite la comunicación instantánea y el intercambio de información a escala global. ¿Te atreves a descifrarlo? Si la respuesta es “sí”, aquí podrás conocer:</p>
<<<<<<< HEAD
          <ul className='text-gray-900 mt-4  list-disc list-inside list-(var())'>
            <li>Elementos</li>
            <li>Medios de comunicación</li>
            <li>Transmisión de datos</li>
            <li>Medios de transmisión de datos</li>
=======
          <ul className='text-gray-900 mt-4 list-inside list-(var())'>
            <Link href={'/redes#elementos'}>
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Elementos</li>
            </Link>
            <Link href={'/redes#medios'}>
             <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Medios de comunicación</li>
            </Link>
            <Link href={'/redes#transmision'}>
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Transmision de datos</li>
            </Link>
            <Link href={'/redes#medios2'}>
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Medios de transmision de datos</li>
            </Link>
>>>>>>> 9ef042aa18df579823584a2dfe33e517f39b9ec0
          </ul>
        </div>
        <div className='lg:absolute lg:right-0 px-4 mt-4 rounded-'>
          <Image 
            src={'/internet.jpg'}
            height={480}
            width={550}
            alt='Image abaout internet'
            className='lg:rounded-2xl lg:rounded-r-none lg:shadow-md rounded-2xl'
          />
          {/* <Card
          image={'/internet.jpg'} 
          texto={'Redes'} 
          // content={'Las redes son conexiones invisibles que unen personas, ideas y recursos en un mundo digital. Desde redes sociales hasta sistemas de comunicación, cada enlace ofrece oportunidades para colaborar y crecer. En un entorno donde la conexión es esencial, las redes son el puente hacia un futuro lleno de posibilidades.'}
          /> */}
        </div>
      </div>

  </div>
  )
}

export default Redes