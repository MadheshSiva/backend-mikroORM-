"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedEntityRepository = void 0;
const postgresql_1 = require("@mikro-orm/postgresql");
class ExtendedEntityRepository extends postgresql_1.EntityRepository {
    persist(entity) {
        return this.em.persist(entity);
    }
    remove(entity) {
        return this.em.remove(entity);
    }
    async removeAndFlush(entity) {
        await this.em.removeAndFlush(entity);
    }
    async flush() {
        return this.em.flush();
    }
}
exports.ExtendedEntityRepository = ExtendedEntityRepository;
//# sourceMappingURL=repository.js.map