class PlazoDTO {
    plazo;
    enganche_minimo;
    enganche;
    pago_semanal;
    pago_semanal_capital;
    pago_semanal_interes;
    total_financiado;
    meses;

    constructor(plazo = {}) {
        this.plazo = plazo.plazo || 0;
        this.enganche = plazo.enganche || 0;
        this.enganche_minimo = plazo.enganche_minimo || 0;
        this.pago_semanal = plazo.pago_semanal || 0;
        this.pago_semanal_capital = plazo.pago_semanal_capital || 0;
        this.pago_semanal_interes = plazo.pago_semanal_interes || 0;
        this.total_financiado = plazo.total_financiado || 0;
        this.meses = plazo.meses || "";
    }
}

module.exports  = { PlazoDTO }