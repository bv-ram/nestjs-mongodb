import { SalesService } from "./sales.service";
export declare class SalesController {
    private salesService;
    constructor(salesService: SalesService);
    craeteSales(body: any): Promise<{
        message: string;
        data: import("mongodb").InsertOneResult<import("bson").Document>;
    }>;
    getAllSales(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    getSingleRecord(name: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>;
    }>;
    updateSale(body: any, name: any): Promise<{
        message: string;
        updatedRecord: import("mongodb").UpdateResult<import("bson").Document>;
    }>;
    getPagination(page?: number, limit?: number): Promise<{
        message: string;
        pagination: {
            items: import("mongodb").WithId<import("bson").Document>[];
            totalRecords: number;
            totalPages: number;
            currentPage: number;
        };
    }>;
    getFilterData(age: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    sortDate(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    serchByName(name: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    groupAggregation(): Promise<{
        message: string;
        data: import("bson").Document[];
    }>;
    matchAggregate(): Promise<{
        message: string;
        data: import("bson").Document[];
    }>;
    sortAggregate(): Promise<{
        message: string;
        data: import("bson").Document[];
    }>;
    projectAggregation(): Promise<{
        message: string;
        data: import("bson").Document[];
    }>;
    projection(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
}
