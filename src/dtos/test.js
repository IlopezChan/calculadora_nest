const { MarcaDTO } = require("./marca.dto");

let lstCategories = [{
    cve_categoria: "1030101",
    descripcion_categoria: "KIT TELCEL",
    cve_marca: "0088",
    descripcion_marca: "HUAWEI",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1060101",
    descripcion_categoria: "TABLETAS SIN CHIP",
    cve_marca: "0075",
    descripcion_marca: "SAMSUNG",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0080",
    descripcion_marca: "ZTE",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0085",
    descripcion_marca: "MOTOROLA",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0075",
    descripcion_marca: "SAMSUNG",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0124",
    descripcion_marca: "POCO",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0127",
    descripcion_marca: "HONOR",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "1030106",
    descripcion_categoria: "EQUIPO OPEN MARKET",
    cve_marca: "0098",
    descripcion_marca: "NOKIA",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: false,
    score: 0
},
{
    cve_categoria: "9000",
    descripcion_categoria: "PRESTAMOS",
    cve_marca: "9000",
    descripcion_marca: "EFECTIVO",
    centroSap: '',
    marcas: [],
    perfil: '',
    tipoLlenado: '',
    tipo_de_financiamiento: '',
    celular_aprobado: 0,
    prestamo_aprobado: 0,
    fg_financiamiento_mixto: true,
    score: 0
}];


let creditTypesToRet =   [
     {
      cve_categoria: '1030101',
      descripcion_categoria: 'KIT TELCEL',
      cve_marca: '0088',
      descripcion_marca: 'HUAWEI',
      centroSap: '',
      marcas: [],
      perfil: '',
      tipoLlenado: '',
      tipo_de_financiamiento: '',
      celular_aprobado: 0,
      prestamo_aprobado: 0,
      fg_financiamiento_mixto: false,
      score: 0
    },
     {
      cve_categoria: '1060101',
      descripcion_categoria: 'TABLETAS SIN CHIP',
      cve_marca: '0075',
      descripcion_marca: 'SAMSUNG',
      centroSap: '',
      marcas: [],
      perfil: '',
      tipoLlenado: '',
      tipo_de_financiamiento: '',
      celular_aprobado: 0,
      prestamo_aprobado: 0,
      fg_financiamiento_mixto: false,
      score: 0
    },
     {
      cve_categoria: '1030106',
      descripcion_categoria: 'EQUIPO OPEN MARKET',
      cve_marca: '0080',
      descripcion_marca: 'ZTE',
      centroSap: '',
      marcas: [],
      perfil: '',
      tipoLlenado: '',
      tipo_de_financiamiento: '',
      celular_aprobado: 0,
      prestamo_aprobado: 0,
      fg_financiamiento_mixto: false,
      score: 0
    },
     {
      cve_categoria: '9000',
      descripcion_categoria: 'PRESTAMOS',
      cve_marca: '9000',
      descripcion_marca: 'EFECTIVO',
      centroSap: '',
      marcas: [],
      perfil: '',
      tipoLlenado: '',
      tipo_de_financiamiento: '',
      celular_aprobado: 0,
      prestamo_aprobado: 0,
      fg_financiamiento_mixto: true,
      score: 0
    }
  ]
  



creditTypesToRet.forEach(cat => {

    let lstMarcaTmp = []
    lstCategories.forEach(item => {
        if(item.cve_categoria === cat.cve_categoria) {
            let marca = new MarcaDTO();
            marca.cve_marca= item.cve_marca,
            marca.descripcion_marca = item.descripcion_marca,
            marca.fg_financiamiento_mixto= item.fg_financiamiento_mixto,
            marca.modelos = []
            lstMarcaTmp.push(marca);
        }
    })

    
    if (lstMarcaTmp.length>0){
        cat.marcas.push(...lstMarcaTmp);
        
    }
});

console.log(creditTypesToRet);

