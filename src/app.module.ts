import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RecordsModule } from './records/records.module';
import { LoginModule } from './login/login.module';
import { MikroORM } from '@mikro-orm/postgresql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import {PostgreSqlDriver} from '@mikro-orm/postgresql'
@Module({
  // imports: [
  //   ConfigModule.forRoot(),
  //   TypeOrmModule.forRootAsync({
  //     imports : [ConfigModule],
  //     inject : [ConfigService],
  //     useFactory : (configService : ConfigService) => ({
  //        type : 'postgres',
  //        host : 'localhost',
  //        port : 5432,
  //        username : 'postgres',
  //        password : 'Madhesh$28',
  //        database : 'postgres',
  //        entities : [join(process.cwd(), 'dist/**/*.entity.js')],
  //        synchronize : true
  //     }),
  //   }),
  //   RecordsModule,
  //   LoginModule,
  // ],
  imports : [MikroOrmModule.forRoot(),
    LoginModule,
    RecordsModule,
  // MikroOrmModule.forRootAsync({
  //   imports : [ConfigModule],
  //   inject : [ConfigService],
  //   useFactory : (configService : ConfigService) => ({
  //       type : 'postgres',
  //        host : 'localhost',
  //        port : 5432,
  //        user : 'postgres',
  //        password : 'Madhesh$28',
  //        dbName : 'postgres',
  //        entities : [join(process.cwd(), 'dist/**/*.entity.js')],
  //        driver : PostgreSqlDriver,
  //        synchronize : true,
         
  //   }),
    
  // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
