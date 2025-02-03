import { UserService } from './user.service';
import { userModel } from './user.model';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(page: number, limit: number): Promise<{
        message: string;
        data: {
            users: import("mongodb").WithId<import("bson").Document>[];
            currentPage: any;
            total: number;
            pages: number;
        };
    }>;
    createPost(body: userModel): Promise<{
        message: string;
        data: any;
    }>;
    getUserById(userId: any): Promise<{
        message: string;
        data: import("mongodb").WithId<import("bson").Document>;
    }>;
}
