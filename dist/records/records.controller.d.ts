import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    create(createRecordDto: CreateRecordDto): Promise<string>;
    findAll(): Promise<import("@mikro-orm/knex").Loaded<import("src/records/entities/record.entity").Record, never, "*", never>[]>;
    findOne(id: string): Promise<import("@mikro-orm/knex").Loaded<import("src/records/entities/record.entity").Record, never, "*", never>>;
    update(id: string, updateRecordDto: UpdateRecordDto): Promise<void>;
    remove(id: string): Promise<number>;
}
