import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';
export default function Page() {
  return (
    <div className={`lg:py-18 ${styles.contenedor} lg:w-full lg:grid lg:grid-cols-4`}>
      <div className={`lg:col-span-3 ${styles.blog} px-4`} id='contenido'>
        <div id='redes' >
          <h2>Redes</h2>
          <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

          <p>{`Según Forouzan, B. (2007), “una red es un conjunto de dispositivos conectados por enlaces de un medio físico”. Entonces, se puede definir como un sistema de interconexión entre dispositivos que permite el intercambio de información y recursos entre diferentes entidades, como personas, dispositivos o sistemas. Las redes pueden clasificarse según su alcance (LAN, WAN, MAN) y su topología (estrella, bus, anillo, malla).  Su principal función es facilitar la comunicación entre usuarios y dispositivos, optimizando el uso de recursos compartidos. `}</p>
        </div>
        
        <div id='elementos'>
          <h3>Elementos de una red</h3>
          
          <p>{`Para Hallberg (2016), “una red es mucho más que la suma de sus componentes individuales. Es la interacción y la interconexión de nodos, medios, hardware, software y protocolos lo que crea un sistema de comunicación dinámico y funcional”. En este sentido, entre estos componentes esenciales se encuentran los siguientes:`}</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Emisor</strong>: Es la entidad que genera y envía el mensaje. Puede ser una persona, un dispositivo o un sistema que produce información. Por ejemplo, un usuario que envía un correo electrónico desde su computadora.
            </li>
            <li>
              <strong>Mensaje</strong>:Es la información que se desea comunicar. Puede ser en forma de texto, audio, video, entre otros formatos.  Por ejemplo, el correo electrónico con su texto adjunto.
            </li>
            <li>
              <strong>Medio</strong>:Es el canal a través del cual se transmite el mensaje. Puede ser físico, como cables, o virtual, como redes inalámbricas. Por ejemplo, la conexión a Internet a través de Wi-Fi.
            </li>
            <li>
              <strong>Receptor</strong>:Es la entidad que recibe el mensaje. Al igual que el emisor, puede ser una persona, un dispositivo o un sistema que interpreta la información recibida. Por ejemplo, el servidor de correo electrónico del destinatario.
            </li>
          </ul>
          <p>La interacción de estos elementos es fundamental para garantizar la comunicación efectiva en cualquier red, ya sea una red doméstica o una red global como Internet.</p>
        </div>

        <div id='medios'>
          <h3>Medio de comunicación</h3>
          <p>Los medios de comunicación se dividen en dos categorías principales:</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>{`Medio Alambricos (Guiados)`}</strong>:Son aquellos que utilizan cables o conductores para transmitir datos. Ejemplos incluyen:
              <ul className='list-disc list-inside'>
                <li>
                Cables de par trenzado.
                </li>
                <li>
                  Cables coaxiales.
                </li>
                <li>
                  Fibra optica.
                </li>
              </ul>
            </li>
            <li>
              <strong>{`Medios Inalámbricos (No Guiados)`}</strong>:Son aquellos que transmiten datos a través de ondas electromagnéticas, sin necesidad de cables. Ejemplos incluyen:
              <ul className='list-disc list-inside'>
                <li>Wifi</li>
                <li>Bluetooth</li>
                <li>{`Redes móviles (3G, 4G, 5G)`}</li>
                <li>Comunicaciones satelitales</li>
              </ul>
            </li>
          </ul>
        </div>

        <div id='transmision'>
          <h3>Transmisión de datos</h3>
          <p>La transmisión de datos se refiere al proceso de enviar información de un lugar a otro. Se pueden clasificar en:</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Unidades de Transmisión</strong>: Son las cantidades de datos que se envían en un solo evento de transmisión. Esto puede incluir paquetes, tramas o bits.
            </li>
            <li>
              <strong>Medios</strong>:{`Se refiere a los canales utilizados para la transmisión de datos, que pueden ser guiados (cableados) o no guiados (inalámbricos), como se mencionó anteriormente.`}
            </li>
            <li>
              <strong>Formas de transmisión</strong>:
              <ul className='list-disc list-inside'>
                <li><strong>Serie</strong>:En la transmisión en serie, los datos se envían un bit a la vez a través de un solo canal. Esto es común en conexiones de larga distancia, ya que reduce el número de líneas necesarias.</li>
                <li><strong>Paralelo</strong>:En la transmisión en paralelo, múltiples bits se envían simultáneamente a través de varios canales. Esto puede aumentar la velocidad de transmisión, pero es más adecuado para distancias cortas debido a problemas de sincronización y interferencia.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div id='medios2'>
          <h3>Medios de transmisión de datos</h3>
          <p>Los modos de transmisión de datos son las formas en las que se transfieren datos de un punto a otro. Algunos de los modos de transmisión de datos son:</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Simplex</strong>:Se transmiten datos en una sola dirección. De este modo, un dispositivo es el emisor y el otro es el receptor. El modo simplex es una forma de comunicación sencilla y asimétrica, que no permite la retroalimentación. Por ejemplo: Radio y televisión.
            </li>
            <li>
              <strong>Half-dúplex</strong>:Se transmiten datos en dos direcciones, pero no de forma simultánea. De este modo, los datos se mueven en una sola dirección a la vez, por lo que se considera una vía de un solo sentido. Por ejemplo: Walkie-talkie.
            </li>
            <li><strong>Full dúplex</strong>:Se transmiten datos en ambas direcciones de forma simultánea. De esta manera, los datos se envían y reciben a través de canales separados, que funcionan de forma independiente. Esto permite que los dispositivos transmitan y reciban datos al mismo tiempo sin conflictos. El full dúplex es la forma más común de transferencia de datos y es la más rápida. Sin embargo, requiere equipos más costosos.</li>
          </ul>
        </div>
      </div>
      
      <div className='lg:col-span-1 lg:relative lg:flex lg:pt-16 hidden'>
        <div id='side-bar' className='lg:fixed'>
          <ul>
            <Link href={'/redes#redes'}>
              <li className='text-xl mb-2 border-b-1 border-solid'>Redes</li>
            </Link>
            <Link href={'/redes#elementos'}>
              <li className='text-xl mb-2 border-b-1 border-solid'>Elementos de una red</li>
            </Link>
            <Link href={'/redes#medios'}>
              <li className='text-xl mb-2 border-b-1 border-solid'>Medio de comunicación</li>
            </Link>
            <Link href={'/redes#transmision'}>
              <li className='text-xl mb-2 border-b-1 border-solid'>Transmisión de datos</li>
            </Link>
            <Link href={'/redes#medios2'}>
              <li className='text-xl mb-2 border-b-1 border-solid'>Medios de transmisión de datos</li>
            </Link>
          </ul>
        </div>
      </div>

    </div>
  );
}