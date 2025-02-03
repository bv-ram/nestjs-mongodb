import { mongoService } from 'src/mongodb.service';
export declare class FileService {
    private mongoservice;
    constructor(mongoservice: mongoService);
    uploadFile(file: Express.Multer.File): Promise<import("bson").ObjectId>;
}
