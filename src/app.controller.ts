import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('calculator')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post("processShopingCart")
    saveMacAddress(@Body() shoppingCart:any): any {
        return this.appService.processShoppingCart(shoppingCart);
    }

}
