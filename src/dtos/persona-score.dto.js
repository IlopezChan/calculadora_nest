const { DomicilioScoreDTO } = require('./domicilio-score.dto');

class PersonaScoreDTO {
    nombres;
    apellidoPaterno;
    apellidoMaterno;
    fechaNacimiento;
    rfc;
    curp;
    nacionalidad;
    domicilio;

    constructor(scorePerson = {}) {
        this.nombre = scorePerson.nombre || "";
        this.apellidoPaterno = scorePerson.apellidoPaterno || "";
        this.apellidoMaterno = scorePerson.apellidoMaterno || "";
        this.fechaNacimiento = scorePerson.fechaNacimiento || "";
        this.rfc = scorePerson.rfc || "";
        this.curp = scorePerson.curp || "";
        this.nacionalidad = scorePerson.nacionalidad || "";
        this.domicilio = scorePerson.domicilio || new DomicilioScoreDTO();
    }

}

module.exports = { PersonaScoreDTO };