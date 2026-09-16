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

### 1.1. Valor de Negocio y Priorización (Método MoSCoW)
El **Valor de Negocio** determina el beneficio estratégico, operativo o financiero que aporta una funcionalidad al sistema. No todos los requisitos aportan el mismo retorno ni deben construirse simultáneamente.

Para evaluar el valor de negocio con rigor técnico, analizamos su **Criterio de Impacto Principal**:
* **Impacto Operativo:** Garantiza la estabilidad, disponibilidad y funcionamiento continuo del servicio. Evita caídas o fallos críticos.
* **Impacto Financiero / Monetario:** Permite el recaudo, la transacción económica y la generación directa de ingresos.
* **Impacto en Experiencia de Usuario (UX):** Optimiza la usabilidad y la interacción visual, facilitando el uso sin ser indispensable para la transacción.

A partir de este análisis, la priorización mediante **MoSCoW** define el **Producto Mínimo Viable (MVP)**:
* **M - Must Have (Imprescindible):** Vitales para la operación básica. Sin ellas el sistema no puede funcionar en producción.
* **S - Should Have (Debería tener):** De alto valor e importancia, pero sustituibles o postergables para el lanzamiento inicial.
* **C - Could Have (Podría tener):** Deseables o secundarias; solo se implementan si se dispone de tiempo sobrante.
* **W - Won't Have (No por ahora):** Fuera del alcance para la iteración actual.

### 1.2. Estimación Empírica vs. Estimación Formal
* **Estimación Empírica (Cualitativa):** Evaluación inicial basada en juicio intuitivo, experiencia previa del equipo y nivel de complejidad técnica percibida (Baja, Media, Alta), sin asignar métricas numéricas aún.
* **Estimación Formal (Cuantitativa):** Asignación matemática de esfuerzo en Puntos de Historia (Story Points) y horas de desarrollo (se abordará en la Clase 3).

---

## 2. Caso de Estudio Modelo: TicketPass

### Matriz de Priorización y Estimación del Backlog

| ID Issue | Historia de Usuario | Categoría MoSCoW | Criterio de Impacto (Valor de Negocio) | Justificación Estratégica | Estimación Empírica (Cualitativa) | Estimación Formal (Clase 3) |
| :-: | :--- | :-: | :--- | :--- | :--- | :--- |
| **#1** | HU01 - Fila Virtual para Compra de Boletas | **Must Have** | Impacto Operativo | Evita la caída masiva del servidor durante picos de demanda alta. | Alta complejidad técnica y alto riesgo de infraestructura. | *Pendiente (Story Points / Horas)* |
| **#2** | HU02 - Generación de Código QR Dinámico para Entradas | **Must Have** | Impacto Financiero y Seguridad | Protege el recaudo evitando la clonación, falsificación y reventa no autorizada. | Complejidad media por lógica de cifrado temporal. | *Pendiente (Story Points / Horas)* |
| **#3** | HU03 - Parametrización de Zonas y Precios de Boletería | **Must Have** | Impacto Financiero | Habilita la configuración comercial del evento. Sin esto no hay venta posible. | Complejidad baja (CRUD estándar de formularios). | *Pendiente (Story Points / Horas)* |
| **#4** | HU04 - Selección de Boletas mediante Mapa Interactivo | **Should Have** | Impacto UX | Mejora la experiencia visual de selección, pero se puede sustituir por una lista desplegable en la fase 1. | Complejidad media-alta por interfaz gráfica interactiva. | *Pendiente (Story Points / Horas)* |
| **#5** | HU05 - Validación de Boletas en Punto de Acceso | **Must Have** | Impacto Operativo | Permite al equipo de logística verificar en tiempo real el ingreso en el recinto. | Complejidad baja-media (consumo de API y cámara). | *Pendiente (Story Points / Horas)* |

---

## 3. Especificación del Taller Práctico 16-09-2026

### Modalidad
* Trabajo en equipos de máximo 4 integrantes.

### Instrucciones Paso a Paso
1. **Priorización MoSCoW:**
   * Clasificar las Historias de Usuario en la matriz del archivo `DOCS/02_priorizacion.md`.
2. **Creación de Labels en GitHub Issues:**
   * En GitHub, crear y asignar las etiquetas (`must-have`, `should-have`, `could-have`, `wont-have`) a cada Issue.
3. **Ejercicio de Estimación Empírica:**
   * Registrar una justificación cualitativa del nivel de dificultad (Baja, Media, Alta) según el conocimiento del equipo.
4. **Comparación entre Equipos (Pitch Cruzado):**
   * Un representante de cada equipo revisa el backlog de otro grupo para validar si la clasificación MoSCoW es coherente.

---

## 4. Criterios de Evaluación y Rúbrica (5.0 Puntos)

| Criterio | Descripción | Puntaje |
| :--- | :--- | :--- |
| **Documentación (`02_priorizacion.md`)** | Matriz MoSCoW completa, justificación del valor de negocio y delimitación del MVP. | 1.5 pts |
| **Configuración en GitHub Issues** | Creación y asignación correcta de las etiquetas de prioridad (Labels) en todos los Issues. | 1.5 pts |
| **Estimación Empírica Cualitativa** | Identificación coherente de los niveles de complejidad (Baja/Media/Alta) para cada historia. | 1.0 pt |
| **Co-evaluación / Feedback Cruzado** | Participación activa en la validación y comparación de backlogs entre equipos. | 1.0 pt |
