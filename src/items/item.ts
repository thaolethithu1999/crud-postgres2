import { Attributes, Filter, Repository, Service } from "onecore";

export interface Item {
    id: string,
    title: string,
    status: string,
    description: string
}

export const itemModel: Attributes = {
    id: {
        key: true,
        match: "equal"
    },
    title: {},
    status: {},
    description: {},
}

export interface ItemFilter extends Filter {
    id: string,
    title: string,
    status?: string,
    description?: string
}

export interface ItemRepository extends Repository<Item, string> { }

export interface ItemService extends Service<Item, string, ItemFilter> { }


