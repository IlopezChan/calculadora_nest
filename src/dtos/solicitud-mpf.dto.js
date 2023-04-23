const { PresolicitudAnexoDTO } = require('./presolicitud-anexo.dto');
const { ContratoDTO } = require('./contrato.dto');

class SolicitudMpfDTO {
    constructor(sl = {}) {

        this.cve_contrato = sl.cve_contrato || "";
        this.cve_cliente = sl.cve_cliente || "";
        this.cve_sucursal = sl.cve_sucursal || "";
        this.centro_sap = sl.centro_sap || "";

        this.cve_categoria = sl.cve_categoria || "";
        this.descripcion_categoria = sl.descripcion_categoria || "";
        this.cve_marca = sl.cve_marca || "";
        this.descripcion_marca = sl.descripcion_marca || "";
        this.cve_producto = sl.cve_producto || "";
        this.descripcion_producto = sl.descripcion_producto || "";
        this.precio_equipo = sl.precio_equipo || 0;
        this.iva_equipo = sl.iva_equipo || 0;
        this.precio_equipo_iva = sl.precio_equipo_iva || 0;
        this.enganche_minimo = sl.enganche_minimo || 0;
        this.enganche_real = sl.enganche_real || 0;
        this.plazo_semanal = sl.plazo_semanal || null;
        this.pago_semanal = sl.pago_semanal || 0;
        this.pago_semanal_capital = sl.pago_semanal_capital || 0;
        this.pago_semanal_interes = sl.pago_semanal_interes || 0;
        this.total_financiado = sl.total_financiado || 0;
        this.fg_terminos_condiciones = sl.fg_terminos_condiciones || null;
        this.fg_autorizacion = sl.fg_autorizacion || null;
        this.codigo_sms = sl.codigo_sms || "";
        this.score_circulo = sl.score_circulo || 0;
        this.estatus_circulo = sl.estatus_circulo || null;
        this.perfil_riesgo = sl.perfil_riesgo || "";
        this.estatus = sl.estatus || null;
        this.primer_nombre = sl.primer_nombre || "";
        this.segundo_nombre = sl.segundo_nombre || "";
        this.apellido_paterno = sl.apellido_paterno || "";
        this.apellido_materno = sl.apellido_materno || "";
        this.nombre_completo = sl.nombre_completo || "";
        this.genero = sl.genero || "";
        this.curp = sl.curp || "";
        this.rfc = sl.rfc || "";
        this.correo_electronico = sl.correo_electronico || "";
        this.telefono_celular = sl.telefono_celular || "";
        this.telefono_fijo = sl.telefono_fijo || "";
        this.estado_nacimiento = sl.estado_nacimiento || "";
        this.fecha_nacimiento = sl.fecha_nacimiento || null;
        this.estado_civil = sl.estado_civil || "";
        this.antiguedad_estado_civil = sl.antiguedad_estado_civil || "";
        this.calle = sl.calle || "";

        this.no_exterior = sl.no_exterior || "";
        this.no_interior = sl.no_interior || "";
        this.cruzamientos = sl.cruzamientos || "";
        this.codigo_postal = sl.codigo_postal || "";
        this.estado = sl.estado || "";
        this.municipio = sl.municipio || "";
        this.ciudad = sl.ciudad || "";
        this.tipo_asentamiento = sl.tipo_asentamiento || "";
        this.asentamiento = sl.asentamiento || "";
        this.tipo_domicilio = sl.tipo_domicilio || "";
        this.antiguedad_domicilio = sl.antiguedad_domicilio || "";
        this.referencia_domicilio = sl.referencia_domicilio || "";
        this.escolaridad = sl.escolaridad || "";
        this.ocupacion = sl.ocupacion || "";
        this.lugar_trabajo = sl.lugar_trabajo || "";
        this.puesto = sl.puesto || "";
        this.telefono_laboral = sl.telefono_laboral || "";
        this.ingreso_mensual = sl.ingreso_mensual || null;
        this.antiguedad_trabajo = sl.antiguedad_trabajo || null;
        this.cantidad_dependientes = sl.cantidad_dependientes || "";
        this.fg_tarjeta_debito = sl.fg_tarjeta_debito || null;
        this.referencia_tarjeta_debito = sl.referencia_tarjeta_debito || "";
        this.fg_tarjeta_credito = sl.fg_tarjeta_credito || null;
        this.referencia_tarjeta_credito = sl.referencia_tarjeta_credito || "";
        this.id_parentesco = sl.id_parentesco || null;
        this.descripcion_parentesco = sl.descripcion_parentesco || "";
        this.nombre_referencia = sl.nombre_referencia || "";
        this.apellido_paterno_referencia = sl.apellido_paterno_referencia || "";
        this.apellido_materno_referencia = sl.apellido_materno_referencia || "";
        this.id_horario_contacto = sl.id_horario_contacto || null;
        this.horario_referencia = sl.horario_referencia || "";
        this.telefono_referencia = sl.telefono_referencia || "";
        this.fg_contactar_whatsapp = sl.fg_contactar_whatsapp || null;
        this.orden = sl.orden || null;
        this.imei = sl.imei || "";
        this.caja = sl.caja || "";



        this.fecha_alta = sl.fecha_alta || null;
        this.contactoPreferente = sl.contactoPreferente || "";
        this.referencias = sl.referencias || [];

        this.paso = sl.paso || "";
        this.nombre = sl.nombre || "";
        this.anexo_presolicitud = sl.anexo_presolicitud || new PresolicitudAnexoDTO();
        this.revalidacion = sl.revalidacion || false;
        this.verificado = sl.verificado || false;
        this.cve_presolicitud = sl.cve_presolicitud || "";

        this.id_cupon_white_list = sl.id_cupon_white_list || null;
        this.cve_solicitud = sl.cve_solicitud || "";
        this.id_tipo_financiamiento = sl.id_tipo_financiamiento || 0;
        this.fg_recompra = sl.fg_recompra || 0;

        this.fg_cliente_interno = sl.fg_cliente_interno || 0;
        this.fg_membresia = sl.fg_membresia || 0;
        this.contrato = sl.contrato || new ContratoDTO();
        this.cve_vendedor = sl.cve_vendedor || "";

    }
}

module.exports = { SolicitudMpfDTO };


