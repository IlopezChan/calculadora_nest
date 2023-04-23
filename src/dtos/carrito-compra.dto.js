class CarritoDeCompraDTO {

    cve_presolicitud_base;
    monto_linea_de_credito;
    centro_sap;
    cve_vendedor;
    cve_sucursal;
    cve_caja;
    perfil;
    fg_white_list;
    estrategia_white_list;
    id_cupon_white_list;
    detalle;
    plataforma;

    constructor(shoppingCart={}) {
        this.cve_presolicitud_base = shoppingCart.cve_presolicitud_base || "";
        this.monto_linea_de_credito = shoppingCart.monto_linea_de_credito || 0;
        this.detalle = shoppingCart.detalle || [];
        this.fg_white_list = shoppingCart.fg_white_list || 0;
        this.estrategia_white_list = shoppingCart.estrategia_white_list || "";
        this.id_cupon_white_list = shoppingCart.id_cupon_white_list || 0;
        this.plataforma = shoppingCart.plataforma || "";
    }

}