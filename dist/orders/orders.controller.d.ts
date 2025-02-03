import { orders } from "../orders/orders.model";
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    createOrders(body: orders): Promise<{
        message: string;
        data: import("mongodb").InsertOneResult<import("bson").Document>;
    }>;
    getAllOrders(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    getSingleRecord(name: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>;
    }>;
    updateRecord(body: any, name: any): Promise<{
        message: string;
        data: import("mongodb").UpdateResult<import("bson").Document>;
    }>;
    searchApi(name: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    filterData(age: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    soretdData(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    pagination(page?: number, limit?: number): Promise<{
        message: string;
        data: {
            result: import("mongodb").WithId<import("bson").Document>[];
            currentPage: any;
            totalRecords: number;
            totalPages: number;
        };
    }>;
    lookupData(): Promise<{
        message: string;
        data: import("bson").Document;
    }>;
    groupAggregate(): Promise<{
        message: string;
        data: import("bson").Document[];
    }>;
}
