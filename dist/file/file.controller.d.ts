import { FileService } from './file.service';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
        id: import("bson").ObjectId;
    }>;
}
