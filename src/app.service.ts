import { Injectable } from '@nestjs/common';
import { errorList } from './errors/errors.catalog';
import { ErrorBody } from './interfaces/error-handler.interface';
import { PreSolicitudDTO } from './dtos/presolicitud.dto';
import { PresolicitudAnexoDTO } from './dtos/presolicitud-anexo.dto';
import { LineaDeCreditoDTO } from './dtos/linea-credito.dto';
import { SolicitudDTO } from './dtos/solicitud.dto';
import { DetalleCarritoDeCompraDTO } from './dtos/detalle-carrito-compra.dto';

@Injectable()
export class AppService {

    processPreApplication = async (shoppingCart) => {

        let lstSlToReturn = [];
        let lstSlToReturnTmp = [];
        let creditLine = new LineaDeCreditoDTO();

        try {
            
            if(shoppingCart.cve_presolicitud_base === "" || shoppingCart.cve_presolicitud_base === undefined) throw new Error("Verifique que esta enviando una solicitud valida");        
            let preApplication = new PreSolicitudDTO({ 
                cve_presolicitud:  shoppingCart.cve_presolicitud_base, 
                fg_white_list :  shoppingCart.fg_white_list, 
                cve_sucursal :  shoppingCart.cve_sucursal 
            });

            
            let basePreApplication = await this.financingRepository.consultPreApplication(preApplication);
            
            // Building the base of the PR

            preApplication = new PreSolicitudDTO({ cve_presolicitud:  shoppingCart.cve_presolicitud_base });

            let attachmentPreApplication = await this.financingRepository.consultPreApplicationAttatchment(preApplication);
           
            basePreApplication.anexo_presolicitud = new PresolicitudAnexoDTO(attachmentPreApplication[0]);

            // Getting the client invoice
            
            let clientCveInvoice = await this.financingRepository.getClientCve(basePreApplication);

            if(clientCveInvoice.length === 0 || clientCveInvoice===null || clientCveInvoice === undefined) {
                clientCveInvoice = await this.financingRepository.getNextClientCve();
            }
            
            console.log("FOLIO CLIENTE",clientCveInvoice);

            // Setting creditLine parameters
            creditLine.curp = basePreApplication.curp;
            creditLine.cve_vendedor = shoppingCart.cve_vendedor;
            creditLine.cve_presolicitud_origen  = shoppingCart.cve_presolicitud_base;

            let detailsTmp = shoppingCart.detalle.sort((a, b) => Number(a.id_tipo_financiamiento) - Number(b.id_tipo_financiamiento));
            let details = detailsTmp.map((shoppingCartItem) => new DetalleCarritoDeCompraDTO(shoppingCartItem));

            let oPreApplication = basePreApplication;

            lstSlToReturn = [];
            lstSlToReturnTmp = await this.financingRepository.createPRAndSL(oPreApplication, basePreApplication, shoppingCart, creditLine, details, lstSlToReturn, clientCveInvoice.folio);


           return lstSlToReturnTmp;
            
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }

    }

    consultShoppingCartDetails = async(shoppingCart) => {
        try {
            let lstShoppingCart = [];

            if(shoppingCart.cve_presolicitud === "") {
                throw new Error("Verifique que esté enviando la presolicitud a validar");
            }

            lstShoppingCart = await this.shoppingCartRepository.consultShoppingCart(shoppingCart);

            return lstShoppingCart;
            
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    cleanShoppingCart = async(shoppingCart) => {
        
        try {
            await this.shoppingCartRepository.cleanShoppingCart(shoppingCart);
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }


    }

    processShoppingCart = async(shoppingCart) => {

        try {

            let preApplication = await this.processPreApplication(shoppingCart);
            let shoppingCartDetails = await this.consultShoppingCartDetails(shoppingCart);

            if(shoppingCartDetails.length > 0) {
                await this.cleanShoppingCart(shoppingCart);
            }
            
            return preApplication;

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
        
    }

    
}
