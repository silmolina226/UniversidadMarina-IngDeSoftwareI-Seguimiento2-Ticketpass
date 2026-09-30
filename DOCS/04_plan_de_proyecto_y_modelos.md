# Estimación del Plan de Proyecto y Modelos de Proceso - Proyecto TicketPass

## 1. Selección y Justificación del Modelo de Proceso
Para el desarrollo y despliegue de la plataforma TicketPass se ha seleccionado el modelo de proceso **Scrum (Marco Ágil)**. La justificación técnica y comercial de esta elección radica en la naturaleza cambiante del mercado de boletería para eventos masivos y la necesidad de reducir el tiempo de salida al mercado (*Time-to-Market*). TicketPass requiere validar de manera prioritaria su núcleo del negocio: la gestión de alta concurrencia mediante filas virtuales, la generación de entradas seguras con QR dinámico y la validación en puerta de acceso.

El enfoque iterativo e incremental de Scrum permite entregar un **Producto Mínimo Viable (MVP)** funcional al cabo de 4 semanas (2 Sprints), lo que posibilita realizar pruebas operativas reales y recibir retroalimentación del cliente antes de invertir recursos en características complementarias pero no críticas, como la selección visual interactiva sobre mapas SVG. Además, la flexibilidad de Scrum permite gestionar la complejidad técnica inherente al algoritmo de derivación de cola y la tokenización temporal del QR sin detener el avance de otros módulos funcionales del sistema.

---

## 2. Parámetros de Planificación
* **Velocidad del Equipo ($V$):** 12 SP / Sprint (para un equipo de desarrollo con capacidad de 2 semanas por iteración).
* **Duración por Sprint:** 2 Semanas (80 horas hábiles por desarrollador).
* **Total SP del MVP (Historias Must Have):** 23 SP (`HU01`: 13 SP, `HU02`: 5 SP, `HU03`: 2 SP, `HU05`: 3 SP).
* **Número de Sprints Calculados para el MVP:** $N_{\text{Sprints}} = \frac{23}{12} = 1.91 \longrightarrow \mathbf{2\text{ Sprints}}$.
* **Duración Total del MVP en Semanas:** 4 Semanas.

---

## 3. Planificación Detallada de Sprints

### Sprint 1 (Semanas 1 y 2) · Capacidad: 12 SP
* **[#3]:** `HU03 - Parametrización de Zonas` (2 SP - $720.000 COP)
* **[#1]:** `HU01 - Fila Virtual (Parte 1: Arquitectura Base y Cola)` (10 SP de los 13 SP totales - $3.600.000 COP)
* **Carga Total del Sprint 1:** 12 SP | **Esfuerzo:** 96 Horas | **Costo Sprint 1:** $4.320.000 COP

### Sprint 2 (Semanas 3 y 4) · Capacidad: 12 SP
* **[#1]:** `HU01 - Fila Virtual (Parte 2: Cierre y Carga Algorítmica)` (3 SP restantes para completar los 13 SP - $1.080.000 COP)
* **[#2]:** `HU02 - QR Dinámico` (5 SP - $1.800.000 COP)
* **[#5]:** `HU05 - Escáner Punto Acceso` (3 SP - $1.080.000 COP)
* **Carga Total del Sprint 2:** 11 SP | **Esfuerzo:** 88 Horas | **Costo Sprint 2:** $3.960.000 COP

### Sprint 3 (Semanas 5 y 6 - Extensión Proyecto Completo) · Capacidad: 12 SP
* **[#4]:** `HU04 - Mapa Interactivo SVG` (8 SP - $2.880.000 COP)
* **Carga Total del Sprint 3:** 8 SP | **Esfuerzo:** 64 Horas | **Costo Sprint 3:** $2.880.000 COP

---

## 4. Resumen Comercial de la Propuesta (Línea Base Final)
* **Tiempo de Entrega del MVP:** 4 Semanas (2 Sprints).
* **Esfuerzo Total del MVP:** 184 Horas/Hombre.
* **Inversión Financiera MVP:** $8.280.000 COP.
* **Tiempo de Entrega Proyecto Completo:** 6 Semanas (3 Sprints).
* **Esfuerzo Total Proyecto Completo:** 248 Horas/Hombre.
* **Inversión Financiera Proyecto Completo:** $11.160.000 COP.
