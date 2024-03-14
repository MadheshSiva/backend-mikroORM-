// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Entity,PrimaryKey,Property} from '@mikro-orm/core'

@Entity({tableName : 'records'})
export class Record {
    @PrimaryKey({autoincrement:true})
    id : number;

    @Property()
    student_name : string;
    @Property({nullable: true})
    dob : string;
    @Property()
    age : string;
    @Property({nullable : true})
    created_user : string;
    @Property({nullable : true})
    updated_user : string;
    @Property()
    subject_1 : string;
    @Property()
    mark_1 : string;
    @Property()
    subject_2 : string;
    @Property()
    mark_2 : string;
}
