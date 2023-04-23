import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.162.57',
      port: 1433,
      username: 'user_desarrollo',
      password: '',
      database: 'SoftCredito',
      entities: [],
      synchronize: false,
      options: {
        encrypt: false, // Disable SSL
      },
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}