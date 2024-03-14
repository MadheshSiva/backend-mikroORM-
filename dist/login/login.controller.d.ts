import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(createLoginDto: CreateLoginDto): Promise<void>;
    findAll(): Promise<import("@mikro-orm/knex").Loaded<import("src/login/entities/login.entity").Login, never, "*", never>[]>;
    findOne(email: string): Promise<import("@mikro-orm/knex").Loaded<import("src/login/entities/login.entity").Login, never, "*", never>>;
    update(id: string, updateLoginDto: UpdateLoginDto): Promise<string>;
    remove(id: string): Promise<string>;
}
