import { mongoService } from "src/mongodb.service";
export declare class resgisterService {
    private mongoService;
    constructor(mongoService: mongoService);
    registerUser(body: any): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    login(body: any): Promise<any>;
    getAllUsers(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
