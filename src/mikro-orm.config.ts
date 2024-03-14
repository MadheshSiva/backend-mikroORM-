import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import {MikroORM} from '@mikro-orm/core'
import * as path from 'path';
import { ExtendedEntityRepository } from './repository';
const config: Options = {
  
  driver: PostgreSqlDriver,
         host : 'localhost',
         port : 5432,
         user : 'postgres',
         password : 'Madhesh$28',
         dbName : 'postgres',
        //  synchronize : true,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
   migrations:{
   path: './migrations',
//    pattern: /^[\w-]+\d+\.ts$/
 
   }
   
};

export default config;