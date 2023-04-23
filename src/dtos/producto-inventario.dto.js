class ProductoInventarioDTO {
    cve_producto;
    material;
    descripcion_producto;
    overPrice;
    fullPrice;

    constructor(product)
    {
        this.cve_producto = product.cve_producto || "";
        this.material = product.material || "";
        this.descripcion_producto = product.descripcion_producto || "";
        this.overPrice = product.overPrice || 0;
        this.fullPrice = product.fullPrice || 0;
    }
}

module.exports =  { ProductoInventarioDTO };