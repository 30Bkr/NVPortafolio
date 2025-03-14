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
          <h2 className='text-xl text-blue-800 '>Medios de comunicacion</h2>
          <p className='text-3xl text-slate-900 mb-8'>¿Como se conectan los dispositivos a internet?</p>
          <p className='text-gray-600'>Los dispositivos se conectan a internet mediante cables, ondas de radio, o a través de redes inalámbricas</p>
        </div>
        <div className={`grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4`}>
          <BentoItem estilo={bigBentoPart} title={'¡Descubre el Poder de las Líneas de Comunicación en Redes!'} image={'/lineas.jpg'}
            content={'Imagina un mundo donde la información fluye sin barreras, donde cada dispositivo, desde tu teléfono hasta tu computadora, está interconectado, compartiendo datos en un abrir y cerrar de ojos. Las líneas de comunicación en redes son el corazón de esta realidad, los canales invisibles que hacen posible la conectividad y el intercambio de ideas en nuestra era digital.'}
          />
          <BentoItem estilo={smallBentoPart}  title={`¡Conéctate con el Futuro! Los Medios de Comunicación en Redes son el Futuro.`} image={'/medios.jpg'}
            content={'En el mundo digital, los medios de comunicación en redes conectan dispositivos y personas, permitiendo un flujo instantáneo de información. Sin ellos, el intercambio de datos sería caótico. Recuerda que detrás de cada conexión hay un universo que transforma nuestras vidas. ¡Explora y disfruta!'}
          />
          <BentoItem estilo={smallBentoPart} title={'Cables y Conectores: Los Héroes Anónimos de la Danza Digital'} image={'/cableado.jpg'}
            content={'En un mundo donde la información se mueve a la velocidad de la luz, los cables y conectores son los héroes anónimos que sostienen nuestra danza digital, conectando cada rincón de nuestra vida cotidiana. Imagina un océano de datos, donde cada ola representa un mensaje o una idea; los cables que serpentean por nuestras paredes son esenciales para esta inmensa red de comunicación. Los conectores, como el RJ-45, actúan como la llave maestra de la conectividad, haciendo posible que cada conexión y dispositivo funcione, convirtiendo la magia de la red en parte de nuestra realidad diaria.'}
          />
          <BentoItem estilo={bigBentoPart} title={'Velocidades transmisión'} image={'/velocidades.jpg'}/>
        </div>
      </div>

    </div>

  )
}

export default Bento