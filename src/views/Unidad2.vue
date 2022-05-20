<template>
  <div>
    <div class="text-h3 font-weight-bold d-flex mb-6 justify-center">
      UNIDAD 2
    </div>
    <v-container>
      <v-row>
        <v-col class="title">FUNCIONAMIENTO DEL PROCESADOR</v-col>
      </v-row>

      <v-row>
        <v-col>
          El procesador (CPU) es uno de los componentes más importantes, a la
          hora de determinar el rendimiento de una computadora personal ( PC).
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Es como si fuera el cerebro del sistema, el que controla todo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cuando ejecutas una aplicación, las instrucciones se cargan del disco
          duro a la memoria, y de esta al procesador para que las procese.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cuando el procesador recibe la instrucción, ejecuta su lógica interna
          y realiza las acciones para obtener un resultado.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Una vez que termina de procesar, envía el resultado al dispositivo
          correspondiente.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Esto proceso se realiza millones de veces en muy poco tiempo, ya que
          un simple movimiento del ratón implica que el procesador tenga que
          procesarlo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cuando vemos las características del procesador, siempre podemos
          fijarnos en el número de núcleos e hilos de proceso y su velocidad
          como las dos características principales, pero un procesador tiene
          muchísimas más que también deberíamos tener en cuenta. Vamos a ver qué
          es lo que más afecta al desempeño de un procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Velocidad del reloj</v-col>
      </v-row>

      <v-row>
        <v-col>
          Velocidad de reloj (Clock Speed), ya que cada procesador está equipado
          con un reloj interno que le proporciona un tiempo funcional. La
          velocidad de reloj se refiere al número de operaciones que la CPU
          puede realizar en un solo segundo. El cual es dictado por una señal
          intermitente en el que cada periodo dura una cantidad determinada de
          tiempo (Frecuencia de funcionamiento). Este es el número en hercios
          (Hz), expresado generalmente en MHz o GHz que verás junto al nombre de
          la CPU.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Número de núcleos e hilos de proceso.</v-col>
      </v-row>

      <v-row>
        <v-col>
          Se ha de tener en cuenta que un hilo y un núcleo no son lo mismo, un
          núcleo es una unidad de proceso completa capaz de captar, decodificar
          y ejecutar una instrucción. Mientras que el multihilo hace referencia
          a la capacidad de ciertos procesadores de dejar lo que están haciendo
          en espera y tomar otra instrucción
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Lo cual se utiliza para aprovechar las burbujas en la ejecución que
          provocan paradas en el procesador. Por lo que la capacidad de trabajar
          con más hilos no multiplica la potencia del procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Con los fabricantes aumentando el número de núcleos en lugar de
          enfocar sus esfuerzos en mejorar la velocidad, los desarrolladores de
          software y de sistemas operativos siguieron su ejemplo, y la mayoría
          de programas están optimizados para procesadores multinúcleo. De esta
          manera, la cantidad de núcleos y de hilos de proceso es algo que ha
          cobrado mucha más importancia ahora que antes y, seguramente, a día de
          hoy será el factor más importante a la hora de determinar el
          rendimiento de un procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> ORGANIZACION DEL PROCESADOR </v-col>
      </v-row>

      <v-row>
        <v-col>
          La función principal de un procesador es ejecutar instrucciones y la
          organización que tiene viene condicionada por las tareas que debe
          realizar y por cómo debe hacerlo. Los procesadores están diseñados y
          operan según una señal de sincronización. Esta señal, conocida como
          señal de reloj, es una señal en forma de onda cuadrada periódica con
          una determinada frecuencia. Todas las operaciones hechas por el
          procesador las gobierna esta señal de reloj: un ciclo de reloj
          determina la unidad básica de tiempo, es decir, la duración mínima de
          una operación del procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Para ejecutar una instrucción, son necesarios uno o más ciclos de
          reloj, dependiendo del tipo de instrucción y de los operandos que
          tenga. Las prestaciones del procesador no las determina solo la
          frecuencia de reloj, sino otras características del procesador,
          especialmente del diseño del juego de instrucciones y la capacidad que
          tiene para ejecutar simultáneamente múltiples instrucciones.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Para ejecutar las instrucciones, todo procesador dispone de tres
          componentes principales:
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          1.- Un conjunto de registros: Espacio de almacenamiento temporal de
          datos e instrucciones dentro del procesador.
        </v-col>
        <v-col>
          2.- Unidad aritmética y lógica o ALU: Circuito que hace un conjunto de
          operaciones aritméticas y lógicas con los datos almacenados dentro del
          procesador.
        </v-col>
        <v-col>
          3.- Unidad de control: Circuito que controla el funcionamiento de
          todos los componentes del procesador. Controla el movimiento de datos
          e instrucciones dentro y fuera del procesador y también las
          operaciones de la ALU.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Estructura de registros </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los registros vienen de tres tipos: datos, direcciones e índice, que
          tiene lugar en casi todos los aspectos de la operación del CPU. El
          tamaño de un registro depende del CPU; los más simples tienen
          registros que aceptan 8 o 16 bits de datos y los más complejos tienen
          registros de 32, 48 o 64 bits.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Clasificacion de los registros </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Registro de datos:</v-col>
        <v-col>
          Un CPU puede funcionar con datos en uno de tres modos: entre dos
          registros, entre registros y una ubicación de Memoria de acceso al
          azar (RAM - Random-Access Memory) y entre dos ubicaciones RAM. Como el
          CPU está conectado directamente a los registros, las operaciones que
          implican dos registros son las más rápidas; las que se dan entre
          ubicaciones RAM son las más lentas. Es decir, junta dos registros,
          añade un registro a una ubicación RAM, o añade dos ubicaciones RAM.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Registro de direcciones:</v-col>
        <v-col>
          Para que un CPU pueda almacenar y recuperar datos en RAM, debe tener
          la dirección de la memoria de la información. Esas operaciones que
          implican RAM usan registros de dirección de memoria. EL CPU no realiza
          aritmética en estos registros; en cambio, los usa para ubicar datos
          que necesita.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registro de índice: </v-col>
        <v-col>
          Un CPU no puede hacer matemáticas en registros de datos, aunque puede
          hacerlo indirectamente con un registro de índice. Éste trabaja con los
          registros de datos, permitiendo a un programa procesar hilos de
          información eficazmente.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registros de segmento: </v-col>
        <v-col>
          Un registro de segmento tiene 16 bits de longitud y facilita un área
          de memoria para direccionamiento conocida como segmento actual. •
          Registro Cs: El dos almacena la dirección inicial del segmento de
          código de un programa en el registro CS Indica la dirección de una
          instrucción que es buscada para su ejecución. • Registro Ds: Genera
          una referencia a la localidad de un byte específico en el segmento de
          datos. • Registro SS: Permite la colocación en memoria de una pila,
          para almacenamiento temporal de dirección y datos. • Registro ES: Se
          utiliza para algunas operaciones con cadenas de caracteres se utiliza
          para el manejo de direccionamiento de memoria.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registros de propósito general: </v-col>
        <v-col>
          Los registros de propósito general son el AX, BX, CX, y DX, de 16
          bits. Cada uno de ellos se divide en dos registros de 8 bits, llamados
          AH y AL, BH y BL, CH y CL, y, DH y DL, H significando High (alto) y L
          significando Low (bajo), indicando la parte alta o la parte baja del
          registro correspondiente de 16 bits. • Registro AX: El registro es el
          registro acumulador, es utilizado para operaciones que implican
          entrada/salida, y multiplicación y división (estas dos últimas en
          conjunto con el registro DX). • Registro BX: El registro es el
          registro base, y es el único registro de propósito general que puede
          ser un índice para direccionamiento indexado. • Registro CX: El
          registro es conocido como el registro contador. Puede contener un
          valor para controlar el número de veces que un ciclo se repite o un
          valor para corrimiento de bits. • Registro DX: El de datos se indica
          mediante el número de puerto de entrada/salida, y en las operaciones
          de multiplicación y división de 16 bits.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registros de apuntadores:</v-col>
        <v-col>
          Los registros SP (apuntador de pila) y BP (apuntador base) están
          asociados con el registro SS y permiten al sistema acceder a datos en
          el segmento de la pila. • Registro SP: El apuntador de pila de 16 bits
          está asociado con el segmento SS y proporciona un valor de
          desplazamiento que se refiere a la palabra actual que está siendo
          procesada en la pila. • Registro BP: El apuntador base de 16 bits
          facilita la referencia de parámetros dentro de la pila.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registros de banderas:</v-col>
        <v-col>
          Es un registro de 16 bits, de los cuales nueve sirven para indicar el
          estado actual de la máquina y el resultado del procesamiento.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Registro de punteros de instrucción: </v-col>
        <v-col>
          El registro IP de 16 bits contiene el desplazamiento de dirección de
          la siguiente instrucción que se ejecuta. El IP está asociado con el
          registro CS en el sentido de que el IP indica la instrucción actual
          dentro del segmento de código que se está ejecutando actualmente en la
          memoria.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Registros visibles para el usuario</v-col>
        <v-col>
          <v-row>
            <v-col>
              Se dice que un registro es visible al usuario para significar el
              hecho de que puede ser referenciado por medio del lenguaje máquina
              que ejecuta la CPU. Se pueden clasificar en las siguientes
              categorías:
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Los registros de uso general pueden se asignados por el
              programador a diversas funciones. A veces, su uso dentro del
              repertorio de instrucciones es ortogonal a la operación. Es decir,
              cualquier registro de uso general puedecontener el operando para
              cualquier código de operación. Esto proporciona una utilización de
              registros de auténtico uso general. Con frecuencia, sin embargo,
              existen restricciones, por ejemplo puede haber registros
              específicos para operaciones con coma flotante y operaciones de
              pila.
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              En algunos casos, los registros de uso general pueden utilizarse
              para funciones de direccionamiento. En otros casos hay una
              separación parcial o total entre registros de datos y registros de
              direcciones, los primeros pueden usarse únicamente para contener
              datos, y no pueden emplearse en cálculo de una dirección de un
              operando. Los registros de dirección pueden ser de uso más o menos
              general, o pueden estar dedicados a un modo de direccionamiento
              particular. Se pueden citar los siguientes ejemplos:
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              Punteros de segmento: En una máquina con direccionamiento
              segmentado un registro de segmento contiene la dirección de la
              base del segmento. Puede haber múltiples registros, por ejemplo
              uno para el SO y otro para el proceso actual.
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Registros índices: Se usan para el direccionamiento indexado, y pueden
          ser auto indexado.
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              Puntero de pila: Si existe direccionamiento a pila visible al
              usuario, la pila está normalmente en memoria, y hay registro
              dedicado que apunta a la cabecera de esta. Esto permite el
              direccionamiento implícito, es decir, apilar, desapilar y otras
              instrucciones de la pila que no necesitan contener un operando
              explícito referente a ella.
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Aquí hay varias cuestiones de diseño a estudiar, una importante es
              si se usan registros de uso completamente general o si especificar
              su uso.
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Con el uso de registros especializados, generalmente puede quedar
              implícito en el código de la operación a qué tipo de registro se
              refiere un determinado campo de operando. El campo de operando
              solo debe identificar uno de entre un conjunto de registros
              especializados, en lugar de uno de entre todos los registros, lo
              cual ahorra bits.
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>Registros de control y estados</v-col>
      </v-row>

      <v-row>
        <v-col>
          Hay diversos registros del procesador que se emplean para controlar su
          funcionamiento. La mayoría de ellos, en la mayor parte de las máquinas
          no son visibles por el usuario, pero alguno de ellos puede ser visible
          por ciertas instrucciones máquina ejecutadas en un modo privilegiado o
          de sistema operativo. Naturalmente, diferentes máquinas tendrán
          distinta organización de registros y usarán distinta terminología.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Son esenciales cuatro registros para la ejecución de una instrucción:
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <ul>
            <li>
              Contador de programa (Program Counter- PC): Contiene la dirección
              de la instrucción a buscar.
            </li>
            <li>
              Registro de instrucción (Instruction Register- IR): Contiene la
              instrucción buscada mas recientemente.
            </li>
            <li>
              Registro de dirección de memoria (Memory Address Register- MAR):
              Contiene la dirección de una posición de memoria.
            </li>
            <li>
              Registro amortiguador de memoria (Memory Buffer Register - MBR):
              Contiene el dato a escribir en una posición de memoria o el dato
              contenido en una posición de memoria leído más recientemente.
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          No todos los procesadores tienen registros internos designados como
          MAR o MBR pero se necesita algún mecanismo de almacenamiento
          intermedio equivalente mediante el cual se de salida a los bits que
          van a ser transferidos por el bus de sistema se almacenen los bits
          leídos por el bus de datos.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Típicamente, el procesador actualiza el PC luego de cada búsqueda de
          instrucción, de manera que siempre apunte a la siguiente instrucción a
          ejecutar. Una instrucción de bifurcación o salto también modificará el
          valor del registro PC. La instrucción buscada se carga en IR, donde
          son analizados los códigos de operación y los campos de operando. Se
          intercambian datos con la memoria por medio del MAR y el MBR. El MAR
          se conecta con el bus de direcciones y el MBR con el bus de datos. Los
          registros visibles por el usuario repetidamente cambian datos con MBR.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> CICLO DE LA INSTUCCION</v-col>
      </v-row>

      <v-row>
        <v-col>
          Un ciclo de instrucción (también llamado ciclo de fetch-and-execute o
          ciclo de fetchdecode-execute en inglés) es el período que tarda la
          unidad central de proceso (CPU) en ejecutar una instrucción de
          lenguaje máquina. Comprende una secuencia de acciones determinada que
          debe llevar a cabo la CPU para ejecutar cada instrucción en un
          programa. Cada instrucción del juego de instrucciones de una CPU puede
          requerir diferente número de ciclos de instrucción para su ejecución.
          Un ciclo de instrucción está formado por uno o más ciclos máquina.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> CICLO FETCH-DECODE-EXECUTE</v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">
          1.- Buscar la instrucción en la memoria principal
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se vuelca el valor del contador de programa sobre el bus de
          direcciones. Entonces la CPU pasa la instrucción de la memoria
          principal a través del bus de datos al Registro de Datos de Memoria
          (MDR). A continuación el valor del MDR es colocado en el Registro de
          Instrucción Actual (CIR), un circuito que guarda la instrucción
          temporalmente de manera que pueda ser decodificada y ejecutada.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> 2.- Decodificar la instrucción </v-col>
      </v-row>

      <v-row>
        <v-col>
          El decodificador de instrucción interpreta e implementa la
          instrucción. El registro de instrucción (IR) mantiene la instrucción
          en curso mientras el contador de programa (PC, program counter) guarda
          la dirección de memoria de la siguiente instrucción a ser ejecutada.
          Recogida de datos desde la memoria principal También se lee la
          dirección efectiva de la memoria principal si la instrucción tiene una
          dirección indirecta, y se recogen los datos requeridos de la memoria
          principal para ser procesados y colocados en los registros de datos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> 3.- Ejecutar la instrucción </v-col>
      </v-row>

      <v-row>
        <v-col>
          A partir del registro de instrucción, los datos que forman la
          instrucción son decodificados por la unidad de control. Ésta
          interpreta la información como una secuencia de señales de control que
          son enviadas a las unidades funcionales relevantes de la CPU para
          realizar la operación requerida por la instrucción.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> 4.- Almacenar o guardar resultados </v-col>
      </v-row>

      <v-row>
        <v-col>
          El resultado generado por la operación es almacenado en la memoria
          principal o enviado a un dispositivo de salida dependiendo de la
          instrucción. Basándose en los resultados de la operación, el contador
          de programa se incrementa para apuntar a la siguiente instrucción o se
          actualiza con una dirección diferente donde la próxima instrucción
          será recogida.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Ciclo de búsqueda </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los pasos 1 y 2 del ciclo de instrucción se conocen como ciclo de
          búsqueda (fetch). Estos pasos son idénticos en todas las
          instrucciones. El ciclo de búsqueda procesa la instrucción a partir de
          la palabra de instrucción, que contiene el código de operación y el
          operando.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Ciclo de ejecución.</v-col>
      </v-row>

      <v-row>
        <v-col>
          Los pasos 3 y 4 del ciclo de instrucción se conocen como ciclo de
          ejecución. Estos pasos cambiarán con cada tipo de instrucción. • El
          primer paso del ciclo de ejecución es el proceso de memoria, en que
          los datos se transfieren entre la CPU y el módulo de entrada/salida
          (I/O). • A continuación se produce el proceso de datos, que usa
          operaciones matemáticas así como operaciones lógicas en referencia a
          los datos. • Después tiene lugar el paso de alteraciones centrales,
          que son una secuencia de operaciones, por ejemplo una operación de
          salto. El último paso es una operación combinada de todos los otros
          pasos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Segmentacion de instrucciones</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es una técnica que permite implementar el paralelismo a nivel de
          instrucción en un único procesador. La segmentación intenta tener
          ocupadas con instrucciones todas las partes del procesador dividiendo
          las instrucciones en una serie de pasos secuenciales que efectuarán
          distintas unidades de la CPU, tratando en paralelo diferentes partes
          de las instrucciones. Permite una mayor tasa de transferencia efectiva
          por parte de la CPU que la que sería posible a una determinada
          frecuencia de reloj, pero puede aumentar la latencia debido al trabajo
          adicional que supone el propio proceso de la segmentación. El número
          de pasos dependientes varían según la arquitectura de la máquina.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Conjunto de instrucciones</v-col>
      </v-row>

      <v-row>
        <v-col>
          Una máquina puede llegar a funcionar con un juego de instrucciones muy
          limitado (recuérdese, por ejemplo, la máquina de Turing que sólo tiene
          4 instrucciones, incluso se han diseñado máquinas teóricas con menos
          instrucciones), esto simplificaría mucho los circuitos de la máquina.
          Sin embargo, un conjunto de instrucciones demasiado simplificado
          origina, como consecuencia, unos programas demasiado complejos e
          ineficientes. Es necesario encontrar un compromiso entre la
          simplicidad del hardware y del software. Un mínimo para llegar a ese
          compromiso se consigue con los tipos de instrucciones siguientes:
          Instrucciones de transferencia de datos. Instrucciones aritméticas.
          Instrucciones lógicas. Instrucciones de control del flujo del programa
          (bifurcaciones, bucles, procedimientos, etc.) Instrucciones de entrada
          y salida. En los apartados siguientes iremos viendo con detalle
          algunos de estos tipos de instrucciones. Si bien es cierto que el
          conjunto de instrucciones debe de cumplir unos mínimos para conseguir
          una mínima eficiencia en los programas, también se verá que ésta no se
          aumenta indefinidamente al incrementar el número de instrucciones de
          la máquina.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Tipo de instrucciones</v-col>
      </v-row>

      <v-row>
        <v-col>
          Una máquina puede llegar a funcionar con un juego de instrucciones muy
          limitado (recuérdese, por ejemplo, la máquina de Turing que sólo tiene
          4 instrucciones, incluso se han diseñado máquinas teóricas con menos
          instrucciones), esto simplificaría mucho los circuitos de la máquina.
          Sin embargo, un conjunto de instrucciones demasiado simplificado
          origina, como consecuencia, unos programas demasiado complejos e
          ineficientes. Es necesario encontrar un compromiso entre la
          simplicidad del hardware y del software.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">MODOS DE DIRECCIONAMIENTO</v-col>
      </v-row>

      <v-row>
        <v-col>
          Son las diferentes maneras de especificar un operando dentro de una
          instrucción. Un modo de direccionamiento especifica la forma de
          calcular la dirección de memoria efectiva de un operando mediante el
          uso de la información contenida en registros dentro de una instrucción
          de la máquina.
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
