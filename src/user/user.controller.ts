import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { userModel } from './user.model';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get("getAllRecords")
    async getAllUsers(@Query('page',ParseIntPipe) page:number,@Query('limit', ParseIntPipe) limit:number){
        try {
            let users = await this.userService.getAllUsers(page,limit)
            return {
                message:"data retrive successfully",
                data:users
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post("create")
    async createPost(@Body() body:userModel){
        try {
            let result = await this.userService.createUser(body)
            return {
                message:"user created successfully",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("getUser/:userId")
    async getUserById(@Param("userId") userId:any){
        try {
            let result = await this.userService.getUserById(userId)
            return {
                message:"data retrived successfully",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
