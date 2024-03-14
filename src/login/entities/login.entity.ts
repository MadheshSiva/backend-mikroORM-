// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 import {Entity,PrimaryKey,Property} from '@mikro-orm/core'
@Entity({tableName : 'login'})
export class Login {
    @PrimaryKey()
    id : number ;
    @Property()
    user_name : string;
    @Property()
    email : string;
    @Property()
    password : string;
}
