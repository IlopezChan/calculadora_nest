class CargaDatosDTO {
  cve_presolicitud;
  score_circulo;
  fg_financiamiento_mixto;
  fg_recompra;
  perfil_riesgo;
  celular_aprobado;
  prestamo_aprobado;
  monto_linea_de_credito;
  plataforma;
  fg_financiamiento_moto;
  cantidad_multifinanciamiento;
  fg_white_list;

  constructor(modelo = {}) {
    this.cve_presolicitud = modelo.cve_presolicitud || "";
    this.score_circulo = modelo.score_circulo || 0;
    this.fg_financiamiento_mixto = modelo.fg_financiamiento_mixto || false;
    this.fg_recompra = modelo.fg_recompra || 0;
    this.perfil_riesgo = modelo.perfil_riesgo || "";
    this.celular_aprobado = modelo.celular_aprobado || 0;
    this.prestamo_aprobado = modelo.prestamo_aprobado || 0;
    this.monto_linea_de_credito = modelo.monto_linea_de_credito || 0;
    this.plataforma = modelo.plataforma || "";
    this.fg_financiamiento_moto = modelo.fg_financiamiento_moto || 0;
    this.cantidad_multifinanciamiento =
      modelo.cantidad_multifinanciamiento || 0;
    this.fg_white_list = modelo.fg_white_list || 0;
  }
}

module.exports = { CargaDatosDTO };
