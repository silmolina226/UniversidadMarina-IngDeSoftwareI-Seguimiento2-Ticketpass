/**
 * Modelo de datos para Representar una Zona del Evento (HU03)
 */
class Zona {
  constructor(id, nombre, capacidad, precioBase) {
    this.id = id;
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.precioBase = precioBase;
  }
}

module.exports = Zona;