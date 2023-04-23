class ModeloDTO {
        
    cve_presolicitud;  
    cve_producto;  
    descripcion_producto; 
    cve_categoria; 
    cve_marca;  
    cve_sucursal;  
    centroSap;  
    material;
    precio_venta; 
    fullPrice;  
    overPrice;  
    existencia;  
    detalle;  
    tipoDeFinanciamiento;  
    id_tipo_financiamiento;  
    score;  
    fg_financiamiento_mixto;  
    fg_recompra;  
    perfil;

    constructor(modelo={}) {
        this.cve_presolicitud = modelo.cve_presolicitud || '';
        this.cve_producto = modelo.cve_producto || '';
        this.descripcion_producto = modelo.descripcion_producto || '';
        this.cve_categoria = modelo.cve_categoria || '';
        this.cve_marca = modelo.cve_marca || '';
        this.cve_sucursal = modelo.cve_sucursal || '';
        this.centroSap = modelo.centroSap || '';
        this.material = modelo.material || '';
        this.precio_venta = modelo.precio_venta || 0.0;
        this.fullPrice = modelo.fullPrice || 0.0;
        this.overPrice = modelo.overPrice || 0.0;
        this.existencia = modelo.existencia || 0;
        this.detalle = modelo.detalle || []
        this.tipoDeFinanciamiento = modelo.tipoDeFinanciamiento || '';
        this.id_tipo_financiamiento = 0;
        this.score = modelo.score || '';
        this.fg_financiamiento_mixto = modelo.fg_financiamiento_mixto || false;
        this.fg_recompra = modelo.fg_recompra || 0;
        this.perfil = modelo.permil || '';

    }
}

module.exports = { ModeloDTO };