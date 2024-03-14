import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';
import { EntityRepository } from '@mikro-orm/core';
export declare class LoginService {
    private readonly loginRepository;
    constructor(loginRepository: EntityRepository<Login>);
    create(createLoginDto: CreateLoginDto): Promise<void>;
    findAll(): Promise<import("@mikro-orm/core").Loaded<Login, never, "*", never>[]>;
    findOne(email: string): Promise<import("@mikro-orm/core").Loaded<Login, never, "*", never>>;
    update(id: number, updateLoginDto: UpdateLoginDto): Promise<string>;
    remove(id: number): Promise<string>;
}
