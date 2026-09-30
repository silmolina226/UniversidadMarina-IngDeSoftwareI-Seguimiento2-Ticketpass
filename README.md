# UniversidadMarina-IngDeSoftwareI-Seguimiento2-Ticketpass
Proyecto transversal de Ingeniería de Software para el análisis de requisitos, estimación formal (esfuerzo, tiempo, costo), gestión de riesgos y planificación con GitHub Projects en el caso de estudio TicketPass.

# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 1: Del Problema a las Historias de Usuario

------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1. Marco Teórico y Conceptos Clave

### 1.1. Del Problema al Requisito
En la Ingeniería de Requisitos, el desarrollo de software comienza primero comprendiendo el dominio del problema:

* **Problema:** La dolencia, ineficiencia o falla real que experimenta el cliente o usuario final en su contexto actual.
* **Necesidad:** La transformación deseada u objetivo operativo que debe lograrse para resolver el problema.
* **Requisito Funcional:** La especificación precisa de la funcionalidad que el software debe ejecutar para satisfacer la necesidad.

### 1.2. Historias de Usuario (HU)
Una Historia de Usuario es una representación estructurada y agilista de un requisito funcional, enfocada en el valor entregado al rol que interactúa con el sistema.

**Estructura estándar:**
* **Como** [Rol del usuario / Actor]
* **Quiero** [Acción o funcionalidad solicitada]
* **Para** [Beneficio, valor de negocio u objetivo alcanzado]

### 1.3. Criterios de Aceptación (Reglas INVEST)
Son las condiciones explícitas, reglas de negocio y límites operativos que deben cumplirse para verificar que una Historia de Usuario se ha completado correctamente. Siguen los principios INVEST (creadas por Bill Wake para evaluar y asegurar la calidad de las historias de usuario en metodologías ágiles):
* **I - Independiente (Independent)**: La historia debe poder desarrollarse y entregarse sin depender estrictamente de otra.
* **N - Negociable (Negotiable)**: No es un contrato cerrado; los detalles se discuten y acuerdan entre el equipo y el cliente.
* **V - Valiosa (Valuable)**: Aporta un beneficio claro y real para el usuario final o el negocio.
* **E - Estimable (Estimable)**: El equipo técnico comprende el requerimiento lo bastante bien para calcular el esfuerzo necesario.
* **S - Pequeña (Small)**: Tiene el tamaño ideal para completarse con éxito dentro de un mismo sprint.
* **T - Comprobable o Testeable (Testable)**: Contiene la información y los criterios de aceptación necesarios para verificar mediante pruebas que funciona.

---

## 2. Caso de Estudio Modelo: TicketPass

### Descripción del Dominio
*TicketPass* es una plataforma web para la comercialización y gestión de boletería en eventos y festivales de alta concurrencia. El sistema aborda problemáticas de colapso de servidores por tráfico masivo, fraudes en la reventa de entradas y lentitud en la parametrización de ofertas comerciales.

### Actores del Sistema
1. **Comprador / Fan:** Consulta el catálogo, ingresa a la fila virtual, selecciona la zona del escenario y realiza el pago de la boletería.
2. **Organizador del Evento:** Parametriza la disponibilidad de zonas, gestiona fases de venta y monitorea el recaudo.
3. **Logística / Puerta:** Escanea y valida la autenticidad del código QR dinámico desde la aplicación de control de acceso.

### Mapeo de Requisitos (Matriz de Transformación)

| Problema Identificado | Necesidad de Software | Requisito Funcional |
| :--- | :--- | :--- |
| Colapso de la plataforma web durante la venta inicial por alta concurrencia. | Administrar y ordenar el tráfico masivo de peticiones simultáneas. | El sistema debe asignar un turno en fila virtual a los usuarios cuando las peticiones superen las 1.000 solicitudes/minuto. |
| Falsificación y duplicación de boletas en los puntos de acceso al evento. | Garantizar la autenticidad e infalsificabilidad de las entradas digitales. | El sistema debe generar un código QR dinámico cifrado que se actualice cada 30 segundos dentro de la aplicación móvil. |
| Errores humanos y lentitud al configurar los aforos y precios por localidad. | Digitalizar y centralizar el control de capacidad de los recintos. | El sistema debe permitir parametrizar zonas, límites de aforo y esquemas de precios de forma dinámica antes del lanzamiento comercial. |

---

## 3. Especificación del Taller Práctico 09-09-2026

### Modalidad
* Trabajo en equipos de máximo 4 integrantes.

### Criterios de Selección del Proyecto por Equipo
El proyecto propuesto por cada grupo debe cumplir con los siguientes parámetros:
* **Enfoque Transaccional o de Gestión:** Debe permitir la interacción de al menos 2 o 3 roles de usuario distintos con permisos diferenciados (ejm: Cliente, Administrador, Operador).
* **Problema de Dominio Real:** Debe resolver una ineficiencia o necesidad clara del mundo real (ejm: reservas, controles, gestiónes, etc).
* **Complejidad Adecuada:** Debe permitir extraer un alcance mínimo de 5 a 8 Historias de Usuario principales.

### Instrucciones Paso a Paso
1. **Definición del Proyecto del Grupo:** Seleccionar una idea de software de la vida real. Definir nombre del proyecto y una breve contextualización del problema.
2. **Configuración del Entorno:**
   * Crear un repositorio público en GitHub por equipo.
   * Configurar un proyecto interno de tipo **Board** en la pestaña *Projects* con las columnas: `Todo`, `In Progress` y `Done`.
3. **Elaboración del Documento de Requisitos:**
   * Crear la carpeta `/DOCS` en el repositorio y añadir el archivo `01_requisitos.md`.
   * Identificar al menos **3 actores principales** del sistema.
   * Construir una tabla con mínimo **3 problemas**, sus respectivas necesidades de software y requisitos funcionales.
4. **Creación del Backlog en GitHub Issues:**
   * Redactar entre **5 y 8 Historias de Usuario** en la pestaña *Issues* del repositorio.
   * Aplicar la estructura estándar (`Como / Quiero / Para`) e incluir al menos 3 criterios de aceptación por historia con casillas de verificación.
   * Vincular los *Issues* al tablero de *GitHub Projects* en la columna `Todo`.

---

## 4. Criterios de Evaluación y Rúbrica de Calificación (5.0 Puntos

| Criterio | Descripción | Puntaje |
| :--- | :--- | :--- |
| **Documentación de Requisitos** | El archivo `DOCS/01_requisitos.md` incluye los 3 actores y la tabla completa con 3 problemas, necesidades y requisitos funcionales alineados. | 1.5 pts |
| **Redacción Agilista de HUs** | Las 5 a 8 historias en *GitHub Issues* cumplen estrictamente la estructura agilista (`Como [rol] Quiero [acción] Para [beneficio]`). | 2.0 pts |
| **Criterios de Aceptación (INVEST)** | Cada historia especifica al menos 3 criterios de aceptación verificables mediante casillas de verificación (`- [ ]`). | 1.5 pt |


------------------------------------------------------------------------------------------------------------------------------------------------------

# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 2: Valor de Negocio, Priorización y Estimación Empírica

---

## 1. Marco Teórico

### 1.1. Valor de Negocio y Criterios de Impacto
El **Valor de Negocio** determina el beneficio estratégico, operativo o financiero que aporta una funcionalidad al sistema. No todos los requisitos aportan el mismo retorno ni deben construirse simultáneamente.

Para evaluar el valor de negocio con rigor técnico, analizamos su **Criterio de Impacto Principal**:
* **Impacto Operativo:** Garantiza la estabilidad, disponibilidad y funcionamiento continuo del servicio. Evita caídas o fallos críticos.
* **Impacto Financiero / Monetario:** Permite el recaudo, la transacción económica y la generación directa de ingresos.
* **Impacto en Experiencia de Usuario (UX):** Optimiza la usabilidad y la interacción visual, facilitando el uso sin ser indispensable para la transacción.

### 1.2. Priorización mediante el Método MoSCoW
La técnica **MoSCoW** ayuda a categorizar el backlog para definir el alcance del proyecto:
* **M - Must Have (Imprescindible):** Vitales para la operación básica. Sin ellas el sistema no puede funcionar en producción.
* **S - Should Have (Debería tener):** De alto valor e importancia, pero sustituibles o postergables para el lanzamiento inicial.
* **C - Could Have (Podría tener):** Deseables o secundarias; solo se implementan si se dispone de tiempo sobrante.
* **W - Won't Have (No por ahora):** Fuera del alcance para la iteración actual.

### 1.3. Estimación Empírica (Cualitativa)
Evaluación inicial basada en el juicio intuitivo, experiencia previa del equipo y nivel de complejidad técnica percibida (**Baja, Media, Alta**), previa a la asignación de métricas cuantitativas.

---

## 2. Caso de Estudio Modelo: TicketPass

### 2.1. Matriz de Priorización y Estimación Empírica

| ID Issue | Historia de Usuario | Categoría MoSCoW | Criterio de Impacto (Valor de Negocio) | Justificación Estratégica | Estimación Empírica (Cualitativa) |
| :-: | :--- | :-: | :--- | :--- | :--- |
| **#1** | HU01 - Fila Virtual para Compra de Boletas | **Must Have** | Impacto Operativo | Evita la caída masiva del servidor durante picos de demanda alta. | Alta complejidad técnica y alto riesgo de infraestructura. |
| **#2** | HU02 - Generación de Código QR Dinámico para Entradas | **Must Have** | Impacto Financiero y Seguridad | Protege el recaudo evitando la clonación, falsificación y reventa no autorizada. | Complejidad media por lógica de cifrado temporal. |
| **#3** | HU03 - Parametrización de Zonas y Precios de Boletería | **Must Have** | Impacto Financiero | Habilita la configuración comercial del evento. Sin esto no hay venta posible. | Complejidad baja (CRUD estándar de formularios). |
| **#4** | HU04 - Selección de Boletas mediante Mapa Interactivo | **Should Have** | Impacto UX | Mejora la experiencia visual de selección, pero se puede sustituir por una lista desplegable en la fase 1. | Complejidad media-alta por interfaz gráfica interactiva. |
| **#5** | HU05 - Validación de Boletas en Punto de Acceso | **Must Have** | Impacto Operativo | Permite al equipo de logística verificar en tiempo real el ingreso en el recinto. | Complejidad baja-media (consumo de API y cámara). |

### 2.2. Alcance del Producto Mínimo Viable (MVP)

El **Producto Mínimo Viable (MVP)** para el lanzamiento de **TicketPass** se compondrá únicamente de las historias clasificadas como **Must Have** (`#1`, `#2`, `#3` y `#5`).

* **Justificación de Selección:** Se cubren las tres dimensiones críticas del negocio (estabilidad operativa, recaudo financiero y validación de acceso en puerta).
* **Funcionalidades Postergadas:** La historia `#4` (**Mapa Interactivo**) se pospone para el siguiente ciclo de desarrollo, sustituyéndola temporalmente por una selección de zona mediante menú desplegable convencional.

---

## 3. Especificación del Taller Práctico 16/09/2026

### Modalidad
* Trabajo en equipos de máximo 4 integrantes.

### Instrucciones Paso a Paso
1. **Priorización MoSCoW:**
   * Clasificar las Historias de Usuario en la matriz del archivo `DOCS/02_priorizacion.md`.
2. **Creación y Asignación de Labels en GitHub Issues:**
   * Crear en el repositorio las etiquetas (`must-have`, `should-have`, `could-have`, `wont-have`) y asignarlas a cada Issue.
3. **Ejercicio de Estimación Empírica:**
   * Registrar una justificación cualitativa del nivel de dificultad (Baja, Media, Alta) según el conocimiento del equipo.
4. **Comparación entre Equipos:**
   * Un representante de cada equipo revisa el backlog de otro grupo para validar si la clasificación MoSCoW es coherente.

---

## 4. Criterios de Evaluación y Rúbrica (5.0 Puntos)

| Criterio | Descripción | Puntaje |
| :--- | :--- | :--- |
| **Documentación (`02_priorizacion.md`)** | Matriz MoSCoW completa, justificación del valor de negocio y delimitación del MVP. | 1.5 pts |
| **Configuración en GitHub Issues** | Creación y asignación correcta de las etiquetas de prioridad (Labels) en todos los Issues. | 1.5 pts |
| **Estimación Empírica Cualitativa** | Identificación coherente de los niveles de complejidad (Baja/Media/Alta) para cada historia. | 1.0 pt |
| **Co-evaluación / Feedback Cruzado** | Participación activa en la validación y comparación de backlogs entre equipos. | 1.0 pt |


---
# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 3: Estimación Formal, Juicio de Expertos, Tiempo, Esfuerzo y Costos

---

## 1. Organización del Equipo de Trabajo (Asignación de Roles)

Dado que cada equipo de trabajo consta de **4 integrantes**, antes de iniciar el proceso de estimación deben asignar explícitamente los siguientes roles:

* **Product Owner (PO):** Representa la voz del cliente. Su responsabilidad en esta clase es explicar el alcance de cada Historia de Usuario y verificar que la estimación técnica respete las prioridades del negocio.
* **Líder Técnico / Lead Dev:** Guiar las discusiones de arquitectura, resolver empates técnicos durante la votación de estimación y velar por la coherencia técnica del proyecto.
* **Desarrollador(a) 1 y Desarrollador(a) 2:** Evaluar el esfuerzo de codificación, integración con base de datos, lógica de negocio y pruebas necesarias para completar cada funcionalidad.

---

## 2. Marco Teórico y Fundamentos Matemáticos

### 2.1. El Product Backlog (Pila de Producto)
El **Product Backlog** no es más que la lista priorizada de todas las **Historias de Usuario (HU)** que construyeron y registraron en clases anteriores dentro de sus *GitHub Issues*. En esta sesión tomaremos ese Backlog para asignarle tiempo y costo real.

### 2.2. ¿Qué son los Story Points (SP) y cómo se derivan?
Un **Story Point (SP)** es una unidad abstracta de medida que evalúa la **Carga Global de Trabajo**. Se compone de tres factores:

$$\text{Story Point (SP)} = \text{Complejidad Algorítmica} + \text{Volumen de Trabajo} + \text{Incertidumbre o Riesgo Técnico}$$

### 2.3. Planning Poker y la Secuencia de Fibonacci Modificada
**Planning Poker** es una técnica de estimación por consenso diseñada para evitar el sesgo de autoridad (evita que el equipo vote mecánicamente lo que diga un solo integrante). 

#### ¿Por qué usamos la Secuencia de Fibonacci ($1, 2, 3, 5, 8, 13, 20...$)?
Porque en la ingeniería de software **la incertidumbre no escala de manera lineal, sino exponencial**:
* Distinguir entre una tarea de 1 hora y una de 2 horas es sencillo.
* Distinguir entre una tarea de 13 horas y 14 horas es imposible por la alta variabilidad.
* Por ello, los saltos en la escala ($3 \rightarrow 5 \rightarrow 8 \rightarrow 13$) obligan al equipo a reconocer que, cuanto más grande es una funcionalidad, mayor es el riesgo de desviación.

### 2.4. Trazabilidad: ¿Cómo se determina la Historia Pivote y las Comparaciones?
1. **Paso 1 (Determinación de la Historia Pivote):** El equipo revisa su Backlog y busca la historia más pequeña, sencilla y clara de implementar. A esta historia se le asigna de manera arbitraria la carta pivote de **2 SP**.
2. **Paso 2 (Comparación Relativa contra la Pivote):**
   * *Si la Historia B es igual de sencilla que la Pivote:* Votan **2 SP**.
   * *Si la Historia C requiere el doble de trabajo y tiene más lógica de base de datos:* No se vota 4 (no existe en la escala), se vota **5 SP**.
   * *Si la Historia D implica integraciones externas, alta seguridad o algoritmos complejos:* Se vota **8 SP** o **13 SP**.

---

### 2.5. Tarifas de la Industria y Estándares de Software

* **¿Por qué $1\text{ SP} = 8\text{ Horas}$?** En la industria de software, un estándar altamente aceptado es equiparar 1 Punto de Historia con 1 día laboral efectivo de desarrollo de software (8 horas de trabajo)[cite: 11].
* **Tarifas por Hora en la Industria (Colombia y LatAm):**
  * *Desarrollador Junior / Mid (Colombia):* $35.000 COP a $50.000 COP / Hora (~ $8 a $12 USD / Hora).
  * *Desarrollador Senior / Lead (LatAm Remote):* $80.000 COP a $150.000 COP / Hora (~ $20 a $40 USD / Hora).
  * **Parámetro para nuestro curso:** Utilizaremos una tarifa estándar profesional de **$45.000 COP / Hora**.

---

### 2.6. Fórmulas de Conversión Financiera

#### FÓRMULA 1: Esfuerzo de Desarrollo en Horas ($E_i$)
Calcula el total de horas requeridas para construir la historia $i$:

$$E_i = \text{SP}_i \times F_c \quad [\text{Horas}]$$

*(Donde **F_c = 8 Horas/SP** es el Factor de Conversión).*

#### FÓRMULA 2: Costo Financiero por Historia ($C_i$)
Calcula el costo en Pesos Colombianos (COP) de la historia $i$:

$$C_i = E_i \times T_h \quad [\text{COP}]$$

*(Donde **T_h = 45.000 COP/Hora** es la Tarifa Horaria).*

#### FÓRMULA 3: Sumatorias Totales del Proyecto ($E_{\text{total}}$ y $C_{\text{total}}$)
Calcula el esfuerzo acumulado y el presupuesto global del proyecto sumando los resultados de cada una de las $n$ historias:

$$E_{\text{total}} = \sum_{i=1}^{n} E_i = E_1 + E_2 + E_3 + \dots + E_n \quad [\text{Horas}]$$

$$C_{\text{total}} = \sum_{i=1}^{n} C_i = C_1 + C_2 + C_3 + \dots + C_n \quad [\text{COP}]$$

---

## 3. Demostración Paso a Paso con el Caso TicketPass

### 3.1. Parámetros del Proyecto
* **Equipo:** 1 Product Owner, 1 Líder Técnico, 2 Desarrolladoras/es.
* **Historia Pivote Base:** `HU03 - Parametrización de Zonas y Precios` = **2 SP**.
* **Factor de Conversión ($F_c$):** 8 Horas / SP.
* **Tarifa Profesional ($T_h$):** $45.000 COP / Hora.

---

### 3.2. Desglose Matemático Detallado Historia por Historia

#### Historia #1: `HU01 - Fila Virtual para Compra de Boletas`
* **Votación Planning Poker:** **13 SP** (Complejidad muy alta por manejo de concurrencia masiva y colas distribuidas).
* **Cálculo de Esfuerzo ($E_1$):** $E_1$ = 13 SP × 8 Horas/SP = 104 Horas
* **Cálculo de Costo ($C_1$):** $C_1$ = 104 Horas × 45.000 COP/Hora = **4.680.000 COP**

#### Historia #2: `HU02 - Generación de Código QR Dinámico para Entradas`
* **Votación Planning Poker:** **5 SP** (Complejidad media: en comparación con la pivote de 2 SP, esta requiere cifrado simétrico y generación de imágenes dinámicas).
* **Cálculo de Esfuerzo ($E_2$):** $E_2$ = 5 SP × 8 Horas/SP = 40 Horas
* **Cálculo de Costo ($C_2$):** $C_2$ = 40 Horas × 45.000 COP/Hora = **1.800.000 COP**

#### Historia #3: `HU03 - Parametrización de Zonas y Precios por Evento`
* **Votación Planning Poker:** **2 SP** (**[Historia Pivote Base]**: CRUD estándar de base de datos).
* **Cálculo de Esfuerzo ($E_3$):** $E_3$ = 2 SP × 8 Horas/SP = 16 Horas
* **Cálculo de Costo ($C_3$):** $C_3$ = 16 Horas × 45.000 COP/Hora = **720.000 COP**

#### Historia #4: `HU04 - Mapa Interactivo del Recinto y Selección de Asientos`
* **Votación Planning Poker:** **8 SP** (Complejidad alta: renderizado de vectores SVG y control de disponibilidad de sillas en tiempo real).
* **Cálculo de Esfuerzo ($E_4$):** $E_4$ = 8 SP × 8 Horas/SP = 64 Horas
* **Cálculo de Costo ($C_4$):** $C_4$ = 64 Horas × 45.000 COP/Hora = **2.880.000 COP**

#### Historia #5: `HU05 - Validación de Boletas en Punto de Acceso`
* **Votación Planning Poker:** **3 SP** (Complejidad baja-media: consumo de API REST, uso de cámara del dispositivo móvil y almacenamiento en caché).
* **Cálculo de Esfuerzo ($E_5$):** $E_5$ = 3 SP × 8 Horas/SP = 24 Horas
* **Cálculo de Costo ($C_5$):** $C_5$ = 24 Horas × 45.000 COP/Hora = **1.080.000 COP**
---

### 3.3. Cálculo de Sumatorias Totales

$$\text{Total SP} = 13 + 5 + 2 + 8 + 3 = 31\text{ SP}$$

$$E_{\text{total}} = 104 + 40 + 16 + 64 + 24 = 248\text{ Horas}$$

$$C_{\text{total}} = \$4.680.000 + \$1.800.000 + \$720.000 + \$2.880.000 + \$1.080.000 = \$11.160.000\text{ COP}$$

#### Matriz Resumen Consolidada TicketPass:

| ID Issue | Historia de Usuario | Categoría MoSCoW | Story Points (SP) | Factor ($F_c$) | Esfuerzo ($E_i$) | Tarifa ($T_h$) | Costo Financiero ($C_i$) | Justificación Técnica Juicio de Expertos |
| :-: | :--- | :-: | :-: | :-: | :-: | :-: | :-: | :--- |
| **#1** | HU01 - Fila Virtual | **Must Have** | **13 SP** | 8 hrs/SP | 104 hrs | $45.000 COP | $4.680.000 COP | Alta concurrencia, colas distribuidas y riesgo. |
| **#2** | HU02 - QR Dinámico | **Must Have** | **5 SP** | 8 hrs/SP | 40 hrs | $45.000 COP | $1.800.000 COP | Cifrado simétrico temporal y tokenización. |
| **#3** | HU03 - Parametrización | **Must Have** | **2 SP** | 8 hrs/SP | 16 hrs | $45.000 COP | $720.000 COP | **[Pivote Base]** Operaciones CRUD simples. |
| **#4** | HU04 - Mapa Interactivo | **Should Have** | **8 SP** | 8 hrs/SP | 64 hrs | $45.000 COP | $2.880.000 COP | Gráficos SVG interactivos en tiempo real. |
| **#5** | HU05 - Escáner Punto Acceso | **Must Have** | **3 SP** | 8 hrs/SP | 24 hrs | $45.000 COP | $1.080.000 COP | Consumo de cámara, API y caché local. |
| **TOTAL** | **Backlog Completo** | -- | **31 SP** | -- | **248 hrs** | -- | **$11.160.000 COP** | **Proyecto Completo Estimado** |

---

## 4. Especificación del Taller Práctico (30 de Septiembre)

### Modalidad y Entregable
* Trabajo en los equipos del proyecto.
* **Ruta del Entregable:** Crear el archivo `DOCS/03_estimacion_y_costos.md`.

### Instrucciones Paso a Paso
1. **Asignación de Roles:** Definir quién asume los roles de Product Owner, Líder Técnico y Desarrolladoras/es.
2. **Definir la Historia Pivote del Grupo:** Seleccionar del Product Backlog (sus GitHub Issues) la historia más sencilla y asignarle **1 SP** o **2 SP**.
3. **Simular Planning Poker:** Votar y asignar valores de Fibonacci ($1, 2, 3, 5, 8, 13, 20$) a cada una de sus historias de usuario en comparación con la pivote.
4. **Parámetros Obligatorios de Clase:**
   * **Factor de Conversión ($F_c$):** $1\text{ SP} = 8\text{ Horas}$.
   * **Tarifa Profesional ($T_h$):** $45.000 COP / Hora.
5. **Cálculos Obligatorios:** Aplicar las Fórmulas 1, 2 y 3 para calcular el esfuerzo en horas y costo en COP de cada historia y las sumatorias totales globales.
6. **Actualización en GitHub:** Editar los títulos de sus GitHub Issues agregando el puntaje estimado entre corchetes (Ejemplo: `[5 SP] HU02 - Registro de Usuarios`).

---

## 5. Criterios de Evaluación y Rúbrica (5.0 Puntos)

| Criterio | Descripción Técnica | Puntaje |
| :--- | :--- | :--- |
| **Roles, Pivote y Planning Poker** | Definición explícita de roles, identificación de la historia pivote y justificación del puntaje SP asignado a cada historia en `DOCS/03_estimacion_y_costos.md`. | 2.0 pts |
| **Exactitud en Cálculos y Sumatorias** | Aplicación matemática exacta de las multiplicaciones ($E_i, C_i$) y de las sumatorias ($E_{\text{total}}, C_{\text{total}}$) utilizando los parámetros de clase. | 2.0 pts |
| **Sincronización en GitHub Issues** | Actualización formal de los títulos o etiquetas de los Issues con los Story Points asignados. | 1.0 pt |




---

# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 4: Procesos de Software, Modelos de Proceso y Plan del Proyecto

---

## 1. Marco Teórico y Fundamentos Metodológicos

### 1.1. ¿Qué es un Proceso de Software?
Un **Proceso de Software** es el conjunto estructurado de actividades de ingeniería (Análisis de Requisitos, Diseño de Arquitectura, Construcción de Código, Pruebas y Despliegue) ejecutadas de forma metódica para construir productos funcionales de alta calidad.

### 1.2. Cuadro Comparativo de Modelos de Proceso
| Modelo de Proceso | Filosofía de Trabajo | Manejo del Cambio | Ideal Para... |
| :--- | :--- | :--- | :--- |
| **Cascada (Waterfall)** | Lineal y secuencial. No se avanza a la siguiente fase sin congelar la previa. | Muy rígido y costoso. | Sistemas críticos o regulados (ej. software médico, aeronáutico). |
| **Incremental** | El sistema se divide en módulos y se entrega por partes funcionales en fases. | Moderadamente flexible. | Proyectos con componentes independientes bien definidos. |
| **Espiral (Boehm)** | Guiado por la identificación, análisis y mitigación de riesgos técnicos en cada ciclo. | Muy adaptativo según riesgos. | Proyectos complejos con alto nivel de innovación o incertidumbre. |
| **Scrum (Marco Ágil)** | Iterativo e incremental. Trabajo organizado en bloques fijos (*Sprints* de 2 semanas). | Altamente adaptativo. | Software comercial, startups y entornos de alta variabilidad. |

---

### 1.3. Fórmulas de Planificación: Velocidad, Sprints y Cronograma
Para convertir los Story Points estimados en la clase anterior en una línea base de tiempo estructurada por Sprints:

#### FÓRMULA 1: Velocidad del Equipo ($V$)
Es la cantidad de Story Points que el equipo de desarrollo compromete y termina en un Sprint:

$$V = \text{Puntos de Historia comisionados por Sprint} \quad [\text{SP/Sprint}]$$

#### FÓRMULA 2: Duración en Sprints del MVP ($N_{\text{Sprints}}$)
Determina el número de iteraciones requeridas para terminar las historias prioritarias (**Must Have**), dividiendo los $\text{SP}$ del MVP entre la velocidad del equipo:

$$N_{\text{Sprints}} = \frac{\sum \text{SP}_{\text{Must Have}}}{V}$$

*(Nota: Si el resultado tiene decimales, se redondea hacia arriba al entero superior; por ejemplo: $1.83 \rightarrow 2\text{ Sprints}$).*

#### FÓRMULA 3: Tiempo Total de Desarrollo en Semanas ($T_{\text{semanas}}$)
Multiplica el número de Sprints por la duración de cada Sprint en semanas (estándar: 2 semanas por Sprint):

$$T_{\text{semanas}} = N_{\text{Sprints}} \times \text{Duración del Sprint (semanas)}$$

---

## 2. Demostración Paso a Paso con el Caso TicketPass

### 2.1. Selección y Justificación del Modelo de Proceso
Se selecciona el marco **Scrum (Ágil)**.
* **Justificación:** TicketPass es una plataforma comercial expuesta a alta competencia. Se necesita lanzar un **Producto Mínimo Viable (MVP)** al mercado en el menor tiempo posible para validar ventas y boleta digital, dejando funcionalidades avanzadas (como el mapa SVG interactivo) para incrementos posteriores.

### 2.2. Determinación de los Parámetros del Proyecto TicketPass
* **Backlog Completo:** $31\text{ SP}$ (5 Historias de Usuario).
* **Historias del MVP (Prioridad Must Have):**
  * `HU01 - Fila Virtual`: $13\text{ SP}$
  * `HU02 - QR Dinámico`: $5\text{ SP}$
  * `HU03 - Parametrización`: $2\text{ SP}$
  * `HU05 - Escáner Punto Acceso`: $3\text{ SP}$
  * **Total SP del MVP:** $13 + 5 + 2 + 3 = \mathbf{23\text{ SP}}$
* **Historias del Backlog Extendido (Prioridad Should Have):**
  * `HU04 - Mapa Interactivo`: $\mathbf{8\text{ SP}}$
* **Velocidad Acordada del Equipo TicketPass ($V$):** $12\text{ SP/Sprint}$.
* **Duración de Cada Sprint:** 2 Semanas (80 Horas hábiles por desarrollador).

---

### 2.3. Cálculos del Plan de Proyecto TicketPass

#### 1. Cálculo de Sprints para el MVP:
$$N_{\text{Sprints}} = \frac{23\text{ SP (MVP)}}{12\text{ SP/Sprint}} = 1.91 \longrightarrow \mathbf{2\text{ Sprints}}$$

#### 2. Cálculo del Tiempo de Desarrollo del MVP en Semanas:
$$T_{\text{semanas (MVP)}} = 2\text{ Sprints} \times 2\text{ Semanas/Sprint} = \mathbf{4\text{ Semanas}}$$

#### 3. Cálculo de Sprints para el Proyecto Completo ($31\text{ SP}$):
$$N_{\text{Sprints Total}} = \frac{31\text{ SP}}{12\text{ SP/Sprint}} = 2.58 \longrightarrow \mathbf{3\text{ Sprints (6 Semanas)}}$$

---

### 2.4. Estructuración del Cronograma de Sprints (Línea Base MVP)

#### Sprint 1 (Semanas 1 y 2) · Capacidad Máxima: $12\text{ SP}$
* **Historias Asignadas:**
  * `HU03 - Parametrización de Zonas` ($2\text{ SP}$)
  * `HU01 - Fila Virtual` (Módulo base) ($10\text{ SP}$)
* **Carga del Sprint:** $2 + 10 = \mathbf{12\text{ SP}}$ (100% de la velocidad).
* **Esfuerzo:** $12\text{ SP} \times 8\text{ hrs/SP} = 96\text{ Horas/Hombre}$.
* **Costo Sprint 1:** $96\text{ hrs} \times 45.000\text{ COP/hr} =$ **4.320.000 COP**.

#### Sprint 2 (Semanas 3 y 4) · Capacidad Máxima: $12\text{ SP}$
* **Historias Asignadas:**
  * `HU01 - Fila Virtual` (Módulo avanzado de cierre) ($3\text{ SP}$)
  * `HU02 - QR Dinámico` ($5\text{ SP}$)
  * `HU05 - Escáner Punto Acceso` ($3\text{ SP}$)
* **Carga del Sprint:** $3 + 5 + 3 = \mathbf{11\text{ SP}}$ (Dentro del límite de $12\text{ SP}$).
* **Esfuerzo:** $11\text{ SP} \times 8\text{ hrs/SP} = 88\text{ Horas/Hombre}$.
* **Costo Sprint 2:** $88\text{ hrs} \times 45.000\text{ COP/hr} =$ **3.960.000 COP**.

#### Sprint 3 (Semanas 5 y 6 - Extensión) · Capacidad Máxima: $12\text{ SP}$
* **Historia Asignada:**
  * `HU04 - Mapa Interactivo` ($8\text{ SP}$)
* **Carga del Sprint:** $\mathbf{8\text{ SP}}$.
* **Esfuerzo:** $8\text{ SP} \times 8\text{ hrs/SP} = 64\text{ Horas/Hombre}$.
* **Costo Sprint 3:** $64\text{ hrs} \times 45.000\text{ COP/hr} =$ **2.880.000 COP**.

---

### 2.5. Resumen Financiero y Cronograma Comercial
* **Costo Total del MVP (Sprints 1 y 2):** $4.320.000\text{ COP} + 3.960.000\text{ COP} =$ **8.280.000 COP** ($184\text{ Horas}$, $4\text{ Semanas}$).
* **Costo Total del Proyecto Completo (Sprints 1, 2 y 3):** $8.280.000\text{ COP} + 2.880.000\text{ COP} =$ **11.160.000 COP** ($248\text{ Horas}$, $6\text{ Semanas}$).

---

## 3. Especificación del Taller Práctico (07 de Octubre)

### Modalidad y Entregable
* Trabajo colaborativo en el repositorio del proyecto.
* **Ruta del Entregable:** Crear el archivo `DOCS/04_plan_de_proyecto_y_modelos.md`.

### Instrucciones Paso a Paso
1. **Seleccionar el Modelo de Proceso:** Escoger entre Cascada, Incremental, Espiral o Scrum y redactar un texto justificando la elección en función de su proyecto.
2. **Definir la Velocidad del Equipo ($V$):** Asumir una velocidad para su grupo (ejemplo: $V = 10\text{ SP/Sprint}$).
3. **Calcular Sprints y Duración del MVP:** Separar sus historias Must Have ($\text{SP}_{\text{MVP}}$), dividirlas entre $V$ y determinar el número de Sprints y semanas totales.
4. **Organizar la Distribución de Sprints:** Detallar qué historias entran en cada Sprint sin sobrepasar la velocidad $V$.
5. **Consolidar el Resumen Comercial:** Indicar el costo en COP y tiempo en semanas tanto para el MVP como para el proyecto completo.

---

## 4. Criterios de Evaluación y Rúbrica (5.0 Puntos)

| Criterio | Descripción Técnica | Puntaje |
| :--- | :--- | :--- |
| **Análisis y Justificación del Modelo de Proceso** | Comparación metodológica y argumentación técnica de la elección en `DOCS/04_plan_de_proyecto_y_modelos.md`. | 2.0 pts |
| **Estructuración y Matemática de Sprints (MVP)** | Aplicación exacta de las fórmulas de velocidad, cálculo de Sprints y distribución de historias sin sobrepasar la capacidad $V$. | 1.5 pts |
| **Resumen Ejecutivo y Comercial Consolidado** | Consolidación clara de semanas, esfuerzo acumulado en horas y presupuesto total en COP. | 1.5 pts |
