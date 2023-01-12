import * as dotenv from 'dotenv';
dotenv.config({path: './env'});
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CrudModule,       
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ejiro',
      password: '123',
      database: 'crudApi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),],
})
export class AppModule {}
