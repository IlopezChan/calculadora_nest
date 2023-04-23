class MarcaDTO {

    cve_marca;
    descripcion_marca;
    fg_financiamiento_mixto;
    modelos; 

    constructor(marca={}) {
        this.cve_marca = marca.cve_marca || '';
        this.descripcion_marca = marca.descripcion_marca || '';
        this.fg_financiamiento_mixto = marca.fg_financiamiento_mixto || false;
        this.modelos = [];
    }
}
module.exports = { MarcaDTO };
