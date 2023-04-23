class ConfiguracionDelSistemaDTO {
    redes ;
    tiposDeCreditos ;
    tarjetas ;
    se_envia_sms ;
    se_activa_emailage ;
    se_valida_mati_full ;
    nombre_evento_consulta_mati_light ;
    se_valida_score ;
    ambiente_mati ;
    cliente_mati ;
    flujo_mati ;
    ciclos_busqueda_mati ;
    tiempo_entre_ciclos_busqueda_mati ;
    ambiente_mati_efectivo ;
    cliente_mati_efectivo ;
    flujo_mati_efectivo ;
    terminos_credito_telefono ;
    terminos_credito_efectivo ;
    aceptacion_terminos_credito_telefono ;
    aceptacion_terminos_credito_efectivo ;
    no_reintentos_envio_sms ;
    tiempo_reintento_envio_sms ;
    mensaje_error ;
    terminos_garantia_extendida ;
    terminos_membresia ;
    configuracion_multifinanciamiento ;

    constructor(configuracionSistema={})  {
        this.redes = configuracionSistema.redes || [];
        this.tiposDeCreditos = configuracionSistema.tiposDeCreditos || [];
        this.se_envia_sms = configuracionSistema.se_envia_sms || 0;
        this.se_activa_emailage = configuracionSistema.se_activa_emailage || false;
        this.se_valida_mati_full = configuracionSistema.se_valida_score || false;
        this.nombre_evento_consulta_mati_light = configuracionSistema.nombre_evento_consulta_mati_light || "";
        this.se_valida_score = configuracionSistema.se_valida_score || false;
        this.ambiente_mati = configuracionSistema.ambiente_mati || "";
        this.cliente_mati = configuracionSistema.cliente_mati || "";
        this.flujo_mati = configuracionSistema.flujo_mati || "";
        this.ciclos_busqueda_mati = configuracionSistema.ciclos_busqueda_mati || 0;
        this.tiempo_entre_ciclos_busqueda_mati = configuracionSistema.tiempo_entre_ciclos_busqueda_mati || 0;
        this.ambiente_mati_efectivo = configuracionSistema.ambiente_mati_efectivo || "";
        this.cliente_mati_efectivo = configuracionSistema.cliente_mati_efectivo || "";
        this.flujo_mati_efectivo = configuracionSistema.flujo_mati_efectivo || "";
        this.terminos_credito_telefono = configuracionSistema.terminos_credito_telefono || "";
        this.terminos_credito_efectivo = configuracionSistema.terminos_credito_efectivo || "";
        this.aceptacion_terminos_credito_telefono = configuracionSistema.aceptacion_terminos_credito_telefono || "";
        this.aceptacion_terminos_credito_efectivo = configuracionSistema.aceptacion_terminos_credito_efectivo || "";
        this.no_reintentos_envio_sms = configuracionSistema.no_reintentos_envio_sms || 0;
        this.tiempo_reintento_envio_sms = configuracionSistema.tiempo_reintento_envio_sms || 0;
        this.mensaje_error = configuracionSistema.mensaje_error || "";
        this.terminos_garantia_extendida = configuracionSistema.terminos_garantia_extendida || "";
        this.terminos_membresia = configuracionSistema.terminos_membresia || "";
        this.configuracion_multifinanciamiento = configuracionSistema.configuracion_multifinanciamiento || [];
    }

}

module.exports = { ConfiguracionDelSistemaDTO };