import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Page() {
  return (
    <div className={`py-18 px-2 lg:px-0 ${styles.contenedor} w-full lg:grid lg:grid-cols-4`}>
      <div className={`lg:col-span-3 ${styles.blog} px-2`} id='contenido'>
        <div id='lineas' >
          <h2>Comunicaciones</h2>
          <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

          <h3>Líneas de comunicación</h3>
          <p>Las líneas de comunicación son las vías que permiten a los circuitos de datos intercambiar información. Cuando se conectan dos o más equipos de comunicación a través de estas líneas, se forma una red de comunicación. Permiten el intercambio de mensajes entre un emisor y un receptor. Pudiendo ser:</p>
          <ul className='list-disc list-inside'>
            <li>
            Tradicionales: Radio, TV, películas, dvds, cds.
            </li>
            <li>
              Escritos
            </li>
            <li>
              Digitales: Internet, World wide web y redes sociales.
            </li>
          </ul>
          <p>En donde su función es establecer, conducir y finalizar la comunicación de datos entre el emisor y el receptor. Teniendo como objetivos:</p>
          <ul className='list-disc list-inside'>
            <li>
            Posibilitar la interrelación de las personas.
            </li>
            <li>
            Asegurar la transferencia de datos entre computadoras.
            </li>
            <li>
            Garantizar la seguridad en el cambio de mensaje.
            </li>
            <li>
            Acortar la distancia entre localidades.
            </li>
            <li>
            Hacer ágil la operación.
            </li>
            <li>
            Hacer más ágil la comunicación entre grupos.
            </li>
          </ul>
          <p>Clasificándose en:</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Líneas privadas:</strong> Su propietario no es público, por eso la línea es propiedad del poseedor de la red.
            </li>
            <li>
              <strong>Líneas públicas:</strong> Son del público como las compañías telefónicas. Su usuario contrata los servicios de comunicación con la compañía que le suministra la línea.
            </li>
            <li>
              <strong>Líneas conmutadas:</strong> Permite la comunicación con todas las partes que tengan acceso a la red telefónica pública conmutada.
            </li>
            <li>
              <strong>Líneas dedicadas:</strong> También se denominan enlaces de punto a punto porque la ruta establecida es permanente y fija.
            </li>
            <li>
              <strong>Líneas digitales:</strong> En este tipo de línea, los bits son transmitidos en forma de señales digitales. Cada bit se representa por una variación de voltaje y esta se realiza mediante codificación digital.
            </li>
            <li>
              <strong>Líneas de punto a punto:</strong> Enlazan dos DTE.
            </li>
            <li>
              <strong>Líneas multipunto:</strong> Enlazan tres o más DTE.
            </li>
            <p>{`(DTE: Equipo Terminal de Datos, son dispositivos que se encargan de mostrar información, generar o almacenar datos para el usuario. Son los puntos de inicio y final del flujo de datos de una red).`}</p>
          </ul>
        </div>
        <div id='medios'>
          <h3>Medios de conexión de redes</h3>
          <p>Son los soportes que se utilizan para interconectar los dispositivos de una red. Pueden ser cableados o inalámbricos. En donde permite el envío y recepción de datos, permite la creación de almacenamiento de datos, permite el intercambio de archivos, permite las videollamadas y  permite la transmisión de información. Entre los medios de conexión de redes tenemos:</p>
          <ul>
            <li>
              <strong>El cableado de cobre:</strong> Es el más antiguo de los sistemas ya que data de fechas antes de internet o de sistemas de conectividad de datos. Se conoce comúnmente como “Par Trenzado”,  y puede ser con o sin blindaje, con blindaje global o por par, según sus características se definen como U/UTP, U/UTF, etc…
            </li>
            <li>
              <strong>Fibra óptica:</strong> Es una tecnología que permite transmitir datos a través de hilos delgados de un material especial de alta transparencia, que puede ser bien vidrio o polímero. La fibra óptica maneja mejor los anchos de banda que el cobre y puede extenderse largas distancias sin pérdidas, permitiendo velocidades de hasta 10 GBPS en distancias de hasta 40KM.
            </li>
            <li>
              <strong>Radiofrecuencia:</strong> Son sistemas que funcionan vía ondas de radio, y tal como se visualizan en sistemas de radiodifusión, funcionan en frecuencias. Las frecuencias más comunes son 2,4, 5, 12 y 24 hz; sin embargo, se debe tener presente que en cada país, se contemplan leyes que permiten o no el uso libre de las mismas.
            </li>
          </ul>
        </div>
        <div id='cables'>
          <h3>Tipos de cables</h3>
          <p>De acuerdo con William Stallings, en su libro "Data and Computer Communications", define el cable UTP como "un medio de transmisión compuesto por pares de hilos trenzados que no tienen una capa de blindaje. Es económico y comúnmente usado en redes Ethernet".<br></br><br></br>Por otro lado, Behrouz A. Forouzan, en su libro "Data Communications and Networking", describe el cable STP como "un tipo de cable que tiene una capa de blindaje para cada par trenzado o una sola capa para todo el cable. Este blindaje ayuda a reducir la interferencia y la diafonía".<br></br><br></br>{`Por ello, en el ámbito de las redes de datos, la selección del cableado adecuado es fundamental para garantizar el rendimiento y la confiabilidad de la transmisión de datos. El cable UTP, ampliamente utilizado en redes domésticas y de oficina, se caracteriza por su bajo costo y facilidad de instalación, consistiendo en pares de hilos de cobre trenzados entre sí, pero careciendo de una malla de blindaje que los proteja de las interferencias electromagnéticas (EMI) y de radiofrecuencia (RFI). En entornos con bajos niveles de interferencia, el cable UTP ofrece un rendimiento adecuado para la mayoría de las aplicaciones de red. Por otro lado, el cable STP, utilizado en entornos con altos niveles de ruido electromagnético, como instalaciones industriales y centros de datos, cuenta con una malla de blindaje que rodea los pares de hilos trenzados. Este blindaje proporciona una mayor protección contra las interferencias electromagnéticas, lo que permite transmisiones de datos más estables y a mayores velocidades. Sin embargo, el cable STP es más costoso y requiere una instalación más cuidadosa, incluyendo la conexión a tierra del blindaje para garantizar su eficacia. En resumen, la elección entre cable UTP y STP dependerá de las necesidades específicas de la red y del entorno en el que se vaya a utilizar. Si se requiere una alta protección contra interferencias, el cable STP puede ser la mejor opción, mientras que si el entorno no es especialmente ruidoso, el cable UTP puede ser suficiente.`}<br></br><br></br>Además, estos tipos cables pueden contar con los conectores RJ11 y RJ45 que se erigen como elementos esenciales para el establecimiento de enlaces de comunicación confiables.</p>
        </div>
        <div id='conectores'>
          <h3>Implementación del cableado con RJ45</h3>
          <p>Los cables directos, empleados para enlazar dispositivos de distinta tipología, mantienen la correspondencia de pines de transmisión y recepción en ambos extremos del cable, mientras que los cables cruzados, destinados a la conexión de dispositivos de la misma clase, invierten dichos pines en uno de los extremos. <br></br> <br></br>El estándar 568A, de uso más extendido en la actualidad, establece un orden de pines específico para cables directos, al igual que el estándar 568B, si bien este último presenta una menor prevalencia. La selección entre ambos estándares y la configuración directa o cruzada del cableado dependerá de las necesidades particulares de la red y de los dispositivos que se pretenden interconectar.<br></br> <br></br>A continuación en la Figura 1.0 se muestra los distintos órdenes de pines utilizados según los distintos estándares:</p>
          <Image
            src={'/normas.jpeg'}
            height={340}
            width={360}
            alt='normas del cableado'
          /> 
          <p>Tras comprender los protocolos de cableado definidos por las normas EIA/TIA 568A y 568B, se torna esencial comprender las especificaciones técnicas de los cables de UTP y STP, así como los desafíos inherentes que pueden incidir en su desempeño.</p>
        </div>
        <div id='especificaciones'>
          <h3>Especificaciones de cables</h3>
          <p>Proporcionan información esencial sobre sus capacidades y limitaciones, lo que permite determinar su capacidad para diversas aplicaciones y entornos de red. Estas características, que incluyen la velocidad de transmisión, resistencia a las interferencias y la atenuación de la señal, son cruciales para seleccionar el cableado óptimo en función de las necesidades específicas de cada red.</p>
          <p>{`Las especificaciones del cable UTP varían según sus categorías, que van desde Cat 3 hasta Cat 8. La categoría 3 admite velocidades de hasta 10 Mbps y se usa principalmente en aplicaciones telefónicas. La categoría 5e, una mejora del Cat 5, soporta velocidades de hasta 1 Gbps, mientras que la categoría 6 puede alcanzar hasta 10 Gbps en distancias cortas (hasta 55 metros). La categoría 6a mejora esta distancia a 100 metros. Finalmente, la categoría 8 está diseñada para centros de datos y soporta velocidades de hasta 40 Gbps. Estas categorías indican el rendimiento y la capacidad de transmisión de datos del cable, mejorando la resistencia a interferencias y la calidad de la señal con cada avance.`}</p>
          <p>{`Similar al UTP en sus categorías, el STP incluye un blindaje adicional que proporciona una mayor protección contra la diafonía y las interferencias externas. Las especificaciones del cable STP incluyen categorías como Cat 5, Cat 5e, Cat 6, y Cat 6a, con capacidades de transmisión de datos y velocidades similares a sus contrapartes UTP, pero con una mayor integridad de señal en ambientes ruidosos. Por ejemplo, la categoría 5e soporta hasta 1 Gbps, y la categoría 6a hasta 10 Gbps en distancias de 100 metros. El blindaje adicional del STP lo hace ideal para aplicaciones industriales y entornos con equipos electrónicos pesados, garantizando una transmisión de datos más fiable en condiciones adversas.`}</p>
        </div>

      </div>
      <div id='side-bar' className='lg:col-span-1 lg:relative lg:pt-16 lg:flex hidden'>
        <div className='lg:fixed'>
        <ul>
          <Link href={'/comunicaciones#lineas'}>
            <li className='text-xl mb-2 border-b-1 border-solid'>Líneas de comunicación</li>
          </Link>
          <Link href={'/comunicaciones#medios'}>
            <li className='text-xl mb-2 border-b-1 border-solid'>Medios de conexión de redes</li>
          </Link>
          <Link href={'/comunicaciones#cables'}>
            <li className='text-xl mb-2 border-b-1 border-solid'>Tipos de cables</li>
          </Link>
          <Link href={'/comunicaciones#conectores'}>
            <li className='text-xl mb-2 border-b-1 border-solid'>Implementación del cableado con RJ45</li>
          </Link>
          <Link href={'/comunicaciones#especificaciones'}>
            <li className='text-xl mb-2 border-b-1 border-solid'>Especificaciones de cables</li>
          </Link>
        </ul>
        </div>

      </div>
    </div>
  );
}