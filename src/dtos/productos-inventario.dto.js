//const { ProductoInventarioDTO } = require('./productos-inventario.dto');

class ProductosInventarioDTO{
    productosInventarioBD;
    respuesta;
    mensaje;

    constructor(products={})
    {
        this.productosInventarioBD = products.productosInventarioBD || null;
    }
}

module.exports = {ProductosInventarioDTO};