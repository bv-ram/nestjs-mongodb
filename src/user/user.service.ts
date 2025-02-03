import { Injectable } from '@nestjs/common';
import { mongoService } from 'src/mongodb.service';
import { v4 as uuidv4 } from "uuid";
@Injectable()
export class UserService {
    constructor(private mongoService:mongoService){

    }
    getUserId(){
        return `userId-${uuidv4()}`
    }
    async createUser(body){
        let savedUser
        try {
            let userId = this.getUserId()
            body['userId'] = userId
            let user = await this.mongoService.getUserReg().insertOne(body)
            if(user.acknowledged){
                savedUser = await this.mongoService.getUserReg().findOne({_id:user.insertedId})
            }
            return savedUser
        } catch (error) {
            throw new Error("error occured")
        }
    }
    async getUserById(userId){
        try {
            let user = await this.mongoService.getUserReg().findOne({userId:userId})
            return user
        } catch (error) {
            throw new Error("error occured")
        }
    }
    async getAllUsers(page,limit){
        let skip = (page - 1) * limit
        try {
            let users = await this.mongoService.getUserReg()
            .find()
            .sort({_id:-1})
            .skip(skip)
            .limit(limit)
            .toArray()

            let total = await this.mongoService.getUserReg().countDocuments()
            let pages = Math.ceil(total / limit)
            return {users,currentPage:page,total,pages}

        } catch (error) {
            throw new Error("error occured")
        }
    }
}
