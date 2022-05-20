<template>
  <div>
    <div class="text-h3 font-weight-bold d-flex mb-6 justify-center">
      UNIDAD 1
    </div>
    <v-container>
      <div class="title">Arquitetura de computadoras</div>

      <div class="mb-10">
        <div class="subtitle">Arquitecturas clasicas</div>
        <div>
          Estas arquitecturas se desarrollaron en las primeras computadoras
          electromecánicas y de tubos de vacío. Hay dos arquitecturas distintas
          relacionadas con el uso y distribución de la memoria: Arquitectura de
          Jonh Von Neumman y Arquitectura Harvard.
        </div>
      </div>

      <v-row>
        <v-col> <div class="subtitle">Arquitectura Von Neumann</div> </v-col>
        <v-col> <div class="subtitle">Modelo Harvard</div></v-col>
      </v-row>

      <v-row class="d-flex flex-row align-center">
        <v-col>
          <div>
            La unidad central de proceso (CPU), está conectada a una memoria
            principal única (casi siempre sólo RAM) donde se guardan las
            instrucciones del programa y los datos. A dicha memoria se accede a
            través de un sistema interconexión de buses único (control,
            direcciones y datos). En un sistema con arquitectura Von Neumann el
            tamaño de la unidad de datos o instrucciones está fijado por el
            ancho del bus que comunica la memoria con la CPU. El tener un único
            bus hace que el microprocesador sea más lento en su respuesta, ya
            que no puede buscar en memoria una nueva instrucción mientras no
            finalicen las transferencias de datos de la instrucción anterior.
            Componentes principales de Von Neumann: Unidad de Memoria. Unidad de
            Entrada/Salida. Unidad de Control. Incluidos CPU. Unidad Aritmética
            Lógica. Incluida en CPU. Registros de Programas. Incluidos en CPU.
            Modelo Von Neumann. Las instrucciones provenientes del sistema de
            entrada, son almacenados por la memoria, procesados por la ALU bajo
            la dirección de la unidad de control. Los resultados obtenidos son
            enviados a la unidad de salida. En las computadoras de programa
            almacenado, el programa puede manipularse como si se tratara de
            datos. Este concepto da origen a los compiladores, sistemas
            operativos y es la base de la gran versatilidad de las computadoras
            modernas. Limitaciones Von Neumann La longitud de las instrucciones
            por el bus de datos, que hace que el microprocesador tenga que
            realizar varios accesos a memoria para buscar instrucciones
            complejas. La velocidad de operación a causa del bus único para
            datos e instrucciones que no deja acceder simultáneamente a unos y
            otras, lo cual impide superponer ambos tiempos de accesos.
          </div>
        </v-col>
        <v-col>
          <div>
            Esta arquitectura utiliza los Micro controladores, tiene la unidad
            central de proceso (CPU) conectada a dos memorias (una con las
            instrucciones y otra con los datos) por medio de dos buses
            diferentes. Una de las memorias contiene solamente las instrucciones
            del programa (Memoria de Programa), y la otra sólo almacena datos
            (Memoria de Datos). Ambos buses son totalmente independientes lo que
            permite que la CPU pueda acceder de forma independiente y simultánea
            a la memoria de datos y a la de instrucciones. El tamaño de las
            instrucciones no está relacionado con el de los datos, y por lo
            tanto puede ser optimizado para que cualquier instrucción ocupe una
            sola posición de memoria de programa, logrando así mayor velocidad y
            menor longitud de programa. La principal desventaja de esta
            arquitectura; el bus de datos y direcciones único se convierte en un
            cuello de botella por el cual debe pasar toda la información que se
            lee de o se escribe a la memoria, obligando a que todos los accesos
            a esta sean secuenciales. Limita el grado de paralelismo (acciones
            que se pueden realizar al mismo tiempo) y por lo tanto, el desempeño
            de la computadora.
          </div>
        </v-col>
      </v-row>

      <div class="mb-8 mt-8">
        <div class="subtitle">Arquitectura segmentada</div>
        <div>
          Es una de las tecnologías utilizadas para realizar la segmentación o
          paralelismo. Divide el procesador, en etapas, procesa una instrucción
          diferente en cada una y trabaja con varias a la vez. Pueden trabajar
          de forma paralela, en diferentes instrucciones, utilizando una cola de
          instrucciones para su comunicación, denominado entubamiento. La
          técnica de implementación clave utilizada para hacer CPU.
        </div>

        <!-- Poner imagen aqui -->
      </div>

      <v-row>
        <v-col class="subtitle">¿Qué es Pipeling?</v-col>
      </v-row>
      <v-row>
        <v-col>
          La segmentación de cauce (pipelining) es una forma efectiva de
          organizar el hardware del CPU para realizar más de una operación al
          mismo tiempo. Consiste en descomponer el proceso de ejecución de las
          instrucciones en fases o etapas que permitan una ejecución simultánea.
          Las etapas están conectadas, cada una a la siguiente, para formar una
          especie de cauce las instrucciones se entran por un extremo, son
          procesadas a través de las etapas y salen por el otro. La
          productividad de la segmentación está determinada por la frecuencia
          con que una instrucción salga del cauce.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">Tipos de cauces:</v-col>
      </v-row>

      <ul class="mb-5">
        <li>
          <span class="subtitle">Unifunción:</span>
          ejecutan un único proceso.
        </li>
        <li>
          <span class="subtitle"> Multifunción: </span>
          Multifunción: pueden ejecutar varios procesos.
        </li>
        <li>
          <span class="subtitle">Estáticos:</span>
          en un instante determinado sólo pueden ejecutar uno.
        </li>
        <li>
          <span class="subtitle">Dinámicos:</span> pueden ejecutar
          simultáneamente varios procesos.
        </li>
        <li>
          <span class="subtitle">Lineal:</span> a cada etapa sólo le puede
          seguir otra etapa concreta.
        </li>
        <li>
          <span class="subtitle">No lineal: </span>se pueden establecer
          recorridos complejos de las etapas.
        </li>
      </ul>

      <v-row>
        <v-col class="title"> ARQUITECTURA DE MULTIPROCESAMIENTOS </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se denomina multiprocesador a un computador que cuenta con dos o más
          microprocesadores (CPUs). La arquitectura NUMA, donde cada procesador
          tiene acceso y control exclusivo a una parte de la memoria. La
          arquitectura SMP, donde todos los procesadores comparten toda la
          memoria. Para que un multiprocesador opere correctamente necesita un
          sistema operativo especialmente diseñado para ello.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los CPU de multiprocesamiento según Flynn se clasifican de la
          siguiente manera:
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">SISO</div>
          <div>
            (Single Instruction, Single Operand) computadoras. Monoprocesador
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">SIMO</div>
          <div>
            (Single Instruction, Multiple Operand) procesadores vectoriales,
            Exenciones MMX
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="subtitle">MISO</div>
          <div>(Multiple Instruction, Single Operand) No implementado</div>
        </v-col>
        <v-col>
          <div class="subtitle">MIMO</div>
          <div>
            (Multiple Instruction, Multiple Operand) sistemas SMP, Clusters,
            GPUs
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            Los procesadores vectoriales, son computadoras pensadas para aplicar
            un mismo algoritmo numérico a una serie de datos matriciales, en
            especial en la simulación de sistemas físicos complejos, tales como
            simuladores de clima, explosiones atómicas, reacciones químicas,
            etc. Donde los datos son representados como grandes números de datos
            en forma matricial sobre los que se deben se aplicar el mismo
            algoritmo numérico.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            Los Procesadores Digitales de Señales (DSP), son procesadores
            especializados en el procesamiento de señales tales como audio,
            vídeo, radar, sonar, radio, etc. Cuentan con instrucciones tipo
            vectorial que los hace muy aptos para dicha aplicación.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">SMP</v-col>
      </v-row>

      <v-row>
        <v-col>
          En los sistemas SMP (Simetric Multiprocessing), varios procesadores
          comparten la misma memoria principal y periféricos de Entrada /Salida,
          normalmente conectados por un bus común.
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Se conocen como simétricos, ya que ningún procesador toma el papel de
          maestro y los demás de esclavos, sino que todos tienen derechos
          similares en cuanto al acceso a la memoria y periféricos y ambos son
          administrados por el sistema operativo. Pueden formarse con varios
          núcleos en un solo circuito integrado o con varios circuitos
          integrados en una misma tarjeta madre. La primera opción ha sido
          popularizada al hacerse más económicos los procesadores multinúcleo de
          los principales fabricantes y con su uso en sistemas de gama media y
          baja, e inclusive en teléfonos celulares y tabletas.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          La segunda opción fue la que se uso en un principio y sigue siendo
          usada en en estaciones de trabajo y en servidores de alto rendimiento
          debido a que incrementa el poder computacional del sistema, pero
          también incrementa considerablemente el costo del sistema.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Clusters </v-col>
      </v-row>

      <v-row>
        <v-col>
          Conjuntos de computadoras independientes conectadas en una red de área
          local o por un bus de interconexión y que trabajan cooperativamente.
          Con un sistema de procesamiento paralelo o distribuido.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Es clave en su funcionamiento contar con un sistema operativo y
          programas de aplicación capaces de distribuir el trabajo entre las
          computadoras de la red.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se debe tener cuidado al implementar la aplicación, ya que si los
          datos que hay que pasar de un procesador a otro son demasiados, el
          tiempo empleado en pasar información de un nodo a otro puede
          sobrepasar a la ganancia que se tiene al dividir el trabajo entre
          varios procesadores.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> PROCESADORES GRAFICOS </v-col>
      </v-row>

      <v-row>
        <v-col>
          Sistemas diseñados originalmente para el procesamiento de gráficos,
          con múltiples procesadores vectoriales sencillos compartiendo la misma
          memoria. La cual también puede ser accedida por el CPU. Por la gran
          cantidad de núcleos con los que cuenta, logran un excelente desempeño
          al ejecutar algoritmos que se adaptan a ser paralelizados, a tal grado
          que muchas de las supercomputadoras más rápidas de la actualidad
          utilizan estos procesadores, y los fabricantes de tarjetas gráficas
          producen versiones de sus productos especializadas en acelerar los
          cálculos de propósito general.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> ANALISIS DE COMPONENTES </v-col>
      </v-row>

      <div>
        <p>
          Los programas cada vez más grandes y complejos demandan mayor
          velocidad en el procesamiento de información, lo que implica la
          elección de microprocesadores más rápidos y eficientes.
        </p>
        <p>
          Para esto la decisión va por dos razones, primero, el juego de
          instrucciones decide:
        </p>
        <p>
          El diseño físico del conjunto: Cualquier operación que deba ejecutarse
          en el microprocesador deberá poder ser descrita en términos de un
          lenguaje de estas instrucciones.
        </p>
      </div>

      <v-row>
        <v-col class="subtitle">ARQUITECTURAS CISC</v-col>
      </v-row>

      <div>
        <p>
          En la arquitectura computacional, CISC es un modelo de arquitectura,
          en donde los microprocesadores tienen un conjunto instrucciones que
          caracterizan por ser muy amplio y permitir operaciones complejas entre
          operandos, situados en la memoria o en los registros internos.
        </p>
        <p>
          Este tipo de arquitectura dificulta el paralelismo entre
          instrucciones, por lo que, en la actualidad, la mayoría de los
          sistemas CISC de alto rendimiento implementan un sistema que convierte
          dichas instrucciones complejas en varias instrucciones simples del
          tipo RISC, llamadas generalmente microinstrucciones.
        </p>
        <p>
          Dato importante: Los CISC pertenecen a la primera corriente de
          construcción de procesadores, antes del desarrollo de los RISC. Ademas
          Para realizar una sola instrucción un chip CISC requiere de cuatro a
          diez ciclos de reloj.
        </p>
      </div>

      <v-row>
        <v-col>Entre las ventajas de CISC destacan las siguientes:</v-col>
      </v-row>

      <ul>
        <li>Reduce la dificultad de crear compiladores.</li>
        <li>Permite reducir el costo total del sistema.</li>
        <li>Reduce los costos de creación de software.</li>
        <li>Mejora la compactación de código.</li>
        <li>Facilita la depuración de errores.</li>
      </ul>

      <v-row>
        <v-col>
          Ejemplo de microprocesadores basados en la tecnología CISC:
        </v-col>
      </v-row>
      <div class="d-flex flex-row justify-space-around">
        <div>
          <div class="subtitle">Intel</div>
          <ul>
            <li>8086</li>
            <li>8088</li>
            <li>80286</li>
            <li>80386</li>
            <li>80486</li>
          </ul>
        </div>

        <div>
          <div class="subtitle">Motorola</div>
          <ul>
            <li>68000</li>
            <li>68010</li>
            <li>68020</li>
            <li>68030</li>
            <li>6840</li>
          </ul>
        </div>
      </div>

      <v-row>
        <v-col class="subtitle"> ARQUITECTURA RISC</v-col>
      </v-row>

      <v-row>
        <v-col>
          Arquitectura computacional, RISC (Reduced Instruction Set Computer) es
          un tipo de microprocesador con las siguientes características
          fundamentales:
        </v-col>
      </v-row>

      <div class="mb-5">
        <ul>
          <li>
            Instrucciones de tamaño fijo y presentado en un reducido número de
            formatos.
          </li>
          <li>
            Sólo las instrucciones de carga y almacenamiento acceden a la
            memoria de datos.
          </li>
          <li>
            El objetivo de diseñar máquinas con esta arquitectura es posibilitar
            la segmentación y el paralelismo en la ejecución de instrucciones y
            reducir los accesos a memoria. Las máquinas RISC protagonizan la
            tendencia actual de construcción de microprocesadores.
          </li>
        </ul>
      </div>

      <v-row>
        <v-col>
          Ejemplo de microprocesadores basados en la tecnología RISC:
        </v-col>
      </v-row>

      <v-row>
        <v-col> MIPS, Millions Instruction Per Second </v-col>
        <v-col> PA-RISC, Hewlett Packard </v-col>
        <v-col>
          SPARC, Scalable Processor Architecture, Sun Microsystems
        </v-col>
        <v-col> POWER PC, Apple, Motorola e IBM </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">UNIDAD CENTRAL DE PROCESAMIENTO </v-col>
      </v-row>

      <v-row>
        <v-col>
          Se la suele llamar coloquialmente como microprocesador o simplemente
          procesador, y puedes considerarla como el cerebro de cualquier
          dispositivo. Se encarga de procesar todas las instrucciones del
          dispositivo, leyendo las órdenes y requisitos del sistema operativo,
          así como las instrucciones de cada uno de los componentes y las
          aplicaciones.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          CPU es la que se encarga de que todo funcione correctamente, y de
          interpretar todo lo que quiere hacer el sistema operativo o los
          componentes, estableciendo las conexiones y realizando todos los
          cálculos precisos para que funcione. Cuanto más potente sea el
          procesador, más rápido podrá hacer las operaciones y más rápido
          funcionará tu dispositivo en general.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los CPUs modernos se pueden clasificar por sus características como:
        </v-col>
      </v-row>

      <div>
        <div>
          <div class="subtitle">TAMAÑO DE LA UNIDAD ARITMÉTICA LÓGICA</div>
        </div>
        <div>
          Es un circuito que permite, como su nombre lo indica, realizar
          operaciones lógicas y aritméticas Además de los operadores lógicos y
          aritméticos, la ALU cuenta con una serie de registros para almacenar
          los datos, y bits de información sobre los resultados, también
          llamados banderas
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">BUS DE CONEXIÓN AL EXTERIOR</div>
        </div>
        <div>
          Los buses podemos clasificarlos en: bus de datos y bus de direcciones.
          Entre estos existe una fuerte relación, puesto que para cada
          instrucción o dato enviado por uno de los dos buses, el otro
          transporta información acerca de esa instrucción o dato. En los
          primeros PC el bus era de 8 bits; es decir, solamente tenía ocho
          líneas de datos. En la actualidad, los buses que se utilizan pueden
          ser de 16, 32, 64, 128 o más bits.
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">ARQUITECTURA PIPELINE</div>
        </div>
        <div>
          Es una serie de elementos de procesamiento de datos ordenados de tal
          modo que la salida de cada uno es la entrada del siguiente
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">ARQUITECTURA CISC</div>
        </div>
        <div>
          Promueve el uso de gran número de instrucciones, permitiendo
          operaciones complejas entre operandos situados en memoria o en
          registros internos
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">Arquitectura RISC</div>
        </div>
        <div>
          Se trata de un tipo de procesador especialmente rápido que utiliza una
          tecnología del tipo pipeline muy desarrollada, lo que le faculta para
          operar con un alto nivel de simultaneidad
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">ARQUITECTURA VON NEUMANN</div>
        </div>
        <div>
          Propone la utilización de una unidad central de procesamiento o CPU,
          que contiene una unidad aritmético lógica capaz de llevar a cabo
          cálculos matemáticos sencillos, un conjunto de registros que permiten
          el almacenamiento temporal de datos y direcciones de memoria, y una
          unidad de control que se encarga de recoger las instrucciones desde la
          memoria principal, de decodificarlas y ejecutarlas (Cpu actuales)
        </div>
      </div>

      <div>
        <div>
          <div class="subtitle">ARQUITECTURA HARVARD</div>
        </div>
        <div>
          Es una configuración de la computadora en la que los datos y las
          instrucciones de un programa se encuentran en celdas separadas de
          memoria, que se pueden abordar de forma independiente.
        </div>
      </div>

      <v-row>
        <v-col class="subtitle">CLASIFICACIÓN:</v-col>
      </v-row>

      <v-row>
        <v-col>
          Para la selección de los procesadores a utilizar en los equipos
          necesitamos ver las acciones tales como:
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>Acciones Directas</div>
          <div>Integrar un nuevo sistema de cómputo.</div>
          <div>Reemplazar un CPU dañado.Actualizar un sistema de cómputo</div>
        </v-col>
        <v-col>
          <div>Acciones Indirectas</div>
          <div>Comprar equipo de cómputo nuevo.</div>
          <div>Construir un equipo de control – Microcontrolador.</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">UNIDAD ARITMETICA LOGICA</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es un circuito logico digital que realiza operaciones aritmeticas y
          logicas entres los datos de un circuito: suma resta, division y
          multiplicacion, asi como establece comparaciones logicas a traves de
          los condicionales logicos "si", "no", y "o".
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Todos los microprocesadores incluyen al menos una ALU, que varia su
          poder y complejidadsegún su finalidad Además, la ALU cuenta con una
          serie de registros para almacenar los datos y bits de informacion
          sobre los resultados.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Operaciones a realizar por la ALU: </v-col>
      </v-row>

      <div>
        <ul>
          <li>Suma aritmetica</li>
          <li>Resta aritmetica</li>
          <li>Operaciones loficas</li>
          <li>Desplazamiento o retacion</li>
          <li>Transferencia</li>
        </ul>
      </div>

      <v-row>
        <v-col>
          El circuito ALU es solo un operador, no puede tomar decisiones.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las entradas deben contener tanto la magnitud como el signo que
          corresponda a la operacion.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          La ALU deberá contar con un circuito de control que le permita:
        </v-col>
      </v-row>

      <div>
        <ul>
          <li>Identificar la operación a realizar</li>
          <li>Administrar los recursos internos.</li>
          <li>Generar las banderas</li>
        </ul>
      </div>

      <v-row>
        <v-col class="subtitle"> UNIDAD DE CONTROL</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es la parte “inteligente” del sistema microprocesador, de los CPs. Es
          el centro lógico de la computadora ya que los recursos de una
          computadora son administrados en la unidad de control, es esta unidad
          la que se encarga de dirigir el flujo de datos.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las instrucciones del CPU se encuentran incorporadas en la unidad de
          control, estas instrucciones o conjunto de instrucciones enumeran
          todas las operaciones que un CPU puede realizar. Cada instrucción es
          expresada en microcódigo. Antes de que un programa sea ejecutado, cada
          comando debe desglosarse en instrucciones que correspondan a las que
          están en las instrucciones del CPU.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Al momento de ejecutar el programa, el CPU lleva a cabo las
          instrucciones en orden convirtiéndolas en microcódigo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cuando un CPU es desarrollado, el conjunto de instrucciones tiene los
          mismos comandos que su predecesor, aparte de incluirle algunos nuevos.
          Esto permite que el software escrito para un CPU trabaje con
          computadoras con procesadores más recientes, esta estrategia es
          llamada compatibilidad ascendente.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Esta característica permite ahorrar a los consumidores comprar un
          sistema nuevo cada vez que una parte del sistema es actualizada. Se le
          conoce compatibilidad decreciente o inversa, cuando un dispositivo del
          hardware o pieza del software puede interactuar con el mismo equipo y
          software que su predecesor
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> SISTEMAS MICROPROGRAMALES </v-col>
      </v-row>

      <v-row>
        <v-col>
          El conjunto de instrucciones que conforman cada instrucción, vienen
          grabadas de fábrica en el chip del CPU, en una memoria de tipo ROM y
          por lo general no es accesible al programador. Este tipo de sistema se
          denomina microprogramado.El conjunto de instrucciones que conforman
          cada instrucción, vienen grabadas de fábrica en el chip del CPU, en
          una memoria de tipo ROM y por lo general no es accesible al
          programador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Funciones de la unidad de control: </v-col>
      </v-row>

      <div>
        <ol>
          <li>Decodificación de las instrucciones.</li>
          <li>Sincronización de las tareas.</li>
        </ol>
      </div>

      <v-row>
        <v-col class="subtitle"> REGISTROS DE LOS PROCESADORES </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los registros que encuentran dentro de cada procesador su función
          principales almacenar los valores de cada uno de los
          datos,comandos,instrucciones o estados binarios que son los que
          ordenan qué dato debe procesarse, así como la forma en la que se debe
          realizar.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Un registro no deja de ser una memoria de velocidad alta y con poca
          capacidad. Cada registro puede contener una instrucción, una dirección
          de almacenamiento o cualquier tipo de dato.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cada procesador tiene varias asignaciones o tareas que debe de
          realizar para el manejo de la información. La información es recibida
          generalmente en código binario, procedente de las aplicaciones para,
          después, procesarlos de una forma determinada.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> Tipos de registros </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los registros del procesador se dividen o clasifican atendiendo al
          propósito que sirven o a las instrucciones que les ordenan.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Registros de datos</div>
          <div>
            Guardan valores de datos numéricos, como son los caracteres o
            pequeñas órdenes. Los procesadores antiguos tenían un registro
            especial de datos: el acumulador, el cual era usado para operaciones
            determinadas.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Registro de datos de memoria (MDR)</div>
          <div>
            Es un registro que se encuentra en el procesador y que está
            conectado al bus de datos. Tiene poca capacidad y una velocidad alta
            por la que escribe o lee los datos del bus que van dirigidos a la
            memoria o al puerto E/S, es decir, un periférico.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Registros de direcciones</div>
          <div>
            Guardan direcciones que son usadas para acceder a la memoria
            principal o primaria, que solemos conocer como ROM o RAM. En este
            sentido, podemos ver procesadores con registros que se usan solo
            para guardar direcciones o valores numéricos.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Registros de propósito general (GPRs)</div>
          <div>
            Son registros que sirven para almacenar direcciones o datos
            generales. Se trata de una especie de registros mixtos que, como su
            propio indica, no tienen una función específica.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Registros de propósito específico (SPRs)</div>
          <div>
            En esta ocasión, estamos ante registros que guardan datos del estado
            del sistema, como puede ser el registro de estado o el instruction
            pointer.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Registros de estado</div>
          <div>
            Sirven para guardar valores reales cuya función es determinar cuándo
            una instrucción debe ejecutarse o no.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Registros constantes</div>
          <div>
            Su cometido es guardar valores de sólo lectura como son el 0, 1 ó π.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="title">BUSES</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Un bus se puede definir como una línea de interconexión portadora de
          información, constituida por varios hilos conductores (en sentido
          físico) o varios canales (en sentido de la lógica), por cada una de
          las cuales se transporta un bit de información.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Existen dos tipos primordiales de buses (conexiones) para el envío de
          la información: bus paralelo o serial.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          -Bus paralelo: Es un bus en el cual los datos son enviados por bytes
          al mismo tiempo, con la ayuda de varias líneas que tienen funciones
          fijas. La cantidad de datos enviada es bastante grande con una
          frecuencia moderada y es igual al ancho de los datos por la frecuencia
          de funcionamiento. En los computadores ha sido usado de manera
          intensiva, desde el bus del procesador, los buses de discos duros,
          tarjetas de expansión y de vídeo hasta las impresoras.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          -Bus serie: En este los datos son enviados, bit a bit y se
          reconstruyen por medio de registros o rutinas de software. Está
          formado por pocos conductores y su ancho de banda depende de la
          frecuencia. Es usado desde hace menos de 10 años en buses para discos
          duros, tarjetas de expansión y para el bus del procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> BUSES DEL PROCESADOR </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Bus de Direcciones</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es unidireccional debido a que la información fluye es una solo
          sentido, del CPU a la memoria ó a los elementos de entrada y salida.
          El CPU puede colocar niveles lógicos en las n líneas de dirección, con
          la cual se genera 2n posibles direcciones diferentes. Cada una de
          estas direcciones corresponde a una localidad de la memoria ó
          dispositivo de E / S. El procesador envía un código de dirección a la
          memoria o a otro dispositivo externo. El tamaño o anchura del bus de
          direcciones está especificado por el número de hilos conductores o
          pines.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Bus de Datos </v-col>
      </v-row>

      <v-row>
        <v-col>
          Es bidireccional, pues los datos pueden fluir hacia ó desde el CPU.Las
          terminales pueden ser entradas ó salidas, según la operación que se
          este realizando ( lectura ó escritura ).En todos los casos, las
          palabras de datos transmitidas tiene m bits de longitud debido a que
          el CPU maneja palabras de datos de m bits; del número de bits del bus
          de datos, depende la clasificación del procesador.En algunos
          procesadores, el bus de datos se usa para transmitir otra información
          además de los datos.Es compartido en el tiempo ó multiplexado.
          Transfieren datos o códigos de instrucción hacia el procesador o se
          envían hacia el exterior los resultados de las operaciones o cálculos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Bus de Control </v-col>
      </v-row>

      <v-row>
        <v-col>
          Este conjunto de señales se usa para sincronizar las actividades y
          transacciones con los periféricos del sistema. Algunas de estas
          señales, como Lectura o Escritura R / W , son señales que el CPU envía
          para indicar que tipo de operación se espera en ese momento.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> TECNOLOGIA DE BUSES</v-col>
      </v-row>

      <v-row>
        <v-col>
          El número de líneas que forman los buses (ancho del bus) es
          fundamental: Si un bus está compuesto por 16 líneas, podrá enviar 16
          bits al mismo tiempo. Los buses conectan toda la circuitería interna.
          Es decir, los distintos subsistemas del ordenador intercambian datos
          gracias a los buses.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">
          Clasificacion de los buses según su criterio fisico:
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">+Bus Interno:</v-col>
        <v-col>
          Este mueve datos entre los componentes internos del microprocesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">+Bus local</v-col>
        <v-col>
          De alta velocidad que conecta el procesador a la caché, el controlador
          de la caché también puede acceder al bus del sistema, con esta
          implementación, la mayor parte de los datos a los que va a acceder el
          procesador, que están en la caché, serán entregados a una alta
          velocidad, otro punto a destacar de esta parte es que los accesos a
          memoria por parte de la caché no van a interrumpir el flujo de datos
          entre procesador y caché. También se ve la posibilidad de conectar un
          dispositivo de entrada salida al bus local.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">+Bus del sistema</v-col>
        <v-col
          >En el está conectada la memoria y por debajo el bus de expansión, al
          cual se pueden conectar una amplia diversidad de dispositivos, entre
          el bus del sistema y el bus de expansión se encuentra una interface,
          que entre las principales tareas está la de adaptar las velocidades de
          transmisión, por ejemplo para un dispositivo muy lento conectado al
          bus de expansión la interface podría acumular una cierta cantidad de
          datos y luego transmitirla a través del bus del sistema. Todas las
          partes del microprocesador están unidas mediante diversas líneas
          eléctricas. El conjunto de estas líneas se denominan bus interno del
          microprocesador. Por este bus interno circulan los datos (bus de
          datos), las señales de control (bus de control) o las direcciones de
          memoria (bus de direcciones). Cuando se habla de un microprocesador de
          32 bits, el número de líneas del bus interno es de 32.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">+Bus Externo</v-col>
        <v-col>
          Este se utiliza para comunicar el procesador y otras partes, como
          periféricos y memoria.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">+Buses multiplexados básicos</v-col>
        <v-col>
          En las computadora, el microprocesador controla (y se comunica con)
          las memorias y los dispositivos de entrada/salida (E/S) a través de la
          estructura de bus interna. El bus está multiplexado de manera que
          cualquiera de los dispositivos que están conectados al mismo pueda
          enviar o recibir datos hacia o desde los otros dispositivos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">MEMORIA</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es un dispositivo que puede mantenerse en por lo menos dos estados
          estables por un cierto periodo de tiempo. Cada uno de estos estados
          estables puede utilizarse para representar un bit. A un dispositivo
          con la capacidad de almacenar por lo menos un bit se le conoce como
          celda básica de memoria.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Un dispositivo de memoria completo se forma con varias celdas básicas
          y los circuitos asociados para poder leer y escribir dichas celdas
          básicas, agrupadas como localidades de memoria que permitan almacenar
          un grupo de N bits.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">MEMORIA PRINCIPAL SEMICONDUCTORA</v-col>
      </v-row>

      <v-row>
        <v-col>
          La memoria del semiconductor utiliza en su arquitectura circuitos
          integrados basados en semiconductores para almacenar información. Un
          chip de memoria de semiconductor puede contener millones de minúsculos
          transistores o condensadores. Existen memorias de semiconductor de
          ambos tipos: volátiles y no volátiles.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          En las computadoras modernas, la memoria principal consiste casi
          exclusivamente en memoria de semiconductor volátil y dinámica, también
          conocida como memoria dinámica de acceso aleatorio o más comúnmente
          RAM (Random Access Memory).
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">MEMORIA CACHÉ</v-col>
      </v-row>

      <v-row>
        <v-col>
          Es la memoria de acceso rápido de una computadora, que guarda
          temporalmente las últimas informaciones procesadas. La memoria caché
          es un búfer especial de memoria que poseen las computadoras, que
          funciona de manera similar a la memoria principal, pero es de menor
          tamaño y de acceso más rápido. Es usada por el procesador para reducir
          el tiempo de acceso a datos ubicados en la memoria principal que se
          utilizan con más frecuencia. La caché es una memoria que se sitúa
          entre la unidad central de procesamiento (CPU) y la memoria de acceso
          aleatorio (RAM) para acelerar el intercambio de datos. Cuando se
          accede por primera vez a un dato, se hace una copia en la caché; los
          accesos siguientes se realizan a dicha copia, haciendo que sea menor
          el tiempo de acceso medio al dato. Cuando el procesador necesita leer
          o escribir en una ubicación en memoria principal, primero verifica si
          una copia de los datos está en la memoria caché; si es así, el
          procesador de inmediato lee o escribe en la memoria caché, que es
          mucho más rápido que de la lectura o la escritura a la memoria
          principal.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Memoria caché nivel 1 ( L1). </v-col>
        <v-col>
          También llamada memoria interna, se encuentra en el núcleo del
          procesador. Es utilizada para almacenar y acceder a datos e
          instrucciones importantes y de uso frecuente, agilizando los procesos
          al ser el nivel que ofrece un tiempo de respuesta menor. Se divide en
          dos subniveles: Nivel 1 Data caché: se encarga de almacenar datos
          usados frecuentemente. Nivel 1 Instruction caché: se encarga de
          almacenar instrucciones usadas frecuentemente.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Memoria caché nivel 2 (L2). </v-col>
        <v-col>
          Se encarga de almacenar datos de uso frecuente, es mayor que la caché
          L1, pero a costa de ser más lenta, aun así es más rápida que la
          memoria principal (RAM). Puede ser inclusiva y contener una copia del
          nivel 1 además de información extra, o exclusiva y que su contenido
          sea totalmente diferente de la cache L1, proporcionando así mayor
          capacidad total.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Memoria caché nivel 3 ( L3)</v-col>
        <v-col>
          Es más rápida que la memoria principal (RAM), pero más lenta que L2,
          ayuda a que el sistema guarde gran cantidad de información agilizando
          las tareas del procesador.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">MODULOS ENTRADA / SALIDA</v-col>
      </v-row>

      <v-row>
        <v-col>
          Para poder hacer una operación entre el procesador y un periférico, se
          necesita conectar estos dispositivos a la computadora y gestionar de
          manera correcta la transferencia de datos. Esto, se puede realizar
          mediante los sistemas de módulos de Entrada/Salida. Estos módulos
          están conectados con el procesador y la memoria principal, cada uno
          controla uno o más dispositivos externos.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Entrada/Salida mediante interrupciones </v-col>
      </v-row>

      <v-row>
        <v-col>
          Esta técnica pretende evitar que el procesador pare o haga trabajo
          improductivo, mientras que espera a que el periférico esté preparado
          para hacer una nueva operación. El hardware de la computadora,
          necesita tener un conjunto de líneas de control del bus del sistema y
          de petición de interrupción.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          1.El procesador ejecuta instrucciones de un programa. Al finalizar
          cada instrucción comprueba si se ha producido una interrupción.
        </v-col>
        <v-col>
          2.En caso afirmativo se salva el estado actual del programa (contador
          del programa y registros) y se salta a ejecutar la rutina de servicio
          correspondiente.
        </v-col>
        <v-col>
          3.La rutina de servicio efectúa las operaciones apropiadas en la E/S
          para realizar la transferencia de datos solicitada.
        </v-col>
        <v-col>
          4.Al finalizar la rutina de servicio se recupera el estado de la CPU y
          se continúa ejecutando el programa que se estaba ejecutando antes de
          la interrupción.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle">Las interrupciones pueden ser:</v-col>
      </v-row>

      <v-row>
        <v-col>ENMASCARABLES (se pueden dejar de atender por software)</v-col>
        <v-col>NO ENMASCARABLES (siempre atendidas).</v-col>
        <v-col>
          Dos formas de conocer la dirección/posición (vector) donde se
          encuentra la rutina de servicio de la interrupción:
        </v-col>
        <v-col>
          Vector de interrupciones siempre FIJO ó el periférico suministra el
          vector de interrupción
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
