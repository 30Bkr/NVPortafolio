import React from 'react'
import { BentoItem } from './BentoItem'
import styles from '../../app/page.module.css'

const Bento = () => {
  const bigBentoPart = 'col-span-6 h-90 w-full rounded-2xl text-justify';
  const smallBentoPart = 'col-span-4 h-90 w-full rounded-2xl text-justify';
  return (
    <div className={`w-full`}>
      <div className={`${styles.contenedor} py-8 px-4`}>
        <div className={`${styles.cajon}`}>
          <h2 className='text-xl text-blue-800 '>Medios de comunicación</h2>
          <p className='text-3xl text-slate-900 mb-8'>Conexiones invisibles: El viaje de tus datos a través de la red</p>
          <p className='text-gray-600'>¿Alguna vez te has preguntado cómo viaja la información desde tu dispositivo hasta el mundo digital? Descubre los secretos detrás de las líneas de comunicación, los medios de conexión y los tipos de cables que hacen posible la magia de internet.</p>
        </div>
        <div className={`grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4`}>
          <BentoItem estilo={bigBentoPart} title={'¡Descubre el Poder de las Líneas de Comunicación en Redes!'} image={'/lineas.jpg'}
            content={'Imagina un mundo donde la información fluye sin barreras, donde cada dispositivo, desde tu teléfono hasta tu computadora, está interconectado, compartiendo datos en un abrir y cerrar de ojos. Las líneas de comunicación en redes son el corazón de esta realidad...'}
            // Imagina un mundo donde la información fluye sin barreras, donde cada dispositivo, desde tu teléfono hasta tu computadora, está interconectado, compartiendo datos en un abrir y cerrar de ojos. Las líneas de comunicación en redes son el corazón de esta realidad, los canales invisibles que hacen posible la conectividad y el intercambio de ideas en nuestra era digital.
          />
          <BentoItem estilo={smallBentoPart}  title={`¡Conéctate con el Futuro! Los Medios de Comunicación en Redes son el Futuro.`} image={'/medios.jpg'}
            content={'En el mundo digital, los medios de comunicación en redes conectan dispositivos y personas, permitiendo un flujo instantáneo de información. Sin ellos...'}
            // En el mundo digital, los medios de comunicación en redes conectan dispositivos y personas, permitiendo un flujo instantáneo de información. Sin ellos, el intercambio de datos sería caótico. Recuerda que detrás de cada conexión hay un universo que transforma nuestras vidas. ¡Explora y disfruta!
          />
          <BentoItem estilo={smallBentoPart} title={'Cables y Conectores: Los Héroes Anónimos de la Danza Digital'} image={'/cableado.jpg'}
            content={'En un mundo donde la información fluye a gran velocidad, los cables y conectores son los héroes anónimos que sostienen nuestra vida digital, conectando cada rincón cotidiano. Imagina un océano...'}
            // En un mundo donde la información fluye a gran velocidad, los cables y conectores son los héroes anónimos que sostienen nuestra vida digital, conectando cada rincón cotidiano. Imagina un océano de datos, donde los cables son esenciales para la comunicación y los conectores, siendo la llave maestra que permite que hace posible la magia de la red en nuestra realidad diaria.
          />
          <BentoItem estilo={bigBentoPart} title={'Velocidades de transmisión'} image={'/velocidades.jpg'}
            content={'¡Imagina un mundo donde la información fluye instantáneamente! Las velocidades de transmisión de datos son clave, ya que determinan la rapidez con la que enviamos y recibimos información. En un entorno digital lleno de streaming y aplicaciones en la nube, una conexión veloz asegura experiencias sin...'}
            //¡Imagina un mundo donde la información fluye instantáneamente! Las velocidades de transmisión de datos son clave, ya que determinan la rapidez con la que enviamos y recibimos información. En un entorno digital lleno de streaming y aplicaciones en la nube, una conexión veloz asegura experiencias sin interrupciones y permite a las empresas innovar y ser competitivas. En este mundo, ¡la velocidad lo es todo!
          />
        </div>
      </div>

    </div>

  )
}

export default Bento