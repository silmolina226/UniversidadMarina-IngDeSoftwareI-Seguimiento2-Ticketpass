# Documento de Especificación de Requisitos - Caso TicketPass

## 1. Actores Principales del Sistema

1. **Comprador / Fan:** Usuario final que explora el catálogo de eventos, ingresa a la fila virtual, selecciona localidades y efectúa el pago de las entradas.
2. **Organizador del Evento:** Cliente corporativo encargado de definir la logística comercial, habilitar las zonas del escenario, establecer aforos y consultar reportes de recaudo.
3. **Logística / Personal de Puerta:** Operador en campo encargado de escanear y validar el acceso de los asistentes en los puntos de entrada mediante dispositivos móviles.

---

## 2. Matriz de Transformación: Problemas, Necesidades y Requisitos Funcionales

| # | Problema Identificado | Necesidad de Software | Requisito Funcional |
| :-: | :--- | :--- | :--- |
| **1** | Colapso de la plataforma web durante la venta inicial por alta concurrencia de usuarios simultáneos. | Administrar y ordenar el tráfico masivo de peticiones sin saturar la infraestructura. | El sistema debe asignar un turno en fila virtual a los usuarios cuando las peticiones superen las 1.000 solicitudes/minuto. |
| **2** | Falsificación y duplicación de boletas en los puntos de acceso al evento durante la validación manual. | Garantizar la autenticidad e infalsificabilidad de las entradas digitales. | El sistema debe generar un código QR dinámico cifrado que se actualice cada 30 segundos dentro de la aplicación móvil. |
| **3** | Errores humanos y lentitud al configurar manualmente los aforos y precios por localidad para cada concierto. | Digitalizar y centralizar la parametrización de recintos y ofertas comerciales. | El sistema debe permitir parametrizar zonas, límites de aforo y esquemas de precios de forma dinámica antes del lanzamiento comercial. |
