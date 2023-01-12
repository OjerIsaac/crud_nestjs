import { Injectable } from '@nestjs/common';
import { Crud } from '../crud.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrudService {
    constructor(
        @InjectRepository(Crud)
        private crudRepository: Repository<Crud>,
    ) { }

    async  findAll(): Promise<Crud[]> {
        return await this.crudRepository.find();
    }

    async  create(crud: Crud): Promise<Crud> {
        return await this.crudRepository.save(crud);
    }

    async update(crud: Crud): Promise<UpdateResult> {
        return await this.crudRepository.update(crud.id, crud);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.crudRepository.delete(id);
    }
    
}

