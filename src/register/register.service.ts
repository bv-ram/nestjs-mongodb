import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { mongoService } from "src/mongodb.service";
import * as jwt from 'jsonwebtoken'
import { error } from "console";

@Injectable()

export class resgisterService {
    constructor(private mongoService: mongoService){}

    async registerUser(body:any){
        try {
            const hashedPassword = await bcrypt.hash(body.password,10)
            const existingUser = await this.mongoService.getNewUserCollection().findOne({email:body.email})
            
            if(existingUser){
                throw new Error('User already exists')
            }

            const result = await this.mongoService.getNewUserCollection().insertOne({email:body.email,password:hashedPassword})         
            return result
        } catch (error) {
            
        }
    }



    async login(body){
        const user = await this.mongoService.getNewUserCollection().findOne({email:body.email})
        console.log(user,"user");
        
        if(!user){
            throw new Error("Invalid email or password")
        }
        const bcryptPassword = await bcrypt.compare(body.password,user.password)
        console.log(bcryptPassword,"bcryptPassword");
        
        // if(!bcryptPassword){
        //     throw new Error("Invalid email or password")
        // }
        const payload = {email:user.email}
        const token = {accessToken:jwt.sign(payload,'jwtram',{expiresIn:'12h'})}
        body.token = token.accessToken
        return body
    }

 
    async getAllUsers(){
        return this.mongoService.getNewUserCollection().find().toArray()
    }

}