import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
export default function Page() {
  return (
    <div className={`py-18 ${styles.contenedor} w-full grid grid-cols-4`}>
      <div className={`col-span-3 ${styles.blog}`} id='contenido'>

        <div id='Servicios' className='mt-8'>
          <h2>Servicios y protocolos</h2>
          <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

          <h3>Servicios de red</h3>
          <p>Los servicios de redes son aplicaciones y funcionalidades que permiten a los dispositivos en una red comunicarse y compartir recursos. Estos servicios son esenciales para el funcionamiento de Internet y las redes locales. Algunos ejemplos incluyen:</p>
          <ul className='list-decimal list-inside'>
            <li>
              <strong>
                Servicio de páginas web
              </strong>
              {/* <h3>Servicio de páginas web</h3> */}
            </li>
            <p>Hypertext Transfer Protocol / Hypertext Transfer Protocol Secure (HTTP/HTTPS): Protocolo de Transferencia de Hipertexto, el cual permite el acceso a páginas web y otros contenidos en línea.</p>
            <li><strong>Servicio de transferencia de archivo</strong>
              
              {/* <h3>Servicio de transferencia de archivos</h3> */}
            </li>
            <p>
              {`File Transfer Protocol (FTP): Protocolo de Transferencia de Archivos, utilizado para la transferencia de archivos entre computadoras a través de una red.`}
            </p>
            <li>
              <strong>Servicios de correo electrónico</strong>
              
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
            <li><strong>Servicio de nombres de dominio</strong></li>
            <p>{`Domain Name System (DNS): Sistema de Nombres de Dominio, que traduce nombres de dominio (como "google.com") a direcciones IP (como "172.217.160.142"), lo que facilita el acceso a sitios web y otros recursos en línea.`}</p>
            <li><strong>Servicio de red</strong></li>
            <p>{`Dynamic Host Configuration Protocol (DHCP): Protocolo de Configuración Dinámica de Host, que asigna  automáticamente direcciones IP y otros parámetros a los dispositivos en una red.`}</p>
          </ul>
          <h3>Protocolos de red</h3>
          <p>Los protocolos de redes son conjuntos de reglas y estándares que definen cómo los dispositivos se comunican a través de una red. Estos protocolos aseguran que los datos se transmitan de manera confiable y eficiente. Algunos de los protocolos más importantes incluyen:</p>
          <ul className='list-decimal list-inside'>
            <li><strong>Protocolo de Internet / Internet Protocol {`(IP)`}</strong>
             <p>Es el protocolo fundamental que define cómo se direccionan y enrutan los paquetes de datos a través de Internet. Existen dos versiones principales:</p> 
              <ul className='list-disc list-inside'>
                <li>IPv4: Utiliza direcciones de 32 bits.</li>
                <li>IPv6: Utiliza direcciones de 128 bits y se diseñó para reemplazar IPv4 debido a la escasez de direcciones.</li>
              </ul>
            </li>
          <li> <strong>Protocolo de Control de Transmisión / Transmission Control Protocol {`(TCP)`} </strong>
            <p>Proporciona una conexión confiable y orientada a la conexión para la transmisión de datos.</p>
          </li>
          <li><strong>Protocolo de Datagramas de Usuario / User Datagram Protocol {`(UDP)`}</strong> 
          <p>Permite la transmisión de datos sin la sobrecarga de conexión que tiene TCP, ideal para aplicaciones que requieren velocidad, como el streaming.</p></li>
          <li><strong>Protocolo de Transferencia de Hipertexto / Hypertext Transfer Protocol {`(HTTP)`}</strong> <p>Define cómo se transfieren las páginas web y otros contenidos en línea.</p></li>
          <li><strong>Protocolo de Transferencia de Archivos / File Transfer Protocol {`(FTP)`}</strong> <p>Permite la transferencia de archivos entre un cliente y un servidor.</p></li>
          <li><strong>Protocolo de Resolución de Direcciones / Address Resolution Protocol {`(ARP)`}</strong> Se utiliza para mapear direcciones IP a direcciones MAC en una red local.</li>
        </ul>
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
          <li><strong>Navegación web</strong></li>
          <ul className='list-disc list-inside ml-4'>
            <li>El servicio es la visualización de páginas web en tu navegador.
            </li>
            <li>{`El protocolo HTTP (o HTTPS) define cómo se solicitan y se transfieren esas páginas desde el servidor al navegador.`}</li>
          </ul>
          <li><strong>Correo electrónico</strong></li>
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


        <div id='puertos' className='mt-8'>
          <h2>Puertos TCP / UDP</h2>
          <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

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
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

          <p>{`El Modelo de Interconexión de Sistemas Abiertos (OSI, por sus siglas en inglés Open Systems Interconnection) es un modelo conceptual creado por la Organización Internacional de Normalización (ISO) en 1984. Su objetivo principal es estandarizar la comunicación entre diferentes sistemas informáticos, independientemente de su fabricante o tecnología.`}</p>
          <h3>Características principales:</h3>
          <ul className='list-disc list-inside'>
            <li><strong>Modelo de referencia:</strong>
              <ul className='list-disc list-inside'>
                <li>No es un protocolo en sí mismo, sino un marco teórico que describe cómo deben interactuar los protocolos de comunicación.</li>
              </ul>
            </li>
            <li><strong>Estructura en capas:</strong>
              <ul className='list-disc list-inside'>
                <li>Divide el proceso de comunicación en siete capas distintas, cada una con funciones específicas.</li>
              </ul>
            </li>
            <li><strong>Estandarización:</strong>
              <ul className='list-disc list-inside'>
                <li>Facilita la interoperabilidad entre sistemas de diferentes proveedores.</li>
              </ul>
            </li>
            <li><strong>Resolución de problemas:</strong>
              <ul className='list-disc list-inside'>
                <li>Ayuda a identificar y solucionar problemas de red al aislar las funciones de cada capa.</li>
              </ul>
            </li>
          </ul>
          <p>Las 7 capas del Modelo OSI:</p>
          <ul className='list-decimal list-inside'>
            <li><strong>{`Capa física (Physical Layer)`}</strong>
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
          <p>El Modelo OSI es fundamental para entender cómo se comunican los dispositivos en una red y ayuda a los ingenieros y técnicos a diseñar y solucionar problemas en sistemas de comunicación. Aunque en la práctica no todos los protocolos siguen estrictamente este modelo, sigue siendo una referencia importante en el ámbito de las redes.</p>
        </div>

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

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
          <h3>Características del Modelo TCP/IP:</h3>
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

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

        
        <div id='cableado'>
          <h2>Elementos y Normas de Cableado estructurado</h2>
          <p>El cableado estructurado es un sistema de cableado genérico y organizado que permite la transmisión de señales de voz, datos y vídeo en un edificio o campus. Su objetivo es proporcionar una infraestructura de red flexible, escalable y confiable que pueda soportar diversas aplicaciones y tecnologías.</p>
          <h3>Elementos del cableado estructurado</h3>
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
          <h3>Normas de cableado estructurado:</h3>
          <p>Existen diversas normas que definen los requisitos y estándares para el diseño e instalación de sistemas de cableado estructurado. Algunas de las más importantes son:</p>
          <ul className='list-disc list-inside'>
            <li><strong>TIA/EIA-568:</strong>
              <ul className='list-disc list-inside'>
                <li>{`Desarrollada por la Asociación de Industrias de Telecomunicaciones (TIA) y la Alianza de Industrias Electrónicas (EIA).`}</li>
                <li>Es la norma más utilizada en América del Norte.</li>
                <li>Define los requisitos para el cableado de edificios comerciales, incluyendo los tipos de cables, conectores, distancias y topologías.</li>
                <li>En esta norma se pueden encontrar dos esquemas de cableado diferentes para conectores RJ-45, que son los conectores utilizados en cables Ethernet.  Para ello, se divide en TIA/EIA-568A y TIA/EIA-568B, como se visualiza a continuación:
                  <Image 
                    src={'/normas.jpeg'}
                    width={220}
                    height={180}
                    alt='Diferencias entre protocolos y servicios'
                    className='w-120 h-90'
                  />
                
                </li>
              </ul>
            </li>
            <li><strong>ISO/IEC 11801:</strong>
              <ul className='list-disc list-inside'>
                <li>{`Desarrollada por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC).`}</li>
                <li>Es la norma internacional para el cableado de edificios.</li>
                <li>Define los requisitos para el cableado de diversos tipos de edificios, incluyendo oficinas, centros de datos y edificios residenciales.</li>
              </ul>
            </li>
            <li><strong>ANSI/TIA-568:</strong>
              <ul className='list-disc list-inside'>
                <li>{`La Asociación de Industrias de Telecomunicaciones (TIA) y el Instituto Nacional Estadounidense de Estándares (ANSI) desarrollaron este estándar que rige el diseño, la instalación y el mantenimiento de los sistemas de cableado estructurado.`}</li>
              </ul>
            </li>
          </ul>
          <h3>Importancia de las normas:</h3>
          <p>El cumplimiento de las normas de cableado estructurado es fundamental para garantizar:</p>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Interoperabilidad:</strong>
              <ul className='list-disc list-inside'>
                <li>Permite que los equipos de diferentes fabricantes se comuniquen entre sí.</li>
              </ul>
            </li>
            <li>
              <strong>Rendimiento:</strong>
              <ul className='list-disc list-inside'>
                <li>Garantiza la transmisión de señales de alta velocidad y calidad.</li>
              </ul>
            </li>
            <li>
              <strong>Fiabilidad:</strong>
              <ul className='list-disc list-inside'>
                <li>Reduce el riesgo de fallos y caídas de la red.</li>
              </ul>
            </li>
            <li>
              <strong>Escalabilidad:</strong>
              <ul className='list-disc list-inside'>
                <li>Facilita la expansión y actualización de la red.</li>
              </ul>
            </li>
          </ul>
          <p>A continuación se observa la comparación entre estas normas:</p>
          <Image 
            src={'/normasFinal.jpeg'}
            width={220}
            height={180}
            alt='Normas de algo'
            className='w-120 h-200'
          />
        </div>

        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>

        <div id='banda'>
          <h2>Ancho de banda</h2>
          <p>{`El ancho de banda, en términos de redes, se refiere a la capacidad máxima de una conexión de red para transmitir datos en un período de tiempo determinado. Se mide en bits por segundo (bps) y sus múltiplos, como kilobits por segundo (kbps), megabits por segundo (Mbps) o gigabits por segundo (Gbps).
          Una forma común de entender el ancho de banda es compararlo con una tubería de agua. Una tubería más ancha puede transportar más agua al mismo tiempo, de la misma  manera que un mayor ancho de banda permite transmitir más datos simultáneamente.
          `}</p>
          <h3>Características:</h3>
          <ul className='list-disc list-inside  '>
              <li><strong>Limitación física:</strong>
                <ul className='list-disc list-inside'>
                  <li>
                  El ancho de banda está limitado por las capacidades físicas del medio de transmisión, como cables, fibra óptica o señales inalámbricas.
                  </li>
                </ul>
              </li>
              <li><strong>Influencia en la velocidad:</strong>
                <ul className='list-disc list-inside'>
                  <li>
                  Un mayor ancho de banda generalmente se traduce en velocidades de transferencia más rápidas y una mejor experiencia en línea.
                  </li>
                </ul>
              </li>
              <li><strong>Compartición:</strong>
                <ul className='list-disc list-inside'>
                  <li>
                  En redes compartidas, el ancho de banda disponible se divide entre los usuarios conectados, lo que puede afectar el rendimiento individual.
                  </li>
                </ul>
              </li>
              <li><strong>Relación con la latencia:</strong>
                <ul className='list-disc list-inside'>
                  <li>
                  Aunque son conceptos distintos, el ancho de banda y la latencia están relacionados. La latencia se refiere al retraso en la transmisión de datos, y un ancho de banda insuficiente puede aumentar la latencia.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Medición del ancho de banda</h3>
            <p>El ancho de banda se mide utilizando herramientas y técnicas especializadas, que incluyen:</p>
            <ul className='list-disc list-inside'>
              <li><strong>Pruebas de velocidad en línea:</strong>
                <ul className='list-disc list-inside'>
                  <li>Sitios web y aplicaciones que permiten medir la velocidad de carga y descarga de una conexión a Internet.</li>
                </ul>
              </li>
              <li><strong>Monitoreo de red:</strong>
                <ul className='list-disc list-inside'>
                  <li>Software y hardware que supervisan el tráfico de red y proporcionan información sobre el ancho de banda utilizado.</li>
                </ul>
              </li>
              <li><strong>Analizadores de espectro:</strong>
                <ul className='list-disc list-inside'>
                  <li>Equipos utilizados para medir el ancho de banda de señales inalámbricas.</li>
                </ul>
              </li>
            </ul>
            <h3>Tasa de transferencia</h3>
            <p>{`La tasa de transferencia, también conocida como rendimiento, se refiere a la cantidad real de datos que se transmiten con éxito a través de una conexión en un período de tiempo. Se mide en las mismas unidades que el ancho de banda (bps, kbps, Mbps, Gbps).`}</p>
            <h3>Diferencia entre ancho de banda y tasa de transferencia:</h3>
            <ul className='list-disc list-inside'>
              <li><strong>Ancho de banda:</strong>
                <ul className='list-disc list-inside'>
                  <li>Es la capacidad máxima teórica de una conexión.</li>
                </ul>
              </li>
              <li><strong>Tasa de transferencia:</strong>
                <ul className='list-disc list-inside'>
                  <li>Es la cantidad real de datos transmitidos, que puede ser menor que el ancho de banda debido a factores como la congestión de la red, la latencia o la pérdida de paquetes.</li>
                </ul>
              </li>
            </ul>
            <h3>Importancia</h3>
            <p>El ancho de banda es un factor crucial para el rendimiento de las redes y la experiencia del usuario. Un ancho de banda adecuado es esencial para actividades como:</p>
            <ul className='list-disc list-inside'>
              <li>
                <strong>Navegación web:</strong>
                <ul className='list-disc list-inside'>
                  <li>Carga rápida de páginas web y contenido multimedia.</li>
                </ul>
              </li>
              <li>
                <strong>Transmisión de video y audio:</strong>
                <ul className='list-disc list-inside'>
                  <li>Reproducción fluida de contenido en alta definición.</li>
                </ul>
              </li>
              <li>
                <strong>Videoconferencias:</strong>
                <ul className='list-disc list-inside'>
                  <li>Comunicación en tiempo real sin interrupciones.</li>
                </ul>
              </li>
              <li>
                <strong>Descarga y carga de archivos:</strong>
                <ul className='list-disc list-inside'>
                  <li>Transferencia rápida de datos.</li>
                </ul>
              </li>
              <li>
                <strong>Juegos en línea:</strong>
                <ul className='list-disc list-inside'>
                  <li>Experiencia de juego sin retrasos.</li>
                </ul>
              </li>
            </ul>
        </div>
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mb-8"/>
        <div id='redes'>
          <h2>Tecnologías de redes</h2>
          <p>Las tecnologías de redes son el conjunto de hardware y software que permiten a los dispositivos comunicarse e intercambiar datos entre sí. Estas tecnologías abarcan una amplia gama de métodos y protocolos, desde las conexiones por cable tradicionales hasta las redes inalámbricas más modernas.</p>
          <p>Podemos compararlas de la siguiente manera:</p>
          <Image
            src={'/final.jpeg'}
            width={320}
            height={240}
            alt='Tecnologias de redes'
            className='w-120 h-140'
          />
          <ul className='list-decimal list-inside'>
            <li>
              <strong>Token Ring</strong>
              <p>{`Es una tecnología de red que utiliza una topología en anillo lógico.${<br></br>}Los datos se transmiten alrededor del anillo en un "token", y solo el nodo que posee el token puede transmitir datos.${<br></br>}Fue desarrollada por IBM en la década de 1980 y fue popular en redes de área local (LAN) en ese momento.`}</p>
              <ul>
                <li>
                  <strong>Características:</strong>
                  <ul className='list-disc list-inside'>
                    <li>Acceso determinista al medio: evita colisiones de datos.</li>
                    <li>Alta confiabilidad en redes con poco tráfico.</li>
                    <li>Complejidad en la instalación y mantenimiento.</li>
                    <li>Velocidades de transmisión limitadas en comparación con tecnologías modernas.</li>
                  </ul>
                </li>
                <li><strong>Capas del Modelo OSI:</strong>
                  <ul className='list-disc list-inside'>
                    <li>{`Capa física (Physical Layer): Define las características eléctricas y mecánicas de la conexión.`}</li>
                    <li>
                      {`Capa de enlace de datos (Data Link Layer): Controla el acceso al medio y la transmisión de tramas.`}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Ethernet</strong>
              <p>{`Es la tecnología de red LAN más utilizada en la actualidad.${<br></br>}Utiliza una topología en estrella física y un protocolo de acceso al medio llamado CSMA/CD (Carrier Sense Multiple Access with Collision Detection) o CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) en versiones más modernas.${<br></br>}Permite la transmisión de datos a altas velocidades y es altamente escalable.`}</p>
              <ul>
                <li>
                  <strong>Características</strong>
                  <ul className='list-disc list-inside'>
                    <li>Alta velocidad y rendimiento.
                    </li>
                    <li>Flexibilidad y escalabilidad.</li>
                    <li>Amplia disponibilidad de equipos y componentes.</li>
                    <li>{`Posibilidad de colisiones de datos en versiones antiguas (CSMA/CD).`}</li>
                  </ul>
                </li>
                <li>
                  <strong>Capas del Modelo OSI</strong>
                  <ul className='list-disc list-inside'>
                    <li>
                      {`Capa física (Physical Layer): Define las características de la conexión física.`}
                    </li>
                    <li>
                      {`Capa de enlace de datos (Data Link Layer): Controla el acceso al medio y la transmisión de tramas.`}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Wi-Fi</strong>
              <p>{`Es una tecnología de red inalámbrica que permite la conexión de dispositivos a Internet y a redes locales sin necesidad de cables.${<br></br>}Utiliza ondas de radio para transmitir datos y se basa en los estándares IEEE 802.11.${<br></br>}Es ampliamente utilizada en hogares, oficinas y espacios públicos.`}</p>
              <ul>
                <li>
                  <strong>Características:</strong>
                  <ul className='list-disc list-inside'>
                    <li>
                    Movilidad y conveniencia.
                    </li>
                    <li>
                    Facilidad de instalación y uso.
                    </li>
                    <li>
                    Posibilidad de interferencias y problemas de seguridad.
                    </li>
                    <li>
                    Velocidad y alcance variables según el estándar y el entorno.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Capas del Modelo OSI:</strong>
                  <ul className='list-disc list-inside'>
                    <li>{`Capa física (Physical Layer): Define las características de la transmisión de ondas de radio.`}</li>
                    <li>
                      {`Capa de enlace de datos (Data Link Layer): Controla el acceso al medio inalámbrico y la transmisión de tramas.`}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

        </div>

      </div>

      <div id='side-bar' className='col-span-1'>
        <ul>
          <li>
            Servicios y protocolos de red.
          </li>
          <li>
            Puertos TCP/UDP.
          </li>
          <li>
            Modelo OSI.
          </li>
          <li>
            Modelo TCP/IP.
          </li>
          <li>
            Elementos y Normas de Cableado Estructurado.
          </li>
          <li>
            Ancho de banda.
          </li>
          <li>
            Tecnología de redes.
          </li>
        </ul>
      </div>
    </div>
  );
}