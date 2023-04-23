class CategoriaDTO {
    cve_categoria;
    descripcion_categoria;
    cve_marca; 
    descripcion_marca; 
    centroSap; 
    marcas;
    perfil; 
    tipoLlenado; 
    tipo_de_financiamiento; 
    celular_aprobado;
    prestamo_aprobado; 
    fg_financiamiento_mixto;
    score;


    constructor(categoria={}) {
        this.cve_categoria = categoria.cve_categoria  || '' ;          
        this.descripcion_categoria = categoria.descripcion_categoria || '' ;
        this.cve_marca = categoria.cve_marca || '';  
        this.descripcion_marca = categoria.descripcion_marca || ''; 
        this.centroSap = categoria.centroSap || ''; 
        this.marcas = [];
        this.perfil = categoria.perfil || ''; 
        this.tipoLlenado = categoria.tipoLlenado || ''; 
        this.tipo_de_financiamiento = categoria.tipo_de_financiamiento || ''; 
        this.celular_aprobado = categoria.celular_aprobado || 0;
        this.prestamo_aprobado = categoria.prestamo_aprobado || 0; 
        this.fg_financiamiento_mixto = categoria.fg_financiamiento_mixto || false;
        this.score = categoria.score || 0;

    }
}

module.exports = { CategoriaDTO }