class ContratoDTO {
    cve_solicitud;
    cve_contrato;
    cve_vendedor;
    caja;
    cve_sucursal;
    folio_registro_intranet;
    folio_registro_intranet_largo;

    constructor(model={}) {
        this.cve_solicitud = model.cve_solicitud || "";
        this.cve_contrato = model.cve_contrato  || "";
        this.cve_vendedor = model.cve_vendedor  || "";
        this.caja = model.caja  || "";
        this.cve_sucursal = model.cve_sucursal  || "";
        this.folio_registro_intranet = model.folio_registro_intranet  || "";
        this.folio_registro_intranet_largo = model.folio_registro_intranet_largo  || "";
    }
}

module.exports = { ContratoDTO };