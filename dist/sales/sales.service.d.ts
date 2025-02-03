import { mongoService } from "src/mongodb.service";
export declare class SalesService {
    private mongoService;
    constructor(mongoService: mongoService);
    createSales(body: any): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    getAllSales(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    getSingleSale(name: any): Promise<import("mongodb").WithId<import("bson").Document>>;
    updateRecord(body: any, name: any): Promise<import("mongodb").UpdateResult<import("bson").Document>>;
    getPagination(page: number, limit: number): Promise<{
        items: import("mongodb").WithId<import("bson").Document>[];
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    }>;
    getFilterData(age: any): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    getSortData(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    serchApi(name: any): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    groupAggrigations(): Promise<import("bson").Document[]>;
    matchAggregation(): Promise<import("bson").Document[]>;
    sortAggregate(): Promise<import("bson").Document[]>;
    projectAggregation(): Promise<import("bson").Document[]>;
    projection(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
