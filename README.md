# UniversidadMarina-IngDeSoftwareI-Seguimiento2-Ticketpass
Proyecto transversal de Ingeniería de Software para el análisis de requisitos, estimación formal (esfuerzo, tiempo, costo), gestión de riesgos y planificación con GitHub Projects en el caso de estudio TicketPass.

# Unidad 2: Estimación Formal en la Construcción de Software
## Guía de Aprendizaje - Clase 1: Del Problema a las Historias de Usuario

-------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1. Marco Teórico y Conceptos Clave

### 1.1. Del Problema al Requisito
En la Ingeniería de Requisitos, el desarrollo de software no comienza escribiendo código, sino comprendiendo el dominio del problema:

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
Son las condiciones explícitas, reglas de negocio y límites operativos que deben cumplirse para verificar que una Historia de Usuario se ha completado correctamente. Siguen los principios INVEST:
* **I - Independiente (Independent)**: La historia debe poder desarrollarse y entregarse sin depender estrictamente de otra.
* **N - Negociable (Negotiable)**: No es un contrato cerrado; los detalles se discuten y acuerdan entre el equipo y el cliente.
* **V - Valiosa (Valuable)**: Aporta un beneficio claro y real para el usuario final o el negocio.
* **E - Estimable (Estimable)**: El equipo técnico comprende el requerimiento lo bastante bien para calcular el esfuerzo necesario.
* **S - Pequeña (Small)**: Tiene el tamaño ideal para completarse con éxito dentro de un mismo sprint.
* **T - Comprobable o Testeable (Testable)**: Contiene la información y los criterios de aceptación necesarios para verificar mediante pruebas que funciona.
------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2. Caso de Estudio Modelo: TicketPass

### Descripción del Dominio
*TicketPass* es una plataforma web para la comercialización y gestión de boletería en eventos y festivales de alta concurrencia. El sistema aborda problemáticas de colapso de servidores por tráfico masivo y fraudes en la reventa de entradas.

### Actores del Sistema
1. **Comprador / Fan:** Consulta el catálogo, ingresa a la fila virtual, selecciona la zona del escenario y realiza el pago de la boletería.
2. **Organizador del Evento:** Parametriza la disponibilidad de zonas, gestiona fases de venta y monitorea el recaudo.
3. **Logística / Puerta:** Escanea y valida la autenticidad del código QR dinámico desde la aplicación de control de acceso.

### Mapeo de Requisitos (Matriz de Transformación)

| Problema Identificado | Necesidad de Software | Requisito Funcional |

| Colapso de la plataforma web durante la venta inicial por alta concurrencia. | Administrar y ordenar el tráfico masivo de peticiones simultáneas. | El sistema debe asignar un turno en fila virtual a los usuarios cuando las peticiones superen las 1.000 solicitudes/minuto. |
| Falsificación y duplicación de boletas en los puntos de acceso al evento. | Garantizar la autenticidad e infalsificabilidad de las entradas digitales. | El sistema debe generar un código QR dinámico cifrado que se actualice cada 30 segundos dentro de la aplicación móvil. |

-------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3. Especificación del Taller Práctico para los Equipos

### Modalidad
* Trabajo en equipos de máximo 4 integrantes.

### Instrucciones Paso a Paso
1. **Definición del Proyecto del Grupo:** Seleccionar una idea de software de la vida real
2. **Configuración del Entorno:**
   * Crear un repositorio público en GitHub por equipo.
   * Configurar un proyecto interno de tipo **Board** en la pestaña *Projects* con las columnas: `Todo`, `In Progress` y `Done`.
3. **Elaboración del Documento de Requisitos:**
   * Crear la carpeta `/DOCS` en el repositorio y añadir el archivo `01_requisitos.md`.
   * Identificar los **3 actores principales** del sistema.
   * Construir una tabla con mínimo **3 problemas**, sus respectivas necesidades y requisitos funcionales.
4. **Creación del Backlog en GitHub Issues:**
   * Redactar entre **5 y 8 Historias de Usuario** en la pestaña *Issues* del repositorio.
   * Aplicar la estructura estándar (`Como / Quiero / Para`) e incluir al menos 3 criterios de aceptación por historia.
   * Vincular los *Issues* al tablero de *GitHub Projects* en la columna `Todo`.
