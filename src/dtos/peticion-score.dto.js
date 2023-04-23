const { PersonaScoreDTO } = require('./persona-score.dto');

class PeticionScoreDTO {
        cveSucursal;
        folio;
        idEmpresa;
        plataforma; 
        caja;
        fechaNacimiento;
        score;
        persona;

        constructor(scorePetition = {}) {
            this.cveSucursal = scorePetition.cveSucursal || "";
            this.folio = scorePetition.folio || "";
            this.idEmpresa = scorePetition.idEmpresa || 0 ;
            this.plataforma = scorePetition.plataforma || "";
            this.caja = scorePetition.caja || "";
            this.fechaNacimiento = scorePetition.fechaNacimiento || "";
            this.score = scorePetition.score || 0;
            this.persona = scorePetition.persona || new PersonaScoreDTO();
        }
}

module.exports = { PeticionScoreDTO };