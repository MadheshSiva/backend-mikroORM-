import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
// import { InjectRepository } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
// import { Repository } from 'typeorm';
import {InjectRepository} from '@mikro-orm/nestjs';
 import {EntityRepository, FlushMode, GetRepository} from '@mikro-orm/core'
import { promises } from 'dns';
import {MikroORM} from '@mikro-orm/core' ;
import { ExtendedEntityRepository } from 'src/repository';
import { reduce } from 'rxjs';
@Injectable()
export class RecordsService {
  // constructor(
  //   @InjectRepository(Record)
  //   private readonly recordRepository:Repository<Record>) {

  // }
  
  constructor (
    @InjectRepository(Record)
    private readonly recordRepository : EntityRepository<Record>,
    
  ) {

  }

  
  async create(createRecordDto : UpdateRecordDto)  {
    // const orm = await MikroORM.init({})
    //  const em:any = orm.em
     
     const records:any =  this.recordRepository.create(createRecordDto)
     console.log(records,"records26")
    //  this.recordRepository.
    // +em.presist(records)
    this.recordRepository.getEntityManager().persist(records)
    await  this.recordRepository.getEntityManager().flush()
   return `your data successfully insert ${records.student_name}`;
     console.log(records,"records38")
  }

  async findAll() {
    
    return await this.recordRepository.findAll() ;
  }

 async findOne(id: number) {
    return await this.recordRepository.findOne({id}) ;
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    const records = await this.findOne(id);
    console.log(records,"records55")
    if(!records) {
     throw new NotFoundException()
    }
    Object.assign(records,updateRecordDto)
    return await this.recordRepository.getEntityManager().persist(records).flush();
  }

  async remove(id: number) {
    const records = await this.findOne(id);
    if(!records) {
     throw new NotFoundException()
    }
    // console.log(records,"records43")
    return await this.recordRepository.nativeDelete(records);
  }
  
}
