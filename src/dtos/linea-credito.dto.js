class LineaDeCreditoDTO {
    cve_presolicitud_origen;
    cve_presolicitud;
    curp;
    cve_solicitud;
    id_tipo_financiamiento;
    cve_vendedor;
    solicitudes_generadas;

    constructor(creditLine = {}) {
        this.cve_presolicitud_origen = creditLine.cve_presolicitud_origen || "";
        this.cve_presolicitud = creditLine.cve_presolicitud || "";
        this.curp = creditLine.cve_solicitud || "";
        this.cve_solicitud = creditLine.cve_solicitud || "";
        this.id_tipo_financiamiento = creditLine.id_tipo_financiamiento || 0;
        this.cve_vendedor = creditLine.cve_vendedor || "";
        this.solicitudes_generadas = creditLine.solicitudes_generadas || [];
    }
}

module.exports = { LineaDeCreditoDTO };