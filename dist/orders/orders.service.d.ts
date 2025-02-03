import { mongoService } from 'src/mongodb.service';
export declare class OrdersService {
    private mongoService;
    constructor(mongoService: mongoService);
    createOredrs(body: any): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    getAllOrders(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    getSingleRecord(name: any): Promise<import("mongodb").WithId<import("bson").Document>>;
    updateData(data: any, name: any): Promise<import("mongodb").UpdateResult<import("bson").Document>>;
    searchApi(searchString: any): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    filterData(age: any): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    sortData(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    pagination(page: any, limit: any): Promise<{
        result: import("mongodb").WithId<import("bson").Document>[];
        currentPage: any;
        totalRecords: number;
        totalPages: number;
    }>;
    lookup(): Promise<import("bson").Document>;
    groupAggregate(): Promise<import("bson").Document[]>;
}
