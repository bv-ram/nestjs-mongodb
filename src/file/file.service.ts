import { Injectable } from '@nestjs/common';
import { mongoService } from 'src/mongodb.service';

@Injectable()
export class FileService {
    constructor(private mongoservice:mongoService){}

    async uploadFile(file:Express.Multer.File){
        try {
            const result = await this.mongoservice.getFilesCollection().insertOne({
                filename:file.originalname,
                mimetype:file.mimetype,
                data:file.buffer
            })
            return result.insertedId
        } catch (error) {
            throw new Error("Error occured")
        }
    }

    
}
