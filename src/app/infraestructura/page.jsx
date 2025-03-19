import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
export default function Page() {
  return (
    <div className={`py-18 ${styles.contenedor} w-full grid grid-cols-4`}>
      <div className='col-span-3 bg-red-300' id='contenido'>
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>

        <div id='Servicios'>
          <h2>Servicios y protocolos</h2>
          <h3>Servicios de red</h3>
          <p>Los servicios de redes son aplicaciones y funcionalidades que permiten a los dispositivos en una red comunicarse y compartir recursos. Estos servicios son esenciales para el funcionamiento de Internet y las redes locales. Algunos ejemplos incluyen:</p>
          <ul className='list-decimal list-inside'>
            <li>
              Servicio de paginas web
              {/* <h3>Servicio de páginas web</h3> */}
            </li>
            <p>Hypertext Transfer Protocol / Hypertext Transfer Protocol Secure (HTTP/HTTPS): Protocolo de Transferencia de Hipertexto, el cual permite el acceso a páginas web y otros contenidos en línea.</p>
            <li>
              Servicio de transferencia de archivo
              {/* <h3>Servicio de transferencia de archivos</h3> */}
            </li>
            <p>
              {`File Transfer Protocol (FTP): Protocolo de Transferencia de Archivos, utilizado para la transferencia de archivos entre computadoras a través de una red.`}
            </p>
            <li>
              Servicios de correo electronico
            </li>
            <ul className='list-disc list-inside'>
              <li>
              {`Simple Mail Transfer Protocol (SMTP): Protocolo Simple de Transferencia de Correo, utilizado para el envío de correos electrónicos desde un cliente a un servidor o entre servidores de correo.`}
              </li>
              <li>
                {`Post Office Protocol version 3 (POP3): Protocolo de Oficina de Correos versión 3,  utilizado para la recuperación de correos electrónicos desde un servidor. Permite a los usuarios descargar sus correos electrónicos a su dispositivo local y, generalmente, elimina los correos del servidor una vez que han sido descargados.`}
              </li>
              <li>
                {`Internet Message Access Protocol (IMAP): Protocolo de Acceso a Mensajes de Internet, también es utilizado para la recuperación de correos electrónicos, pero a diferencia de POP3, permite a los usuarios acceder y gestionar sus correos electrónicos directamente en el servidor. Esto significa que los correos se pueden ver desde múltiples dispositivos sin ser eliminados del servidor.`}
              </li>
            </ul>
            <li>Servicio de nombres de dominio</li>
            <p>{`Domain Name System (DNS): Sistema de Nombres de Dominio, que traduce nombres de dominio (como "google.com") a direcciones IP (como "172.217.160.142"), lo que facilita el acceso a sitios web y otros recursos en línea.`}</p>
            <li>Servicio de red</li>
            <p>{`Dynamic Host Configuration Protocol (DHCP): Protocolo de Configuración Dinámica de Host, que asigna  automáticamente direcciones IP y otros parámetros a los dispositivos en una red.`}</p>
          </ul>
          <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>
          <h3>Protocolos de red</h3>
          <p>Los protocolos de redes son conjuntos de reglas y estándares que definen cómo los dispositivos se comunican a través de una red. Estos protocolos aseguran que los datos se transmitan de manera confiable y eficiente. Algunos de los protocolos más importantes incluyen:</p>
          <ul className='list-decimal list-inside'>
          <li>Protocolo de Internet / Internet Protocol (IP): Es el protocolo fundamental que define cómo se direccionan y enrutan los paquetes de datos a través de Internet. Existen dos versiones principales:</li>
          <ul className='list-disc list-inside'>
            <li>IPv4: Utiliza direcciones de 32 bits.</li>
            <li>IPv6: Utiliza direcciones de 128 bits y se diseñó para reemplazar IPv4 debido a la escasez de direcciones.</li>
          </ul>
          <li>{`Protocolo de Control de Transmisión / Transmission Control Protocol (TCP): Proporciona una conexión confiable y orientada a la conexión para la transmisión de datos.`}</li>
          <li>{`Protocolo de Datagramas de Usuario / User Datagram Protocol (UDP): Permite la transmisión de datos sin la sobrecarga de conexión que tiene TCP, ideal para aplicaciones que requieren velocidad, como el streaming.`}</li>
          <li>{`Protocolo de Transferencia de Hipertexto / Hypertext Transfer Protocol (HTTP): Define cómo se transfieren las páginas web y otros contenidos en línea.`}</li>
          <li>{`Protocolo de Transferencia de Archivos / File Transfer Protocol (FTP): Permite la transferencia de archivos entre un cliente y un servidor.`}</li>
          <li>{`Protocolo de Resolución de Direcciones / Address Resolution Protocol (ARP): Se utiliza para mapear direcciones IP a direcciones MAC en una red local.`}</li>
        </ul>
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>
        <h3>La interdependencia: Servicios y protocolos trabajando juntos</h3>
        <p>La relación entre servicios y protocolos de red es fundamental y de interdependencia. Podemos entenderla mejor con la siguiente analogía:</p>
        <ul className='list-disc list-inside'>
          <li><strong>Servicios:</strong> {`Son como las aplicaciones que utilizamos en nuestro día a día (correo electrónico, navegación web, etc.). Son lo que el usuario final percibe y con lo que interactúa.`}</li>
          <li><strong>Protocolos:</strong> {`Son como las reglas y el lenguaje que permiten que esas aplicaciones funcionen. Definen cómo se envían, reciben y procesan los datos. `}</li>
        </ul>
        <h3>Diferencias clave</h3>
        <p>Para clarificar aún más, se puede observar una tabla que resume las principales diferencias:</p>
        <Image 
        src={'/diferencias.jpeg'}
        width={320}
        height={240}
        alt='Diferencias entre protocolos y servicios'
        className='w-120 h-70'
        />
        <h3>Ejemplos</h3>
        <ul className='list-disc list-inside'>
          <li><strong>Navegacion web</strong></li>
          <ul className='list-disc list-inside ml-4'>
            <li>El servicio es la visualización de páginas web en tu navegador.
            </li>
            <li>{`El protocolo HTTP (o HTTPS) define cómo se solicitan y se transfieren esas páginas desde el servidor al navegador.`}</li>
          </ul>
          <li><strong>Correo electronico</strong></li>
          <ul className='list-disc list-inside ml-4'>
            <li>El servicio es el envío y recepción de mensajes.</li>
            <li>{`Los protocolos SMTP, POP3, e IMAP, son los que permiten que los mensajes sean enviados y recibidos correctamente.`}</li>
          </ul>
          <li><strong>Transferencia de archivos</strong></li>
          <ul className='list-disc list-inside ml-4'>
            <li>El servicio, es la transferencia de un archivo entre dos computadoras.
            </li>
            <li>{`El protocolo FTP, es el que permite que estos archivos sean enviados de manera correcta.`}</li>
          </ul>
          
        </ul>
        </div>

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>

        <div id='puertos'>
          <h2>Puertos TCP / UDP</h2>
          <p>
          Los puertos son puntos de comunicación virtual donde las aplicaciones se conectan para enviar y recibir datos. Se representan como números de 16 bits, lo que significa que pueden variar de 0 a 65535. En este sentido, las aplicaciones utilizan números de puerto para poder comunicarse entre sí. Por ejemplo, el puerto 80 es utilizado para el protocolo HTTP, y el 443 para el protocolo HTTPS.
          </p>
          <h3>¿Cómo funcionan los puertos con TCP y UDP?</h3>
          <p>
          Tanto TCP (Protocolo de Control de Transmisión) como UDP (Protocolo de Datagramas de Usuario) utilizan puertos para identificar las aplicaciones que envían y reciben datos. La diferencia principal radica en cómo estos protocolos manejan la comunicación:
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>{`TCP (Transmission Control Protocol o Protocolo de Control de Transmisión)`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es un protocolo orientado a la conexión, lo que significa que establece una conexión antes de enviar datos.</li>
                <li>Utiliza un sistema de reconocimiento para verificar que los paquetes de datos lleguen correctamente.</li>
                <li>Es más lento que UDP debido a la sobrecarga de la conexión y la verificación.</li>
                <li>{`Es ideal para aplicaciones que requieren alta confiabilidad, como la navegación web (HTTP/HTTPS), el correo electrónico (SMTP, POP3, IMAP) y la transferencia de archivos (FTP).`}</li>
              </ul>
            </li>
            <li><strong>{`UDP (User Datagram Protocol o Protocolo de Datagramas de Usuario)`}</strong>
            <ul className='list-disc list-inside'>
              <li>Es un protocolo sin conexión, lo que significa que no establece una conexión antes de enviar datos.</li>
              <li>Es más rápido que TCP debido a la falta de conexión y verificación, pero no garantiza la entrega confiable de datos ni el orden de llegada.</li>
              <li>Es adecuado para aplicaciones que priorizan la velocidad sobre la confiabilidad, como la transmisión de video y audio en tiempo real, los juegos en línea y las videoconferencias.
              </li>
            </ul>
            </li>
          </ul>
          <h3>Diferencias</h3>
          <Image 
            src={'/utp.jpeg'}
            width={320}
            height={240}
            alt='Diferencias entre protocolos y servicios'
            className='w-120 h-180'
          />
        </div>

        <div id='OSI'>
          <h2>Modelo OSI</h2>
          <p>{`El Modelo de Interconexión de Sistemas Abiertos (OSI, por sus siglas en inglés Open Systems Interconnection) es un modelo conceptual creado por la Organización Internacional de Normalización (ISO) en 1984. Su objetivo principal es estandarizar la comunicación entre diferentes sistemas informáticos, independientemente de su fabricante o tecnología.`}</p>
          <h3>Caracteristicas principales:</h3>
          <ul className='list-disc list-inside'>
            <li><strong>Modelo de referencia:</strong>
              <ul className='list-disc list-inside'>
                <li>No es un protocolo en sí mismo, sino un marco teórico que describe cómo deben interactuar los protocolos de comunicación.</li>
              </ul>
            </li>
            <li><strong>Estructura en capaz:</strong>
              <ul className='list-disc list-inside'>
                <li>Divide el proceso de comunicación en siete capas distintas, cada una con funciones específicas.</li>
              </ul>
            </li>
            <li><strong>Estandarizacion:</strong>
              <ul className='list-disc list-inside'>
                <li>Facilita la interoperabilidad entre sistemas de diferentes proveedores.</li>
              </ul>
            </li>
            <li><strong>Resolucion de problemas:</strong>
              <ul className='list-disc list-inside'>
                <li>Ayuda a identificar y solucionar problemas de red al aislar las funciones de cada capa.</li>
              </ul>
            </li>
          </ul>
          <p>Las 7 capas del modelo OSI:</p>
          <ul className='list-decimal list-inside'>
            <li><strong>{`Capa fisica (Physical Layer)`}</strong>
              <ul className='list-disc list-inside'>
                <li>{`Se encarga de la transmisión de bits a través del medio físico (cables, ondas, etc.).`}</li>
                <li>Define las características eléctricas, mecánicas y funcionales de la conexión física.</li>
                <li>Ejemplos: Cables Ethernet, fibra óptica, señales de radio.</li>
              </ul>
            </li>
            <li><strong>{`Capa de enlace de datos (Data Link Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>{`Proporciona acceso al medio físico y se encarga de la transmisión de tramas (frames) entre nodos adyacentes.`}</li>
                <li>Realiza la detección y corrección de errores en la capa física.</li>
                <li>Ejemplos: Ethernet, Wi-Fi.</li>
              </ul>
            </li>
            <li><strong>{`Capa de red (Network Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>{`Se encarga del enrutamiento de paquetes (packets) entre diferentes redes.`}</li>
                <li>{`Define el direccionamiento lógico (direcciones IP) para determinar la mejor ruta para el envío de paquetes.`}</li>
                <li>{`Ejemplo de Protocolo en esta capa: IP (Internet Protocol).`}</li>
              </ul>
            </li>
            <li><strong>{`Capa de transporte (Transport Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>Proporciona la transferencia confiable de datos entre aplicaciones.</li>
                <li>
                Realiza la segmentación y reensamblado de datos.
                </li>
                <li>
                  {`Ejemplos de Protocolos en esta capa: TCP (Transmission Control Protocol) y UDP (User Datagram Protocol).`}
                </li>
              </ul>
            </li>
            <li><strong>{`Capa de sesión (Session Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>
                Establece, gestiona y finaliza las sesiones de comunicación entre aplicaciones.
                </li>
                <li>
                Controla  y sincroniza el diálogo entre aplicaciones.
                </li>
              </ul>
            </li>
            <li><strong>{`Capa de presentación (Presentation Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>
                  Se encarga de la presentación de los datos en un formato comprensible para las aplicaciones.
                </li>
                <li>
                  Realiza la conversión de formatos y el cifrado/descifrado de datos.
                </li>
              </ul>
            </li>
            <li><strong>{`Capa de aplicación (Application Layer):`}</strong>
              <ul className='list-disc list-inside'>
                <li>
                  Proporciona servicios de red a las aplicaciones del usuario final.
                </li>
                <li>
                Esta capa interactúa directamente con el software de aplicación, como navegadores web y clientes de correo electrónico.
                </li>
                <li>
                  {`Ejemplos: HTTP (Hypertext Transfer Protocol), SMTP (Simple Mail Transfer Protocol), FTP (File Transfer Protocol).`}
                </li>
              </ul>
            </li>
          </ul>
          <p>El modelo OSI es fundamental para entender cómo se comunican los dispositivos en una red y ayuda a los ingenieros y técnicos a diseñar y solucionar problemas en sistemas de comunicación. Aunque en la práctica no todos los protocolos siguen estrictamente este modelo, sigue siendo una referencia importante en el ámbito de las redes.</p>
        </div>

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>

        <div id='TCP'>
          <h2>Modelo TCP/IP</h2>
          <p>El modelo TCP/IP (Transmission Control Protocol/Internet Protocol) es un conjunto de protocolos de comunicación que se utiliza para interconectar dispositivos en redes, incluyendo Internet. A diferencia del modelo OSI, que tiene siete capas, el modelo TCP/IP se compone de cuatro capas principales. A continuación se presenta un resumen de cada capa:</p>
          <ul className='list-decimal list-inside'>
            <li>
              <strong>{`Capa de Aplicación (Application Layer)`}</strong>
              <br></br>
              <p>{`Esta capa es responsable de la interacción con el usuario final y proporciona servicios de red a las aplicaciones. Incluye protocolos como HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol) y DNS (Domain Name System). La capa de aplicación se encarga de la presentación de datos y la comunicación entre aplicaciones.`}</p>
            </li>
            <li>
              <strong>{`Capa de Transporte (Transport Layer)`}</strong>
              <p>Proporciona la transferencia de datos entre sistemas finales y asegura la entrega confiable de los mismos. Los dos protocolos principales en esta capa son:</p>
              <br />
              <ul className='list-disc list-inside'>
                <li><strong>{`TCP (Transmission Control Protocol):`}</strong> Protocolo orientado a la conexión que garantiza la entrega de datos, controla el flujo y realiza la corrección de errores.</li>
                <li><strong>{`UDP (User Datagram Protocol):`}</strong> Protocolo no orientado a la conexión que permite el envío de datagramas sin garantía de entrega, ideal para aplicaciones que requieren velocidad y pueden tolerar pérdidas de datos.</li>
              </ul>
            </li>
            <li>
              <strong>{`Capa de Internet (Internet Layer)`}</strong>
              <p>Se encarga del enrutamiento de paquetes a través de diferentes redes. El protocolo principal en esta capa es el IP (Internet Protocol), que se utiliza para direccionar y enviar paquetes de datos. El IP puede ser de dos versiones: IPv4 e IPv6. También incluye protocolos como ICMP (Internet Control Message Protocol), que se utiliza para enviar mensajes de control y error entre dispositivos de red.</p>
            </li>
            <li>
              <strong>{`Capa de Acceso a la Red (Network Access Layer)`}</strong>
              <p>Esta capa se ocupa de la transmisión de datos a través de la red física. Incluye las especificaciones de hardware y los protocolos que permiten la comunicación a través de diferentes medios físicos, como Ethernet, Wi-Fi y otros. A menudo, esta capa se refiere a la capa de enlace de datos y la capa física del modelo OSI.</p>
            </li>
          </ul>
          <h3>Caracteristicas del modelo TCP/IP:</h3>
          <ul className='list-disc list-inside'>
            <li><strong>Interoperabilidad</strong>: Permite que diferentes sistemas y dispositivos se comuniquen entre sí, independientemente de sus arquitecturas o plataformas.</li>
            <li><strong>Escalabilidad</strong>: Diseñado para crecer y adaptarse a una gran cantidad de dispositivos y redes.</li>
            <li><strong>Flexibilidad</strong>: Permite el uso de diferentes protocolos en las capas de transporte y de acceso a la red, lo que facilita la implementación de nuevas tecnologías.</li>
          </ul>
          <p>
          El modelo TCP/IP es fundamental para el funcionamiento de Internet y ha sido la base de la comunicación en red desde su desarrollo en la década de 1970. Su diseño robusto y su capacidad para adaptarse a nuevas tecnologías lo han convertido en un estándar global para la interconexión de redes.
          </p>
          <h3>Diferencias entre Modelo TCP/IP y Modelo OSI</h3>
          <p>Para apreciar las diferencias claves entre estos dos modelos, se presenta la siguiente tabla:</p>
          <Image 
            src={'/ositcp.jpeg'}
            width={320}
            height={240}
            alt='Diferencias entre protocolos y servicios'
            className='w-120 h-200'
          />
        </div>

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>

        
        <div id='cableado'>
          <h2>Elementos y Normas de Cableado estructurado</h2>
          <p>El cableado estructurado es un sistema de cableado genérico y organizado que permite la transmisión de señales de voz, datos y vídeo en un edificio o campus. Su objetivo es proporcionar una infraestructura de red flexible, escalable y confiable que pueda soportar diversas aplicaciones y tecnologías.</p>
          <h3>Elemntos del cableado estructurado</h3>
          <p>Un sistema de cableado estructurado se compone de los siguientes elementos principales:</p>
          <ul className='list-disc list-inside'>
            <li><strong>Cableado horizontal</strong>
              <ul className='list-disc list-inside'>
                <li>Es el cableado que se extiende desde el área de trabajo hasta el cuarto de telecomunicaciones.</li>
                <li>{`Generalmente se utiliza cable de par trenzado (UTP) o fibra óptica.`}</li>
              </ul>
            </li>
            <li><strong>{`Cableado vertical (backbone):`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es el cableado que conecta los diferentes cuartos de telecomunicaciones.</li>
                <li>{`Suele utilizar cables de fibra óptica o cables de par trenzado de alta categoría.`}</li>
              </ul>
            </li>
            <li><strong>{`Cuarto de telecomunicaciones:`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es el espacio donde se concentran los equipos de conexión y distribución del cableado horizontal y vertical.</li>
                <li>{`Contiene paneles de parcheo, switches, routers y otros dispositivos de red.`}</li>
              </ul>
            </li>
            <li><strong>{`Área de trabajo:`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es el espacio donde se encuentran los usuarios y sus equipos.</li>
                <li>{`Incluye tomas de pared, cables de conexión y otros componentes.`}</li>
              </ul>
            </li>
            <li><strong>{`Cuarto de entrada de servicios:`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es el punto donde los servicios de telecomunicaciones externos ingresan al edificio.</li>
              </ul>
            </li>
            <li><strong>{`Sistema de puesta a tierra:`}</strong>
              <ul className='list-disc list-inside'>
                <li>Es un sistema que garantiza la seguridad eléctrica del cableado y los equipos.</li>
              </ul>
            </li>

            
            
          </ul>
        </div>
      </div>

      <div id='side-bar' className='col-span-1 bg-blue-300'>
        <ul>
          <li>
            Servicios y protocolos de red
          </li>
          <li>
            Puertos TCP/UDP
          </li>
          <li>
            Modelo OSI
          </li>
          <li>
            Modelo TCP/IP
          </li>
          <li>
            Elementos y Normas de Cableado Estructurado
          </li>
        </ul>
      </div>
    </div>
  );
}