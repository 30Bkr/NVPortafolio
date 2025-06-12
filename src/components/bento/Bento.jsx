import React from 'react'
import { BentoItem } from './BentoItem'
import styles from '../../app/page.module.css'

const Bento = () => {
  const bigBentoPart = ' h-80 lg:col-span-6 lg:h-90 lg:w-full lg:rounded-2xl lg:text-justify';
  const smallBentoPart = 'lg:col-span-4 lg:h-90 lg:w-full h-70 w-full lg:rounded-2xl lg:text-justify';
  return (
    <div className={`w-full`}>
      <div className={`${styles.contenedor} lg:py-8 lg:px-4 p-8`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 '>Objetivos</h2>
          <p className='text-3xl text-slate-900 mb-8'>Desarrollar un sistema de inscripción para la unidad educativa nacional "Nuevo Horizonte</p>
          {/* <p className='text-gray-600'>¿Alguna vez te has preguntado cómo viaja la información desde tu dispositivo hasta el mundo digital? Descubre los secretos detrás de las líneas de comunicación, los medios de conexión y los tipos de cables que hacen posible la magia de internet.</p> */}
        </div>
        <div className={` flex flex-col h-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-10 lg:grid-rows-2 gap-4 `}>
          <BentoItem estilo={bigBentoPart} title={'Diagnosticar'} image={'/firma.jpeg'}
            content={'Diagnosticar las necesidades y problemáticas existentes en el proceso actual de inscripción de la Unidad Educativa Nacional "Nuevo Horizonte".'}
            // barra={'/comunicaciones#lineas'}
            // Imagina un mundo donde la información fluye sin barreras, donde cada dispositivo, desde tu teléfono hasta tu computadora, está interconectado, compartiendo datos en un abrir y cerrar de ojos. Las líneas de comunicación en redes son el corazón de esta realidad, los canales invisibles que hacen posible la conectividad y el intercambio de ideas en nuestra era digital.
          />
          <BentoItem estilo={smallBentoPart}  title={`Planificar`} image={'/planificar.jpg'}
            // barra={'/comunicaciones#medios'}
            content={'Planificar el desarrollo del sistema de inscripción del Sistema de Inscrición para la Unidad Educativa Nacional "Nuevo Horizonte", integrando las necesidades y propuestas de la comunidad educativa'}
            // En el mundo digital, los medios de comunicación en redes conectan dispositivos y personas, permitiendo un flujo instantáneo de información. Sin ellos, el intercambio de datos sería caótico. Recuerda que detrás de cada conexión hay un universo que transforma nuestras vidas. ¡Explora y disfruta!
          />
          <BentoItem estilo={smallBentoPart} title={'Implementar'} image={'/implementar.jpg'}
            content={'Implementar el Sistema de Incripción para la Unidad Educativa Nacional "Nuevo Horizonte", realizando ajustes y mejoras continuas en función de la retroalimentación de los usuarios.'}
            // barra={'/comunicaciones#cables'}
            // En un mundo donde la información fluye a gran velocidad, los cables y conectores son los héroes anónimos que sostienen nuestra vida digital, conectando cada rincón cotidiano. Imagina un océano de datos, donde los cables son esenciales para la comunicación y los conectores, siendo la llave maestra que permite que hace posible la magia de la red en nuestra realidad diaria.
          />
          <BentoItem estilo={bigBentoPart} title={'Evaluar'} image={'/evaluar.png'}
            content={'Evaluar el funcionamiento y la eficacia del Sistema de Inscripción para la Unidad Educativa Nacional "Nuevo Horizonte", identificando áreas de mejora y garantizando su óptimo rendimiento a largo plazo.'}
            // barra={'/comunicaciones#especificaciones'}
            //¡Imagina un mundo donde la información fluye instantáneamente! Las velocidades de transmisión de datos son clave, ya que determinan la rapidez con la que enviamos y recibimos información. En un entorno digital lleno de streaming y aplicaciones en la nube, una conexión veloz asegura experiencias sin interrupciones y permite a las empresas innovar y ser competitivas. En este mundo, ¡la velocidad lo es todo!
          />
        </div>
      </div>

    </div>

  )
}

export default Bento