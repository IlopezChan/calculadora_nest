import { ErrorBody } from "../interfaces/error-handler.interface";

export const errorList: ErrorBody[] =[

    {
        error_id: 1,
        error: {
            code: 'ETEL',
            message: 'Error en validacion de telefono'        }
    },
    {
        error_id: 2,
        error: {
            code: 'ERR_NOT_FOUND',
            message: 'Elemento No Encontrado'        
        }
    },
    {
        error_id: 3,
        error: {
            code: '3333',
            message: 'prueba error 3'        }
    },
    {
        error_id: 4,
        error: {
            code: '4444',
            message: 'prueba error 4'        }
    }
];