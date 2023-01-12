import { Module } from '@nestjs/common';
import { CrudService } from './services/crud.service';
import { CrudController } from './controllers/crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crud } from './crud.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Crud]),
  ],
  providers: [CrudService],
  controllers: [CrudController]
})
export class CrudModule {}
