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
          <h2 className='text-xl text-blue-800 mb-4'>Proyecto sociotecnologico</h2>
          <p className='text-3xl text-slate-900 font-semibold mb-4'>Sistema de inscripción para la Unidad Educativa Nacional "Nuevo Horizonte"</p>
          <p className='text-gray-900 '>En la era digital, las redes informáticas son mucho más que cables y routers. Son el lenguaje secreto que permite la comunicación instantánea y el intercambio de información a escala global. ¿Te atreves a descifrarlo? Si la respuesta es “sí”, aquí podrás conocer:</p>
          <ul className='text-gray-900 mt-4 list-inside list-(var()) w-80'>
            <Link href={'https://www.google.com/maps/place/Escuela+Nacional+Nuevo+Horizonte/@10.5174239,-66.9793827,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a5e38c6746349:0x5a2103614a1f2e05!8m2!3d10.5174239!4d-66.9768078!16s%2Fg%2F11c1n135s3?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D'}
              target='_blank'
            >
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Ubicación</li>
            </Link>
            <Link href={'/redes#medios'}>
             <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Medios de comunicación</li>
            </Link>
            <Link href={'/redes#transmision'}>
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Transmisión de datos</li>
            </Link>
            <Link href={'/redes#medios2'}>
              <li className='text-blue-600 hover:underline underline-offset-1 pl-4'>Medios de transmisión de datos</li>
            </Link>
          </ul>
        </div>
        <div className='lg:absolute lg:right-0 px-4 mt-4 rounded-'>
          <Image 
            src={'/pared.jpeg'}
            height={480}
            width={550}
            // fill
            alt='Nuevo horizonte'
            className='lg:rounded-2xl lg:rounded-r-none lg:shadow-md rounded-2xl w-80 h-80' 
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