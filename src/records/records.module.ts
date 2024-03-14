import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports : [MikroOrmModule.forFeature([Record])],
  // imports : [TypeOrmModule.forFeature([Record])],
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule {}
