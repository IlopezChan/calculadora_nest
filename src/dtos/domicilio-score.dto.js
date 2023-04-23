class DomicilioScoreDTO {
    direccion
    coloniaPoblacion;
    ciudad
    CP
    delegacionMunicipio
    estado
    numeroTelefono

    constructor(address = {}) {
        this.direccion = address.direccion || "";
        this.coloniaPoblacion = address.coloniaPoblacion || "";
        this.ciudad = address.ciudad || "";
        this.CP = address.CP || "";
        this.delegacionMunicipio = address.delegacionMunicipio || "";
        this.estado = address.estado || "";
        this.numeroTelefono = address.numeroTelefono || "";
    }
}

module.exports = { DomicilioScoreDTO };