import { ItemController } from './item-controller'
import { Item, itemModel, ItemRepository, ItemFilter, ItemService } from './item'
import { Manager, Search, Log } from 'onecore';
import { DB, postgres, SearchBuilder } from 'query-core';
import { TemplateMap, useQuery } from 'query-mappers';
import { SqlItemRepository } from './sql-item-repository';
import { buildQuery } from './query'
export * from './item';
export { ItemController };

export class ItemManager extends Manager<Item, string, ItemFilter> implements ItemService {
    constructor(search: Search<Item, ItemFilter>, repository: ItemRepository) {
        super(search, repository);
    }
}

export function useItemService(db: DB): ItemService {
    const builder = new SearchBuilder<Item, ItemFilter>(db.query, 'items', itemModel, postgres, buildQuery);
    const repository = new SqlItemRepository(db);
    return new ItemManager(builder.search, repository);
}

export function useItemController(log: Log, db: DB): ItemController {
    return new ItemController(log, useItemService(db));
}