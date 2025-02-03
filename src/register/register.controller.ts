import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { resgisterService } from './register.service';

@Controller("newUser")
export class RegisterController {
  constructor(private resgisterService:resgisterService) {}

  @Get("allUsers")
  async getAllUsers(){
    try {
        let data = await this.resgisterService.getAllUsers();
        return {
            message:"data retrieved",
            data:data
        }
    } catch (error) {
        throw new HttpException("error",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post("register")
  async register(@Body() body:any){
    try {
        let user = await this.resgisterService.registerUser(body)
        return {
            message:"registered Successfully",
            data:user
        }
    } catch (error) {
        console.log(error);
        throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        
    }
  }

 

  @Post("login")
  async login(@Body() body:any){
    try {
        let user = await this.resgisterService.login(body)
        return {
            message:"login Successfully",
            data:user
        }
    } catch (error) {
        throw new HttpException("error",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


}