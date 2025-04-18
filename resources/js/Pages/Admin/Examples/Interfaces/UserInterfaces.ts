export type CreateRecord = {

    name: string;
    father_name?: string;
    mother_name: string;
    birth_date?: Date;
    avatar: string;
}

export type UpdateRecord = {
    name: string;
    father_name?: string;
    mother_name: string;
    birth_date?: Date;
    avatar: string;
}

export interface Record {
    name: string;
    father_name: string;
    mother_name: string;
    birth_date: Date;
    avatar: string;
}

type TableHeader = {
    key?: string | "data-table-group" | "data-table-select" | "data-table-expand";
    value?: SelectItemKey<Record<string, any>>;
    title?: string;
    fixed?: boolean;
    align?: "end" | "center" | "start";
    width?: string | number;
    minWidth?: string;
    maxWidth?: string;
    nowrap?: boolean;
    headerProps?: {
        [key: string]: any;
    };
    // cellProps?: ((data: Pick<ItemKeySlot<...>, "value" | "item" | "index" | "internalItem" >) => Record<string, any>) | {
    //     [key: string]: any;
    // };
    // sortable ?: boolean;
    // sort ?: DataTableCompareFunction <...>;
    // sortRaw ?: DataTableCompareFunction <...>;
    // filter ?: FilterFunction;
    // mobile ?: boolean;
    // children ?: TableHeader[];
};

type TableHeaderArray = readonly TableHeader[];


