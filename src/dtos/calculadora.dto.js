
class CalculadoraDTO {
    cve_categoria;
    descripcion_categoria;
    cve_marca;
    descripcion_marca;
    cve_producto;
    descripcion_producto;
    precio_equipo;
    iva_equipo;
    precio_equipo_iva;
    plazo;
    enganche_minimo;
    enganche;
    pago_semanal;
    pago_semanal_capital;
    pago_semanal_interes;
    total_financiado;
    perfil;
    fullPrice;
    overPrice;
    material;
    meses;
    plazos;
    caja;
    score_circulo;
    cve_presolicitud;
    cve_sucursal;
    centroSap;
    id_tipo_financiamiento;
    fg_validar_caja_sap_prestamo;
    centro_sap_sapi;
    limite_credito_permitido_para_prestamos;
    fg_financiamiento_mixto;
    fg_garantia_extendida;
    fg_membresia;

    constructor(calculator={}) {
        this.cve_categoria = calculator.cve_categoria || "";
        this.descripcion_categoria = calculator.descripcion_categoria || "";
        this.cve_marca = calculator.cve_marca || "";
        this.descripcion_marca = calculator.descripcion_marca || "";
        this.cve_producto = calculator.cve_producto || "";
        this.descripcion_producto = calculator.descripcion_producto || "";
        this.precio_equipo = calculator.precio_equipo || 0;
        this.iva_equipo = calculator.iva_equipo || 0;
        this.precio_equipo_iva = calculator.precio_equipo_iva || 0;
        this.plazo = calculator.plazo || 0;
        this.enganche_minimo = calculator.enganche_minimo || 0;
        this.enganche = calculator.enganche || 0;
        this.pago_semanal = calculator.pago_semanal || 0;
        this.pago_semanal_capital = calculator.pago_semanal_capital || 0;
        this.pago_semanal_interes = calculator.pago_semanal_interes || 0;
        this.total_financiado = calculator.total_financiado || 0;
        this.perfil = calculator.perfil || "";
        this.caja = calculator.caja || "";
        this.score_circulo = calculator.score_circulo || 0;
        this.plazos = calculator.plazos || [];
        this.cve_presolicitud = calculator.cve_presolicitud || "";
        this.fullPrice = calculator.fullPrice || 0;
        this.overPrice = calculator.overPrice || 0;
        this.material = calculator.material || "";
        this.meses = calculator.meses || "";
        this.cve_sucursal = calculator.cve_sucursal || "";
        this.centroSap = calculator.centroSap || "";
        this.id_tipo_financiamiento = calculator.id_tipo_financiamiento || 0;
        this.fg_validar_caja_sap_prestamo = calculator.fg_validar_caja_sap_prestamo || 0;
        this.centro_sap_sapi = calculator.centro_sap_sapi || "";
        this.limite_credito_permitido_para_prestamos = calculator.limite_credito_permitido_para_prestamos || 0;
        this.fg_financiamiento_mixto = calculator.fg_financiamiento_mixto || 0;
        this.fg_garantia_extendida = calculator.fg_garantia_extendida || 0;
        this.fg_membresia = calculator.fg_membresia | 0;
    }

}

module.exports = { CalculadoraDTO };
