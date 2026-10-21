const Zona = require('../models/Zona');

class ZonaDAO {
  constructor() {
    this.zonasBD = [
      new Zona(1, 'VIP', 500, 250000),
      new Zona(2, 'Preferencial', 1200, 150000),
      new Zona(3, 'General', 3000, 80000)
    ];
  }

  obtenerTodas() {
    return this.zonasBD;
  }

  guardar(nuevaZona) {
    this.zonasBD.push(nuevaZona);
    return nuevaZona;
  }
}

module.exports = ZonaDAO;