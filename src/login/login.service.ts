import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
//  import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
 import {InjectRepository} from '@mikro-orm/nestjs';
 import {EntityRepository} from '@mikro-orm/core'
@Injectable()
export class LoginService {
  // constructor(
  //   @InjectRepository(Login)
  //   private readonly loginRepository : Repository<Login>) {

  // }
  constructor (
    @InjectRepository(Login)
    private readonly loginRepository : EntityRepository<Login>
  ) {

  }
  async create(createLoginDto: CreateLoginDto) {
     const login = this.loginRepository.create(createLoginDto)
    return await this.loginRepository.getEntityManager().persist(login).flush();
  }

  async findAll() {
    return await this.loginRepository.findAll();
  }

  async findOne(email: string) {
    
    return await this.loginRepository.findOne({email} );
  }

 async update(id : number , updateLoginDto: UpdateLoginDto) {
    // const login = await this.findOne(id)
  //   if(!login){
  // throw new NotFoundException()
  //   }
  //   Object.assign(login,updateLoginDto)
    return `not used`;
  }
    
  async remove(id : number) {
  //   const login = await this.findOne(email)
  //   if(!login){
  // throw new NotFoundException()
  //   }
    return  `not used`;
  }
}
