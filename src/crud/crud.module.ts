import { Module } from '@nestjs/common';
import { CrudService } from './services/crud.service';
import { CrudController } from './controllers/crud.controller';

@Module({
  providers: [CrudService],
  controllers: [CrudController]
})
export class CrudModule {}
