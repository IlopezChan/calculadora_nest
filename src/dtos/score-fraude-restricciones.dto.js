class ScoreFraudeRestriccionesDTO {
    
    fg_score_fraude;
    fg_expediente_credito;
    monto_maximo;
    fg_evaluado;

    constructur(score={}) {
        this.monto_maximo = score.monto_maximo || 0;
        this.fg_expediente_credito = score.fg_expediente_credito || 0;
        this.fg_score_fraude = score.fg_score_fraude || 0;
        this.fg_evaluado = score.fg_evaluado || 0;
    }
}

module.exports = { ScoreFraudeRestriccionesDTO };