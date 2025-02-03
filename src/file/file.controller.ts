import { Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
    constructor(private fileService:FileService){}

    @Post("upload")
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file:Express.Multer.File){
        try {
            const file1 = await this.fileService.uploadFile(file)
            return {
                message: 'File uploaded successfully',
                id: file1,
              };
        
              
        } catch (error) {
            throw new HttpException('File upload failed', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
