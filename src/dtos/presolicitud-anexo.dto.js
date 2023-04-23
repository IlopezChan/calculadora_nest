class PresolicitudAnexoDTO {
    cve_presolicitud;
    escolaridad;
    ocupacion;
    lugar_trabajo;
    puesto;
    estado_civil;
    antiguedad_trabajo;
    cantidad_dependientes;
    ingreso_mensual;
    antiguedad_estado_civil;
    oper_alta;
    tipo_domicilio;
    antiguedad_domicilio;
    telefono_laboral;
    referencia_domicilio;

    constructor(attachedPreApplication={}) {
        this.cve_presolicitud = attachedPreApplication.cve_presolicitud || "";
        this.escolaridad = attachedPreApplication.escolaridad || "";
        this.ocupacion = attachedPreApplication.ocupacion || "";
        this.lugar_trabajo = attachedPreApplication.lugar_trabajo || "";
        this.puesto = attachedPreApplication.puesto || "";
        this.estado_civil = attachedPreApplication.estado_civil || "";
        this.antiguedad_estado_civil = attachedPreApplication.antiguedad_estado_civil || "";
        this.cantidad_dependientes = attachedPreApplication.cantidad_dependientes || "";
        this.ingreso_mensual = attachedPreApplication.ingreso_mensual || 0;
        this.antiguedad_trabajo = attachedPreApplication.antiguedad_trabajo || 0;
        this.oper_alta = attachedPreApplication.oper_alta || "";
        this.tipo_domicilio = attachedPreApplication.tipo_domicilio || "";
        this.antiguedad_domicilio = attachedPreApplication.antiguedad_domicilio || "";
        this.telefono_laboral = attachedPreApplication.telefono_laboral || "";
        this.referencia_domicilio = attachedPreApplication.referencia_domicilio || "";
       
    }
}

module.exports = { PresolicitudAnexoDTO };