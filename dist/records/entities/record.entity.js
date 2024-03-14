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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const core_1 = require("@mikro-orm/core");
let Record = class Record {
};
exports.Record = Record;
__decorate([
    (0, core_1.PrimaryKey)({ autoincrement: true }),
    __metadata("design:type", Number)
], Record.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "student_name", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Record.prototype, "dob", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "age", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Record.prototype, "created_user", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Record.prototype, "updated_user", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "subject_1", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "mark_1", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "subject_2", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Record.prototype, "mark_2", void 0);
exports.Record = Record = __decorate([
    (0, core_1.Entity)({ tableName: 'records' })
], Record);
//# sourceMappingURL=record.entity.js.map