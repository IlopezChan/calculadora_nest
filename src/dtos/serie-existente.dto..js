class SerieExistenteDTO {
    Pr_Cve_Producto 
    Pr_Descripcion 
    Pr_Descripcion_Corta 
    estatus 
    fg_habilitado 
    Sr_Cve_Serie 
    Sr_Cve_Sucursal 
    centroSap 
    material 
    cve_marca 
    id_tipo_financiamiento 

    constructor(serieExistente = {}) {
        this.Pr_Cve_Producto = serieExistente.Pr_Cve_Producto || '';
        this.Pr_Descripcion = serieExistente.Pr_Descripcion ||'';
        this.Pr_Descripcion_Corta = serieExistente.Pr_Descripcion_Corta ||'';
        this.estatus = serieExistente.estatus ||'';
        this.fg_habilitado = serieExistente.fg_habilitado || 0;
        this.Sr_Cve_Serie = serieExistente.Sr_Cve_Serie || '';
        this.Sr_Cve_Sucursal = serieExistente.Sr_Cve_Sucursal || '';
        this.centroSap = serieExistente.centroSap || '';
        this.material = serieExistente.material || '';
        this.cve_marca = serieExistente.cve_marca || '';
        this.id_tipo_financiamiento = serieExistente.id_tipo_financiamiento || 0;
    }
}

module.exports = { SerieExistenteDTO };