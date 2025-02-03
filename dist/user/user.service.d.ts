import { mongoService } from 'src/mongodb.service';
export declare class UserService {
    private mongoService;
    constructor(mongoService: mongoService);
    getUserId(): string;
    createUser(body: any): Promise<any>;
    getUserById(userId: any): Promise<import("mongodb").WithId<import("bson").Document>>;
    getAllUsers(page: any, limit: any): Promise<{
        users: import("mongodb").WithId<import("bson").Document>[];
        currentPage: any;
        total: number;
        pages: number;
    }>;
}
