<template>
  <div>
    <div class="text-h3 font-weight-bold d-flex mb-6 justify-center">
      UNIDAD 3
    </div>
    <v-container>
      <v-row>
        <v-col class="title">CHIP SET</v-col>
      </v-row>

      <v-row>
        <v-col>
          Un chipset es el conjunto de circuitos integrados diseñados con base
          en la arquitectura de un procesador (en algunos casos, diseñados como
          parte integral de esa arquitectura), permitiendo que ese tipo de
          procesadores funcionen en una placa base. Sirven de puente de
          comunicación con el resto de componentes de la placa, como son la
          memoria, las tarjetas de expansión, los puertos USB, ratón, teclado,
          etc.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las placas base modernas suelen incluir dos integrados, denominados
          puente norte y puente sur, y suelen ser los circuitos integrados más
          grandes después de la GPU y el microprocesador. Las últimas placa base
          carecen de puente norte, ya que los procesadores de última generación
          lo llevan integrado.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Funcionamiento </v-col>
      </v-row>

      <v-row>
        <v-col>
          El chipset es el que hace posible que la placa base funcione como eje
          del sistema, dando soporte a varios componentes e interconectándolos
          de forma que se comuniquen entre ellos haciendo uso de diversos buses.
          Es uno de los pocos elementos que tiene conexión directa con el
          procesador, gestiona la mayor parte de la información que entra y sale
          por el bus principal del procesador, del sistema de vídeo y muchas
          veces de la memoria RAM. En el caso de los computadores PC, es un
          esquema de arquitectura abierta que establece modularidad: el chipset
          debe tener interfaces estándar para los demás dispositivos. Esto
          permite escoger entre varios dispositivos estándar, por ejemplo, en el
          caso de los buses de expansión, algunas tarjetas madre pueden tener
          bus PCI-Express y soportar diversos tipos de tarjetas de distintos
          anchos de bus (1x, 8x, 16x).
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> UNIDAD CENTRAL DE PROCESAMIENTO (CPU). </v-col>
      </v-row>

      <v-row>
        <v-col>
          La unidad central de procesamiento (siglas en inglés Central
          Processing Unit) es el hardware dentro de una computadora u otros
          dispositivos programables. Su trabajo es interpretar las instrucciones
          de un programa informático mediante la realización de las operaciones
          básicas aritméticas, lógicas y externas (provenientes de la unidad de
          entrada/salida). Su diseño y avance ha variado notablemente desde su
          creación, aumentando su eficiencia y potencia, y reduciendo aspectos
          como el consumo de energía y el costo.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">CONTROLADOR DEL BUS</v-col>
      </v-row>

      <v-row>
        <v-col>
          El controlador del bus se encarga de la frecuencia de funcionamiento y
          las señales de sincronismo, temporización y control. Está ubicado en
          un chip en la placa base.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El bus es la vía a través de la que se van a transmitir y recibir
          todas las comunicaciones, tanto internas como externas, del sistema
          informático. El bus es solamente un dispositivo de transferencia de
          información entre los componentes conectados a él, no almacena
          información alguna en ningún momento. Los datos, en forma de señal
          eléctrica, sólo permanecen en el bus el tiempo que necesitan en
          recorrer la distancia entre los dos componentes implicados en la
          transferencia.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">PUERTAS DE ENTRADA SALIDA E/S</v-col>
      </v-row>

      <v-row>
        <v-col>
          Un puerto de E/S es un enchufe en una computadora al que se conecta un
          cable. El puerto conecta la CPU a un dispositivo periférico a través
          de una interfaz de hardware o a la red a través de una interfaz de
          red.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          En otras palabras, un puerto de E/S es un punto de conexión que actúa
          como interfaz entre la computadora y dispositivos externos como mouse,
          impresora, módem, etc. Estos son de dos tipos:
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">1. Puerto interno</div>
          <div>
            Conecta la placa base a dispositivos internos como unidad de disco
            duro, unidad de CD, módem interno, etc.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">2. Puerto externo</div>
          <div>
            Conecta la placa base a dispositivos externos como módem, mouse,
            impresora, unidades flash, etc.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Puerto serial</div>
          <div>
            Los puertos seriales transmiten datos secuencialmente un bit a la
            vez. Por lo tanto, solo necesitan un cable para transmitir 8 bits.
            Sin embargo, también los hace más lentos. Los puertos serie suelen
            ser conectores macho de 9 o 25 pines. También se conocen como
            puertos COM (comunicación) o puertos RS323C.
          </div>
          <div>
            Puerto paralelo: los puertos paralelos pueden enviar o recibir 8
            bits o 1 byte a la vez. Los puertos paralelos vienen en forma de
            pines hembra de 25 pines y se utilizan para conectar impresoras,
            escáneres, unidades de disco duro externas, etc.
          </div>
        </v-col>

        <v-col>
          <div class="subtitle">Puerto USB</div>
          <div>
            USB son las siglas de Universal Serial Bus. Es el estándar de la
            industria para la conexión de datos digitales de corta distancia. El
            puerto USB es un puerto estandarizado para conectar una variedad de
            dispositivos como impresora, cámara, teclado, altavoz, etc.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Puerto PS/2</div>
          <div>
            PS/2 son las siglas de Personal System/2. Es un puerto estándar
            hembra de 6 pines que se conecta al cable mini-DIN macho. IBM
            introdujo PS/2 para conectar el mouse y el teclado a las
            computadoras personales. Este puerto ahora está casi obsoleto,
            aunque algunos sistemas compatibles con IBM pueden tener este
            puerto.
          </div>
        </v-col>

        <v-col>
          <div class="subtitle">Puerto de infrarrojos</div>
          <div>
            El puerto de infrarrojos es un puerto que permite el intercambio
            inalámbrico de datos en un radio de 10 m. Dos dispositivos que
            tienen puertos infrarrojos se colocan uno frente al otro para que
            los haces de luces infrarrojas se puedan utilizar para compartir
            datos.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Puerto Bluetooth</div>
          <div>
            Bluetooth es una especificación de telecomunicaciones que facilita
            la conexión inalámbrica entre teléfonos, computadoras y otros
            dispositivos digitales a través de una conexión inalámbrica de corto
            alcance. El puerto Bluetooth permite la sincronización entre
            dispositivos habilitados para Bluetooth.
          </div>
        </v-col>

        <v-col>
          <div class="subtitle">Puerto FireWire</div>
          <div>
            FireWire es el estándar de interfaz de Apple Computer para permitir
            la comunicación de alta velocidad mediante bus serie. También se
            llama IEEE 1394 y se usa principalmente para dispositivos de audio y
            video como videocámaras digitales.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">CONTROLADOR DE INTERRUPCIONES</v-col>
      </v-row>

      <v-row>
        <v-col>
          El controlador de interrupciones es un módulo que tiene por función
          gestionar las interrupciones de entrada/salida para el procesador.
          Esto ahorra diseñar lógica y añadir patitas al procesador. También
          proporciona flexibilidad porque permite idealmente, gestionar un
          número ilimitado señales de interrupción (favoreciendo la expansión
          del sistema de entrada/salida).
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El controlador recibe el conjunto de señales de interrupción
          procedentes de los dispositivos, toma la decisión de cuál es la más
          prioritaria, y envía una única señal al procesador. La respuesta del
          procesador es transmitida al dispositivo y el propio controlador se
          encarga de depositar en el bus el vector de la interrupción.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Ciclo de reconocimiento de interrupción.</v-col>
      </v-row>

      <v-row>
        <v-col>
          <ol>
            <li>
              Tras la activación de una línea IR, el controlador activa la
              salida INTR señalándole a la CPU la existencia de una interrupción
              activada.
            </li>
            <li>
              Al recibir la señal, el procesador da un pulso en su salida INTA
              indicando que comienza un ciclo de reconocimiento de interrupción.
            </li>
            <li>
              Al recibir el controlador el pulso por su entrada INTA comienza a
              arbitrar las interrupciones recibidas y selecciona la más
              prioritaria.
            </li>
            <li>
              Se emite un segundo pulso por la línea INTA del procesador (o
              controlador de bus) que utiliza el controlador para depositar en
              el bus el vector correspondiente a la interrupción de mayor
              prioridad.
            </li>
            <li>
              El procesador obtiene la dirección de la rutina de interrupción a
              partir de este dato y salta a ella. Almacena el registro de flags
              y la dirección de retorno, deshabilita las interrupciones y
              comienza a ejecutar la rutina.
            </li>
          </ol>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">
          CONTROLADOR DE ACCESO DIRECTO A MEMORIA (DMA)
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El mecanismo de acceso directo a memoria está controlado por un chip
          específico, el DMAC ("DMA Controller"), que permite realizar estos
          intercambios sin apenas intervención del procesador. En los XT estaba
          integrado en un chip 8237A que proporcionaba 4 canales de 8 bits
          (puede mover solo 1 Byte cada vez); sus direcciones de puerto son
          000-00Fh. Posteriormente en los AT se instalaron dos de estos
          integrados y las correspondientes líneas auxiliares en el bus de
          control.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          En contra de lo que podría parecer, el resultado no fue disponer de 8
          canales, porque el segundo controlador se colgó en “Cascada” de la
          línea 4 del primero. Los canales del segundo DMAC está asignado a las
          direcciones 0C0-0DFh y son de 16 bits.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Pueden mover 2 Bytes (de posiciones contiguas) cada vez. Cada canal
          tiene asignada una prioridad para el caso de recibirse simultáneamente
          varias peticiones (los números más bajos tienen prioridad más alta).
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Pueden ser utilizados por cualquier dispositivo que los necesite
          (suponiendo naturalmente que esté diseñado para soportar este modo de
          operación). Cada sistema los asigna de forma arbitraria, pero hay
          algunos cuya asignación es estándar.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> CIRCUITOS DE TEMPORIZACIÓN </v-col>
      </v-row>

      <v-row>
        <v-col>
          El circuito electrónico que más se utiliza tanto en la industria como
          en circuitería comercial, es el circuito temporizador o de retardo,
          dentro de la categoría de temporizadores, cabe destacar el más
          económico y también menos preciso consistente en una resistencia y un
          condensador, a partir de aquí se puede contar con un sinfín de
          opciones.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Un temporizador básicamente consiste en un elemento que se activa o
          desactiva después de un tiempo preestablecido. De esta manera podemos
          determinar el parámetro relacionado con el tiempo que ha de
          transcurrir para que el circuito susceptible de temporizarse, se
          detenga o empiece a funcionar o simplemente cierre un contacto o lo
          abra.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se encuentra en la placa base de la PC y que es capaz de mantener una
          cuenta de tiempo basada en el reloj de la computadora. Puede usarse
          para calcular el intervalo entre dos mediciones de tiempo o para
          generar pausas. Este chip tiene la capacidad de realizar diferentes
          funciones de conteo. Es útil para medir el tiempo que dura cierto
          proceso o para mantener actualizadas la hora del día y la fecha si se
          deja la PC conectada y encendida.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">CIRCUITOS DE CONTROL </v-col>
      </v-row>

      <v-row>
        <v-col>
          Es una red secuencial que acepta un código que define la operación que
          se va a ejecutar y luego prosigue a través de una secuencia de
          estados, generando una correspondiente secuencia de señales control.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Estas señales de control incluyen el control de lectura-escritura y
          señales de dirección de memoria válida en el bus de control del
          sistema. Otras señales generadas por el controlador se conectan a la
          ALU y a los registros internos del procesador para regular el flujo de
          información en el procesador y desde los buses de dirección y de datos
          del sistema.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">CONTROLADORES DE VIDEO</v-col>
      </v-row>

      <v-row>
        <v-col>
          La tarjeta de video, (también llamada controlador de video), es un
          componente electrónico requerido para generar una señal de video que
          se manda a una pantalla de video por medio de un cable. La tarjeta de
          video se encuentra normalmente en la placa de sistema de la
          computadora o en una placa de expansión. La tarjeta gráfica reúne toda
          la información que debe visualizarse en pantalla y actúa como interfaz
          entre el procesador y el monitor; la información es enviada a éste por
          la placa luego de haberla recibido a través del sistema de buses.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Una tarjeta gráfica se compone, básicamente, de un controlador de
          video, de la memoria de pantalla o RAM video, y el generador de
          caracteres, y en la actualidad también poseen un acelerador de
          gráficos. El controlador de video va leyendo a intervalos la
          información almacenada en la RAM video y la transfiere al monitor en
          forma de señal de video; el número de veces por segundo que el
          contenido de la RAM video es leído y transmitido al monitor en forma
          de señal de video se conoce como frecuencia de refresco de la
          pantalla.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">ENTRADA/SALIDA</v-col>
      </v-row>

      <v-row>
        <v-col>
          En informática, un periférico de entrada/salida o E/S (en inglés:
          input/output o I/O) es aquel tipo de dispositivo periférico de un
          computador capaz de interactuar con los elementos externos a ese
          sistema de forma bidireccional, es decir, que permite tanto que sea
          ingresada información desde un sistema externo, como emitir
          información a partir de ese sistema. Los Dispositivos Periféricos de
          entrada son todos aquellos dispositivos que permiten introducir datos
          o información en una computadora para que esta los procese u ordene.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Funciones.</v-col>
      </v-row>

      <v-row>
        <v-col>
          Un periférico de E/S es el que se utiliza para ingresar (E) datos a la
          computadora, y luego de ser procesados por la unidad central de
          procesamiento (CPU), genera la salida (S) de información. Su función
          es leer o grabar, permanente o virtualmente, todo aquello que se haga
          con la computadora, para que pueda ser utilizado por los usuarios u
          otros sistemas.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Tipos.</v-col>
      </v-row>

      <v-row>
        <v-col>
          Dispositivos o periféricos de comunicación entre computadoras, tales
          como módems y tarjetas de red, por lo general sirven para entrada y
          salida. También, los dispositivos de almacenamiento de datos, como los
          discos rígidos, la unidad de estado sólido, las memorias flash, las
          disqueteras, entre otros, se pueden considerar periféricos de
          entrada/salida.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          En ocasiones, se consideran periféricos de E/S a los dispositivos de
          almacenamiento de datos, por ejemplo, las lectograbadoras de discos
          ópticos, ‘lectoras’ de tarjetas de memoria, discos duros portátiles o
          externos, memorias USB o memorias flash, etcétera. Dispositivos de
          redes.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          También, los dispositivos de redes o de comunicación, suelen
          considerarse periféricos de E/S porque su función es la interacción o
          interconexión entre dos o más computadoras, o entre la computadora y
          otro periférico externo.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">ALMACENAMIENTO</v-col>
      </v-row>

      <v-row>
        <v-col>
          Conforme la tecnología avanza, más datos se van generando, por lo que
          es necesario contar con un almacenamiento eficiente para poder guardar
          toda esa información y acceder a ellos. El almacenamiento de datos ha
          cambiado mucho, desde los sistemas de disco, que muy probablemente se
          sigan utilizando, pero de una forma más digital: hoy se encuentran
          conectados a una red y son definidos por un software.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El almacenamiento de datos tiene un proceso a través del uso de la
          tecnología, ésta se aplica para organizar, distribuir y archivar
          información con los bytes y los bits que son parte de los sistemas de
          los que la gente depende día con día, llega a ser tan importante en
          todos los servicios: desde una simple aplicación, contenido
          multimedia, direcciones, contactos, hasta protocolos de red y todo lo
          que tiene que ver con el mundo digital.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Memoria contra almacenamiento</v-col>
      </v-row>

      <v-row>
        <v-col>
          Generalmente, los usuarios de computadoras tienden a confundir los
          términos “memoria” y “almacenamiento” pues los emplean de manera
          indistinta, utilizándolos para referirse a la RAM (o memoria
          principal) o al disco duro. Desde el punto de vista técnico, ambos
          términos son prácticamente iguales pues tanto la RAM como el disco
          duro se utilizan para almacenar información, claro está, de formas
          distintas y para propósitos diferentes.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Mientras la memoria se refiere a la ubicación de los datos a corto
          plazo, el almacenamiento es el componente de su computadora que le
          permite almacenar y acceder a datos a largo plazo. Usualmente, el
          almacenamiento se da en forma de una unidad de estado sólido o un
          disco duro. El almacenamiento le permite acceder y almacenar sus
          aplicaciones, sistema operativo y archivos por un tiempo indefinido.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Almacenamiento en sistemas informáticos</v-col>
      </v-row>

      <v-row>
        <v-col>
          Un dispositivo de almacenamiento es un hardware que se utiliza
          principalmente para almacenar datos. Cada computadora de escritorio,
          computadora portátil, tablet y smartphone tendrán algún tipo de
          dispositivo de almacenamiento en su interior y también puedes obtener
          unidades de almacenamiento externo independientes que se pueden
          utilizar en varios dispositivos.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <ul>
            <li>Unidades de discos duros (HDD)</li>
            <li>Discos de estado sólido (SSD)</li>
          </ul>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Dispositivos de almacenamiento externo</v-col>
      </v-row>

      <v-row>
        <v-col>
          Además de los medios de almacenamiento contenidos en una computadora,
          también hay dispositivos de almacenamiento digital que son externos a
          las computadoras. Se utilizan comúnmente para ampliar la capacidad de
          almacenamiento cuando una computadora se queda sin espacio, para
          permitir una mayor portabilidad y para facilitar la transferencia de
          archivos de un dispositivo a otro.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Unidades de discos duros y discos de estado sólido externos.
          Dispositivos de memoria flash (unidades USB y tarjetas SD).
          Dispositivos de almacenamiento óptico (CD, DVD y discos Blu-Ray).
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Almacenamiento en la nube </v-col>
      </v-row>

      <v-row>
        <v-col>
          Aunque no es exactamente un dispositivo en sí mismo, el almacenamiento
          en la nube es el tipo de almacenamiento más nuevo y versátil para las
          computadoras. “La nube” no es un lugar u objeto, sino un enorme
          conjunto de servidores alojados en centros de datos de todo el mundo.
          Cuando guardas un documento en la nube, lo estás almacenando en estos
          servidores.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Debido a que todo se almacena en línea, el almacenamiento en la nube
          no utiliza ningún almacenamiento secundario de la computadora, lo que
          te permite ahorrar espacio.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">FUENTES DE ALIMENTACIÓN</v-col>
      </v-row>

      <v-row>
        <v-col>
          Una fuente de alimentación es un componente esencial de cualquier
          dispositivo electrónico ya que es ella quien se encarga de darle vida.
          En cualquier equipo, por pequeño que sea, siempre hay una fuente de
          alimentación, aunque no la veamos.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          En los ordenadores de sobremesa, la fuente de alimentación se
          encuentra generalmente en la parte inferior de la torre (en cajas
          antiguas se encuentra en la superior), y muchas cajas de ordenador
          optan por incorporar un compartimento para separarla del resto y ya de
          paso ocultar todos los cables salientes de ella.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Una fuente de alimentación sirve para dar energía a un dispositivo
          electrónico. Siguiendo con el tema de los ordenadores de sobremesa, la
          fuente de alimentación da energía a la placa base, CPU, tarjetas
          gráficas, HDDs, SSDs, ventiladores, lectores de CDs. En resumen,
          alimenta a todo lo que necesite energía, para ello hace uso de
          diferentes tipos de cables.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las fuentes de alimentación proporcionan energía a los SSD y HDD
          mediante conectores SATA de energía, y a los ventiladores mediante
          conectores molex de 3 o 4 pines o bien mediante la propia placa base
          (que es alimentada con el conector de 24 pines ATX). De esta manera,
          todos los componentes reciben energía de la fuente de alimentación.
          Además, las fuentes protegen a todos los componentes mediante una gran
          cantidad de sistemas dedicados a ello.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Existen fuentes de alimentación que no requieren de ventilación, por
          lo que su refrigeración es completamente pasiva. Estos modelos suelen
          ser fuentes de medio-bajo voltaje con una alta eficiencia, para que el
          calor generado sea menor y se pueda llevar a cabo su disipación sin
          usar ni un solo ventilador acoplado a la fuente, con los que existan
          en la caja serán más que suficiente.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> AMBIENTES DE SERVICIO </v-col>
      </v-row>

      <v-row>
        <v-col>
          El negocio de proveer servicios de datos es mucho más complejo que la
          forma en la que se dan los tradicionales servicios, los primeros
          requieren de nuevos conocimientos y modelos de negocio, que con
          frecuencia se termina involucrando o necesitando la colaboración de
          terceras empresas. Por lo que se hace necesario que los operadores
          tradicionales transformen su negocio para ofrecer los servicios de
          datos con los niveles de servicio que el mercado exige.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">NEGOCIOS</v-col>
      </v-row>

      <v-row>
        <v-col>
          Definitivamente, la tecnología en general ha sido la causa principal y
          la acción más directa para la transformación del trabajo de las
          organizaciones en la posguerra del siglo XX. Tanto los bienes de
          capital "duros" (computadores, teléfonos, videos, facsímiles,
          grabadoras, etc.), como los programas y sistemas de información y
          comunicación en general, han incrementado enormemente la productividad
          y eficiencia de las organizaciones. Tenemos como ejemplos los
          siguientes: bases de datos en redes de todo orden y topología,
          sistemas de reservaciones en aerolíneas, sistemas de contabilidad y
          nóminas, archivos clínicos en centros de salud, sistemas de
          conmutación electrónica y un sin número de otras aplicaciones a
          procesos administrativos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">INDUSTRIA</v-col>
      </v-row>

      <v-row>
        <v-col>
          La industrialización de los servicios de tecnología de información va
          a redefinir el mercado en términos de como las organizaciones evalúan,
          compran y seleccionan los servicios y como los vendedores desarrollan
          y establecen precios de los servicios.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Para lograr esta estandarización, se requiere un enfoque hacia las
          soluciones genéricas y esto debe ser responsabilidad de los
          proveedores, que deben de desarrollar, operar y administrar el
          resultado de estos genéricos de TI.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Aunque los servicios de TI están en proceso de madurez, la madurez de
          la industria se ha incrementado en aspectos evidentes, como la forma
          en que los servicios son implementados y administrados.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> COMERCIO ELECTRÓNICO </v-col>
      </v-row>

      <v-row>
        <v-col>
          El desarrollo de estas tecnologías y de las telecomunicaciones ha
          hecho que los intercambios de datos crezcan a niveles extraordinarios,
          simplificándose cada vez más y creando nuevas formas de comercio, y en
          este marco se desarrolla el Comercio Electrónico.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se considera “Comercio Electrónico” al conjunto de aquellas
          transacciones comerciales y financieras realizadas a través del
          procesamiento y la transmisión de información, incluyendo texto,
          sonido e imagen.
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
