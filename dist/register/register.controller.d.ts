import { resgisterService } from './register.service';
export declare class RegisterController {
    private resgisterService;
    constructor(resgisterService: resgisterService);
    getAllUsers(): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
    register(body: any): Promise<{
        message: string;
        data: import("mongodb").InsertOneResult<import("bson").Document>;
    }>;
    login(body: any): Promise<{
        message: string;
        data: any;
    }>;
}
