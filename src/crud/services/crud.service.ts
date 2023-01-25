import { Injectable, NotFoundException } from '@nestjs/common';
import { Crud } from '../crud.entity';
import { Repository, UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';
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

    async findOne(id: number): Promise<Crud> {
        const options: FindOneOptions = { where: { id: id }};
        const record = await this.crudRepository.findOne(options);
        if (!record) {
            throw new NotFoundException('Record not found');
        }
        return record;
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

