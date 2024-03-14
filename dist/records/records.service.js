"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const record_entity_1 = require("./entities/record.entity");
const nestjs_1 = require("@mikro-orm/nestjs");
const core_1 = require("@mikro-orm/core");
let RecordsService = class RecordsService {
    constructor(recordRepository) {
        this.recordRepository = recordRepository;
    }
    async create(createRecordDto) {
        const records = this.recordRepository.create(createRecordDto);
        console.log(records, "records26");
        this.recordRepository.getEntityManager().persist(records);
        await this.recordRepository.getEntityManager().flush();
        return `your data successfully insert ${records.student_name}`;
        console.log(records, "records38");
    }
    async findAll() {
        return await this.recordRepository.findAll();
    }
    async findOne(id) {
        return await this.recordRepository.findOne({ id });
    }
    async update(id, updateRecordDto) {
        const records = await this.findOne(id);
        console.log(records, "records55");
        if (!records) {
            throw new common_1.NotFoundException();
        }
        Object.assign(records, updateRecordDto);
        return await this.recordRepository.getEntityManager().persist(records).flush();
    }
    async remove(id) {
        const records = await this.findOne(id);
        if (!records) {
            throw new common_1.NotFoundException();
        }
        return await this.recordRepository.nativeDelete(records);
    }
};
exports.RecordsService = RecordsService;
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectRepository)(record_entity_1.Record)),
    __metadata("design:paramtypes", [core_1.EntityRepository])
], RecordsService);
//# sourceMappingURL=records.service.js.map