import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';
import { EntityRepository } from '@mikro-orm/core';
export declare class RecordsService {
    private readonly recordRepository;
    constructor(recordRepository: EntityRepository<Record>);
    create(createRecordDto: UpdateRecordDto): Promise<string>;
    findAll(): Promise<import("@mikro-orm/core").Loaded<Record, never, "*", never>[]>;
    findOne(id: number): Promise<import("@mikro-orm/core").Loaded<Record, never, "*", never>>;
    update(id: number, updateRecordDto: UpdateRecordDto): Promise<void>;
    remove(id: number): Promise<number>;
}
