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

## 1. Marco Teórico y Conceptos Clave

### 1.1. De la Estimación Empírica a la Estimación Formal
En la sesión anterior realizamos una categorización cualitativa (Baja, Media, Alta). En esta fase transitamos a la **Estimación Formal Cuantitativa**, la cual busca reducir la incertidumbre mediante métricas estandarizadas, matemáticas de capacidad y consenso de equipo.

### 1.2. Juicio de Expertos y Planning Poker
El **Juicio de Expertos** aprovecha la experiencia acumulada de los ingenieros para evaluar requisitos ambiguos. Para evitar sesgos de autoridad, se utiliza **Planning Poker**, una técnica guiada por la secuencia de **Fibonacci Modificada** ($0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100$):
* **Historia Pivote (Referencia):** Se elige una historia de complejidad mínima conocida y se le asigna un valor base (ej. $2 \text{ SP}$).
* **Escalabilidad del Riesgo:** El salto entre números aumenta exponencialmente para reflejar que, a mayor tamaño o complejidad de un requisito, mayor es el riesgo matemático de desviación.

### 1.3. Tallaje por Complejidad: Puntos de Historia (Story Points - SP)
Un **Punto de Historia** es una unidad de medida abstracta que combina:
1. **Complejidad Algorítmica y Técnica.**
2. **Volumen de Esfuerzo Operativo.**
3. **Incertidumbre y Riesgos de Integración.**

### 1.4. Derivación Cuantitativa: Tiempo, Esfuerzo y Costos
Para convertir Story Points abstractos en variables de presupuesto comercial:
* **Velocidad del Equipo ($V$):** Promedio de $SP$ que el equipo puede completar por Sprint (ej. $12 \text{ SP/Sprint}$).
* **Esfuerzo ($E$):** Calculado en Horas/Hombre ($H/H$) mediante un factor de conversión ($1 \text{ SP} = X \text{ Horas}$).
* **Costo Financiero Total ($C$):**
  $$C = E_{\text{totales}} \times \text{Tarifa Horaria del Desarrollador (\$/Hora)}$$

---

## 2. Caso de Estudio Modelo: TicketPass

### 2.1. Parámetros del Equipo de Ingeniería TicketPass
* **Composición:** 3 Desarrolladores Full-Stack.
* **Velocidad del Equipo ($V$):** $12 \text{ SP}$ por Sprint (Sprint de 2 semanas).
* **Factor de Conversión:** $1 \text{ SP} = 8 \text{ Horas/Hombre}$.
* **Tarifa Profesional Hora/Hombre:** $\$45.000 \text{ COP/Hora}$.
* **Historia Pivote de Referencia:** `HU03 - Parametrización de Zonas y Precios` ($2 \text{ SP}$).

### 2.2. Matriz de Estimación Formal, Esfuerzo y Costos

| ID Issue | Historia de Usuario | Categoría MoSCoW | Tallaje (Story Points) | Esfuerzo Estimado (Horas) | Costo Financiero (COP) | Justificación del Juicio de Expertos |
| :-: | :--- | :-: | :-: | :-: | :-: | :--- |
| **#1** | HU01 - Fila Virtual para Compra | **Must Have** | **13 SP** | 104 hrs | $\$4.680.000$ | Alta concurrencia, colas distribuidas en tiempo real y riesgo de servidor. |
| **#2** | HU02 - QR Dinámico para Entradas | **Must Have** | **5 SP** | 40 hrs | $\$1.800.000$ | Cifrado simétrico temporal y generación de imágenes dinámicas. |
| **#3** | HU03 - Parametrización de Zonas | **Must Have** | **2 SP** | 16 hrs | $\$720.000$ | **[Pivote]** Operaciones CRUD estándar en base de datos. |
| **#4** | HU04 - Mapa Interactivo | **Should Have** | **8 SP** | 64 hrs | $\$2.880.000$ | Manipulación de vectores SVG y renderizado de disponibilidad por asiento. |
| **#5** | HU05 - Validación en Punto de Acceso | **Must Have** | **3 SP** | 24 hrs | $\$1.080.000$ | Consumo de API REST, cámara móvil y respuesta offline. |
| **TOTAL**| **Backlog Completo** | -- | **31 SP** | **248 hrs** | **$\$11.160.000$** | -- |

---

## 3. Especificación del Taller Práctico (30 de Septiembre)

### Modalidad y Entregable
* Trabajo en los equipos del proyecto.
* **Entregable:** Crear el archivo `DOCS/03_estimacion_y_costos.md` en su repositorio.

### Instrucciones Paso a Paso
1. **Definición de Historia Pivote:** Seleccionar de su backlog una historia sencilla como base ($1 \text{ SP}$ o $2 \text{ SP}$).
2. **Sesión de Planning Poker:** Asignar valores de Fibonacci ($1, 2, 3, 5, 8, 13, 20$) a cada Historia de Usuario en su backlog, argumentando la razón técnica.
3. **Conversión de Métricas Financieras:** 
   * Asumir un factor de $1 \text{ SP} = 6 \text{ Horas/Hombre}$.
   * Asumir una tarifa profesional de **$\$40.000 \text{ COP/Hora}$**.
   * Calcular las horas totales y el costo económico de cada historia y del backlog general.
4. **Actualización en GitHub:** Reflejar los Story Points en las etiquetas o títulos de sus GitHub Issues.

---

## 4. Criterios de Evaluación y Rúbrica (5.0 Puntos)

| Criterio | Descripción Técnica | Puntaje |
| :--- | :--- | :--- |
| **Historia Pivote y Planning Poker** | Selección de la historia base y asignación justificada de Story Points en `DOCS/03_estimacion_y_costos.md`. | 2.0 pts |
| **Proyección de Tiempo, Esfuerzo y Costos** | Fórmulas matemáticamente precisas para el cálculo de Horas/Hombre y Presupuesto Financiero en COP. | 2.0 pts |
| **Sincronización en GitHub Issues** | Actualización de los puntos de historia en el gestor de tareas del repositorio. | 1.0 pt |

---

# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 4: Procesos de Software, Modelos de Proceso y Plan del Proyecto

---

## 1. Marco Teórico y Conceptos Clave

### 1.1. Procesos de Software y Ciclo de Vida (SDLC)
Un **Proceso de Software** es un conjunto estructurado de actividades de ingeniería (Análisis, Diseño, Construcción, Pruebas y Despliegue) orientadas a transformar necesidades del cliente en productos ejecutables con calidad.

### 1.2. Modelos de Proceso de Software
La elección del modelo define cómo se gestionan los cambios y los riesgos durante la construcción:
