// import { interpret, StateValue, State, createMachine, assign } from 'xstate';
import { NestFactory } from '@nestjs/core';
import * as AWS from 'aws-sdk';
import { AppModule } from './app.module';
import { AppService } from './app.service';
AWS.config.region = 'us-east-1';


export const handler: any = async (event: any, context, callback) => {
  
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const serviceApp = appContext.get(AppService);

  const route: string = event.field;
  let result: any;
  
  switch (route) {
    case 'guardarmacaddress':
      result = await serviceApp.guardarListaMacAddress(
        event.arguments.macAddress,
        event.arguments.centerId,
      );

      return result;
      break;
    case 'consultarmacaddress':
      result = serviceApp.consultarMacAddress(event.arguments.macAddress);
      return result;
      break;
    default:
      break;
  }
};
