import { Injectable } from '@nestjs/common';
import { count } from 'console';
import { mongoService } from 'src/mongodb.service';

@Injectable()
export class OrdersService {

    constructor(private mongoService:mongoService){

    }
    async createOredrs(body){
        try {
            let result1 = await this.mongoService.getOrdersColleection().insertOne(body)
            return result1
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async getAllOrders(){
        try {
            let result = await this.mongoService.getOrdersColleection().find().toArray()
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async getSingleRecord(name){
        try {
            let result = await this.mongoService.getOrdersColleection().findOne({name:name})
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async updateData(data,name){
        try {
            let result = await this.mongoService.getOrdersColleection().updateOne({name:name},{$set:data})
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async searchApi(searchString){
        try {
            let result = await this.mongoService.getOrdersColleection().find({name:{$regex:searchString}}).toArray()
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async filterData(age){
        try {
            let result = await this.mongoService.getOrdersColleection().find({age:{$gt:age}}).toArray()
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async sortData(){
        try {
            let result = await this.mongoService.getOrdersColleection().find().sort({productPrice:1}).toArray()
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async pagination(page,limit){
        try {
            const skip = (page - 1) * limit
            const result = await this.mongoService.getOrdersColleection()
            .find()
            .skip(skip)
            .limit(limit)
            .toArray()
            const totalRecords = await this.mongoService.getOrdersColleection().countDocuments()
            const totalPages = Math.ceil(totalRecords / limit)
            return {
                result,currentPage:page,totalRecords,totalPages
            }
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async lookup(){
        try {
            let result = await this.mongoService.getOrdersColleection().aggregate([
            {
                $lookup:{
                    from:"SALES",
                    localField:"productName",
                    foreignField:"itemName",
                    as:"inventory"
                }
            }
            ]).toArray()
            return result[0]
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async groupAggregate(){
        try {
            let result = await this.mongoService.getOrdersColleection().aggregate([
                {
                    $group:{
                        _id:"productName",
                        total:{$sum:"$productPrice"},
                        avg:{$avg:"$productPrice"},
                        ttQuantity:{$sum:"$quantity"},
                        avgQunatity:{$avg:"$quantity"},
                        count:{$count:{}}
                    }
                }
            ]).toArray()
            return result
        } catch (error) {
            throw new Error("error occured")
        }
    }

}
