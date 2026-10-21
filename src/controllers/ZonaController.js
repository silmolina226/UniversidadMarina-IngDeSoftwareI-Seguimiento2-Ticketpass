const ZonaDAO = require('../dao/ZonaDAO');
const Zona = require('../models/Zona');

class ZonaController {
  constructor() {
    this.zonaDAO = new ZonaDAO();
  }

  listarZonas() {
    return this.zonaDAO.obtenerTodas();
  }

  crearZona(id, nombre, capacidad, precio) {
    const zona = new Zona(id, nombre, capacidad, precio);
    return this.zonaDAO.guardar(zona);
  }
}

module.exports = ZonaController;