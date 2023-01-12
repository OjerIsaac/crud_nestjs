import { Controller, Get } from '@nestjs/common';

@Controller('crud')
export class CrudController {
    @Get()
    index(): string {
      return "This action will return contacts";
    }    
}
