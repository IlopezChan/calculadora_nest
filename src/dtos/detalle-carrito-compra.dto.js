class DetalleCarritoDeCompraDTO {

    cve_presolicitud;
    cve_categoria;
    descripcion_categoria;
    cve_marca;
    descripcion_marca;
    cve_producto;
    descripcion_producto;
    cantidad;
    precio_equipo;
    iva_equipo;
    precio_equipo_iva;
    enganche_minimo;
    enganche_real;
    plazo_semanal;
    pago_semanal;
    pago_semanal_capital;
    pago_semanal_interes;
    total_financiado;
    material;
    overPrice;
    id_tipo_financiamiento;
    fg_garantia_extendida;
    fg_membresia;
    fg_financiamiento_mixto;

    constructor(details = {}) {
        this.cve_presolicitud = details.cve_presolicitud || "";
        this.cve_categoria = details.cve_categoria || "";
        this.descripcion_categoria = details.descripcion_categoria || "";
        this.cve_marca = details.cve_marca || "";
        this.descripcion_marca = details.descripcion_marca || "";
        this.cve_producto = details.cve_producto || "";
        this.descripcion_producto = details.descripcion_producto || "";
        this.cantidad = details.cantidad || 0;
        this.precio_equipo = details.precio_equipo || 0;
        this.iva_equipo = details.iva_equipo || 0;
        this.precio_equipo_iva = details.precio_equipo_iva || 0;
        this.enganche_minimo = details.enganche_minimo || 0;
        this.enganche_real = details.enganche_real || 0;
        this.plazo_semanal = details.plazo_semanal || 0;
        this.pago_semanal = details.pago_semanal || 0;
        this.pago_semanal_capital = details.pago_semanal_capital || 0;
        this.pago_semanal_interes = details.pago_semanal_interes || 0;
        this.total_financiado = details.total_financiado || 0;
        this.material = details.material || "";
        this.overPrice = details.overPrice || 0;
        this.id_tipo_financiamiento = details.id_tipo_financiamiento || 0;
        this.fg_garantia_extendida = details.fg_garantia_extendida || 0;
        this.fg_membresia = details.fg_membresia || 0;
        this.fg_financiamiento_mixto = details.fg_financiamiento_mixto || 0;

    }
}

module.exports = {DetalleCarritoDeCompraDTO};