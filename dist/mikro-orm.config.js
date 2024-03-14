"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const reflection_1 = require("@mikro-orm/reflection");
const config = {
    driver: postgresql_1.PostgreSqlDriver,
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Madhesh$28',
    dbName: 'postgres',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    metadataProvider: reflection_1.TsMorphMetadataProvider,
    debug: true,
    migrations: {
        path: './migrations',
    }
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map