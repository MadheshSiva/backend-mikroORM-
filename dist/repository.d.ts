import { EntityManager, EntityRepository, AnyEntity } from '@mikro-orm/postgresql';
export declare class ExtendedEntityRepository<T extends object> extends EntityRepository<T> {
    persist(entity: AnyEntity | AnyEntity[]): EntityManager;
    remove(entity: AnyEntity): EntityManager;
    removeAndFlush(entity: AnyEntity): Promise<void>;
    flush(): Promise<void>;
}
