import { OnModuleInit } from "@nestjs/common";
import { Collection } from "mongodb";
export declare class mongoService implements OnModuleInit {
    private mongoClient;
    private DB;
    private MONGODB_NAME;
    private MONGO_USER_COLLECTION_NAME;
    private MONGO_SALES_COLLECTION_NAME;
    private MONGO_ORDERS_COLLECTION_NAME;
    private MONGO_FILES_COLLECTION_NAME;
    private MONGO_USERS_COLLECTION_NAME;
    constructor();
    onModuleInit(): Promise<void>;
    connect(): Promise<void>;
    getFilesCollection(): Collection<import("bson").Document>;
    getNewUserCollection(): Collection<import("bson").Document>;
    getSalesCollection(): Collection<import("bson").Document>;
    getOrdersColleection(): Collection<import("bson").Document>;
    getUserReg(): Collection<import("bson").Document>;
}
