import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Crud } from '../crud.entity';
import { CrudService } from '../services/crud.service';

@Controller('crud')
export class CrudController {
  constructor(private crudService: CrudService){}
  @Get()
  index(): Promise<Crud[]> {
    return this.crudService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Crud> {
    return this.crudService.findOne(id);
    // return this.crudService.findOne(parseInt(id));
  }
    
  @Post('create')
  async create(@Body() crudData: Crud): Promise<any> {
    return this.crudService.create(crudData);
  }  
    
  @Put(':id/update')
  async update(@Param('id') id, @Body() crudData: Crud): Promise<Crud> {
    crudData.id = Number(id);
    await this.crudService.update(crudData)
    return crudData;
  }
  
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    await this.crudService.delete(id);
    return { success: true };
  }

} 
