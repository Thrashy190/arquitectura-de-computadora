<template>
  <div>
    <div class="text-h3 font-weight-bold d-flex mb-6 justify-center">
      UNIDAD 4
    </div>
    <v-container>
      <v-row>
        <v-col class="title">
          ASPECTOS BÁSICOS DE LA COMPUTACIÓN PARALELA
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          La computación paralela es una forma de cómputo en la que muchas
          instrucciones se ejecutan simultáneamente, operando sobre el principio
          de que problemas grandes a menudo se pueden dividir en unos más
          pequeños, que luego son resueltos simultáneamente (en paralelo). Hay
          varias formas diferentes de computación paralela: paralelismo a nivel
          de bit, paralelismo a nivel de instrucción, paralelismo de datos y
          paralelismo de tareas.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El paralelismo se ha empleado durante muchos años, sobre todo en la
          computación de altas prestaciones, pero el interés en ella ha crecido
          últimamente debido a las limitaciones físicas que impiden el aumento
          de la frecuencia. Como el consumo de energía y por consiguiente la
          generación de calor de las computadoras constituye una preocupación en
          los últimos años, la computación en paralelo se ha convertido en el
          paradigma dominante en la arquitectura de computadores, principalmente
          en forma de procesadores multinúcleo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los programas informáticos paralelos son más difíciles de escribir que
          los secuenciales, porque la concurrencia introduce nuevos tipos de
          errores de software, siendo las condiciones de carrera los más
          comunes. La comunicación y sincronización entre diferentes subtareas
          son algunos de los mayores obstáculos para obtener un buen rendimiento
          del programa paralelo. La máxima aceleración posible de un programa
          como resultado de la paralelización se conoce como la ley de Amdahl.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Ley de Amdahl y ley de Gustafson </v-col>
      </v-row>

      <v-row>
        <v-col>
          La aceleración potencial de un algoritmo en una plataforma de cómputo
          en paralelo está dada por la ley de Amdahl, formulada originalmente
          por Gene Amdahl en la década de 1960. Esta señala que una pequeña
          porción del programa que no pueda paralelizarse va a limitar la
          aceleración que se logra con la paralelización. Los programas que
          resuelven problemas matemáticos o ingenieriles típicamente consisten
          en varias partes paralelizables y varias no paralelizables
          (secuenciales).
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          La ley de Gustafson es otra ley en computación que está en estrecha
          relación con la ley de Amdahl. Ambas leyes asumen que el tiempo de
          funcionamiento de la parte secuencial del programa es independiente
          del número de procesadores. La ley de Amdahl supone que todo el
          problema es de tamaño fijo, por lo que la cantidad total de trabajo
          que se hará en paralelo también es independiente del número de
          procesadores, mientras que la ley de Gustafson supone que la cantidad
          total de trabajo que se hará en paralelo varía linealmente con el
          número de procesadores. Dependencias.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Entender la dependencia de datos es fundamental en la implementación
          de algoritmos paralelos. Ningún programa puede ejecutar más
          rápidamente que la cadena más larga de cálculos dependientes (conocida
          como la ruta crítica), ya que los cálculos que dependen de cálculos
          previos en la cadena deben ejecutarse en orden. Sin embargo, la
          mayoría de los algoritmos no consisten sólo de una larga cadena de
          cálculos dependientes; generalmente hay oportunidades para ejecutar
          cálculos independientes en paralelo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Sea Pi y Pj dos segmentos del programa. Las condiciones de Bernstein
          describen cuando los dos segmentos son independientes y pueden
          ejecutarse en paralelo. Para Pi, sean Ii todas las variables de
          entrada y Oi las variables de salida, y del mismo modo para Pj.Pi y Pj
          son independientes si satisfacen.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Una violación de la primera condición introduce una dependencia de
          flujo, correspondiente al primer segmento que produce un resultado
          utilizado por el segundo segmento. La segunda condición representa una
          anti-dependencia, cuando el segundo segmento (Pj) produce una variable
          que necesita el primer segmento (Pi). La tercera y última condición
          representa una dependencia de salida: Cuando dos segmentos escriben en
          el mismo lugar, el resultado viene del último segmento ejecutado.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Condiciones de carrera, exclusión mutua, sincronización, y
          desaceleración paralela
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las subtareas en un programa paralelo a menudo son llamadas hilos.
          Algunas arquitecturas de computación paralela utilizan versiones más
          pequeñas y ligeras de hilos conocidas como hebras, mientras que otros
          utilizan versiones más grandes conocidos como procesos. Sin embargo,
          «hilos» es generalmente aceptado como un término genérico para las
          subtareas. Los hilos a menudo tendrán que actualizar algunas variables
          que se comparten entre ellos. Las instrucciones entre los dos
          programas pueden entrelazarse en cualquier orden.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Las aplicaciones a menudo se clasifican según la frecuencia con que
          sus subtareas se sincronizan o comunican entre sí. Una aplicación
          muestra un paralelismo de grano fino si sus subtareas deben comunicase
          muchas veces por segundo, se considera paralelismo de grano grueso si
          no se comunican muchas veces por segundo, y es vergonzosamente
          paralelo si nunca o casi nunca se tienen que comunicar.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Modelos de consistencia </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los lenguajes de programación en paralelo y computadoras paralelas
          deben tener un modelo de consistencia de datos también conocido como
          un modelo de memoria.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          El modelo de consistencia define reglas para las operaciones en la
          memoria del ordenador y cómo se producen los resultados. Uno de los
          primeros modelos de consistencia fue el modelo de consistencia
          secuencial de Leslie Lamport. La consistencia secuencial es la
          propiedad de un programa en la que su ejecución en paralelo produce
          los mismos resultados que un programa secuencial.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Específicamente, es un programa secuencial consistente si "... los
          resultados de una ejecución son los mismos que se obtienen si las
          operaciones de todos los procesadores son ejecutadas en un orden
          secuencial, y las operaciones de cada procesador individual aparecen
          en esta secuencia en el orden especificado por el programa".
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Taxonomía de Flynn</v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Single Instruction, Single Data (SISD).</div>
          <div>
            Hay un elemento de procesamiento, que tiene acceso a un único
            programa y a un almacenamiento de datos. En cada paso, el elemento
            de procesamiento carga una instrucción y la información
            correspondiente y ejecuta esta instrucción. El resultado es guardado
            de vuelta en el almacenamiento de datos. Luego SISD es el computador
            secuencial convencional, de acuerdo al modelo de von Neumann.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Multiple Instruction, Single Data (MISD)</div>
          <div>
            Hay múltiples elementos de procesamiento, en el que cada cual tiene
            memoria privada del programa, pero se tiene acceso común a una
            memoria global de información. En cada paso, cada elemento de
            procesamiento de obtiene la misma información de la memoria y carga
            una instrucción de la memoria privada del programa. Luego, las
            instrucciones posiblemente diferentes de cada unidad, son ejecutadas
            en paralelo, usando la información (idéntica) recibida
            anteriormente. Este modelo es muy restrictivo y no se ha usado en
            ningún computador de tipo comercial.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">Single Instruction, Multiple Data (SIMD).</div>
          <div>
            Hay múltiples elementos de procesamiento, en el que cada cual tiene
            acceso privado a la memoria de información (compartida o
            distribuida). Sin embargo, hay una sola memoria de programa, desde
            la cual una unidad de procesamiento especial obtiene y despacha
            instrucciones. En cada paso, cada unidad de procesamiento obtiene la
            misma instrucción y carga desde su memoria privada un elemento de
            información y ejecuta esta instrucción en dicho elemento.
          </div>
          <div>
            Entonces, la instrucción es síncronamente aplicada en paralelo por
            todos los elementos de proceso a diferentes elementos de
            información. Para aplicaciones con un grado significante de
            paralelismo de información, este acercamiento puede ser muy
            eficiente. Ejemplos pueden ser aplicaciones multimedia y algoritmos
            de gráficos de computadora.
          </div>
        </v-col>
        <v-col>
          <div class="subtitle">
            Multiple Instruction, Multiple Data (MIMD).
          </div>
          <div>
            Hay múltiples unidades de procesamiento, en la cual cada una tiene
            tanto instrucciones como información separada. Cada elemento ejecuta
            una instrucción distinta en un elemento de información distinto. Los
            elementos de proceso trabajan asíncronamente. Los clusters son
            ejemplo son ejemplos del modelo MIMD.
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title">
          Sistemas de memoria distribuida (multicomputadores)
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Cada procesador tiene su propia memoria y la comunicación se realiza
          por intercambio explícito de mensajes a través de una red.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Ventajas</div>
          <div>
            <ul>
              <li>
                El número de nodos puede ir desde algunas decenas hasta varios
                miles (o más)
              </li>
              <li>
                La arquitectura de paso de mensajes tiene ventajas sobre la de
                memoria compartida cuando el número de procesadores es grande.
              </li>
              <li>
                El número de canales físicos entre nodos suele oscilar entre
                cuatro y ocho.
              </li>
              <li>
                Esta arquitectura es directamente escalable y presenta un bajo
                coste para sistemas grandes.
              </li>
              <li>
                Un problema se especifica como un conjunto de procesos que se
                comunican entre sí y que se hacen corresponder sobre la
                estructura física de procesadores.
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="subtitle">Desventajas</div>
          <div>
            <ul>
              <li>
                Se necesitan técnicas de sincronización para acceder a las
                variables compartidas.
              </li>
              <li>
                La contención en la memoria puede reducir significativamente la
                velocidad.
              </li>
              <li>
                No son fácilmente escalables a un gran número de procesadores.
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> Redes de interconexión estáticas </v-col>
      </v-row>

      <v-row>
        <v-col>
          Los multicomputadores utilizan redes estáticas con enlaces directos
          entre nodos. Cuando un nodo recibe un mensaje lo procesa si viene
          dirigido a dicho nodo. Si el mensaje no va dirigido al nodo receptor
          lo reenvía a otro por alguno de sus enlaces de salida siguiendo un
          protocolo de encaminamiento.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Propiedades más significativas</v-col>
      </v-row>

      <v-row>
        <v-col>
          <ul>
            <li>
              Topología de la red: determina el patrón de interconexión entre
              nodos.
            </li>
            <li>
              Diámetro de la red: distancia máxima de los caminos más cortos
              entre dos nodos de la red.
            </li>
            <li>
              Latencia: retardo de tiempo en el peor caso para un mensaje
              transferido a través de la red.
            </li>
            <li>
              Ancho de banda: Transferencia máxima de datos en Mbytes/segundo.
            </li>
            <li>
              Escalabilidad: posibilidad de expansión modular de la red. -Grado
              de un nodo: número de enlaces o canales que inciden en el nodo.
            </li>
            <li>
              Algoritmo de encaminamiento: determina el camino que debe seguir
              un mensaje desde el nodo emisor al nodo receptor.
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="title"> CASOS PARA ESTUDIO </v-col>
      </v-row>

      <v-row>
        <v-col>
          Por numerosos motivos, el procesamiento distribuido se ha convertido
          en un área de gran importancia e interés dentro de la ciencia de la
          computación, produciendo profundas transformaciones en las líneas de
          investigación y desarrollo.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Interesa realizar investigación en la especificación, transformación,
          optimización y evaluación de algoritmos distribuidos y paralelos.
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Esto incluye el diseño y desarrollo de sistemas paralelos, la
          transformación de algoritmos secuenciales en paralelos, y las métricas
          de evaluación de performance sobre distintas plataformas de soporte
          (hardware y software). Más allá de las mejoras constantes en las
          arquitecturas físicas de soporte, uno de los mayores desafíos se
          centra en cómo aprovechar al máximo la potencia de las mismas.
        </v-col>
      </v-row>

      <v-row>
        <v-col class="subtitle"> Líneas de investigación y desarrollo </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <ul>
              <li>
                Paralelización de algoritmos secuenciales. Diseño y optimización
                de algoritmos.
              </li>
              <li>Arquitecturas multicore y multithreading en multicore.</li>
              <li>
                Modelos de representación y predicción de performance de
                algoritmos paralelos.
              </li>
              <li>
                Mapping y scheduling de aplicaciones paralelas sobre distintas
                arquitecturas multiprocesador.
              </li>
              <li>
                Métricas del paralelismo. Speedup, eficiencia, rendimiento,
                granularidad, superlinealidad.
              </li>
              <li>
                Balance de carga estático y dinámico. Técnicas de balanceo de
                carga.
              </li>
              <li>
                Análisis de los problemas de migración y asignación óptima de
                procesos y datos a procesadores.
              </li>
              <li>Patrones de diseño de algoritmos paralelos.</li>
              <li>
                Escalabilidad de algoritmos paralelos en arquitecturas
                multiprocesador distribuidas.
              </li>
              <li>
                Implementación de soluciones sobre diferentes modelos de
                arquitectura homogéneas y heterogéneas.
              </li>
              <li>
                Laboratorios remotos para el acceso transparente a recursos de
                cómputo paralelo.
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
