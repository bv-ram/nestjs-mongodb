import { Injectable } from "@nestjs/common";
import { skip } from "node:test";
import { mongoService } from "src/mongodb.service";

@Injectable()

export class SalesService {
    constructor(private mongoService:mongoService){}

    async createSales(body:any){
        try {
            let sales = await this.mongoService.getSalesCollection().insertOne(body)
            return sales
        } catch (error) {
            throw new Error("error while creating Sales")
        }
    }

    async getAllSales(){
        try {
            let allData = await this.mongoService.getSalesCollection().find().toArray();
            return allData
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async getSingleSale(name){
        try {
            let singleRecordByname = await this.mongoService.getSalesCollection().findOne({name:name})
            return singleRecordByname
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async updateRecord(body,name){
        try {
            let updateRecord = await this.mongoService.getSalesCollection().updateOne(
                {name},{$set:body}
            )

            return updateRecord
        } catch (error) {
            throw new Error("error occured")
        }
    }
    async getPagination(page: number, limit: number) {
        try {
            if (isNaN(page) || page < 1) page = 1;
            if (isNaN(limit) || limit < 1) limit = 10;
    
            const skip = (page - 1) * limit;
    
            const items = await this.mongoService.getSalesCollection()
                .find()
                .skip(skip)
                .limit(limit)
                .toArray();
    
          
            const totalRecords = await this.mongoService.getSalesCollection().countDocuments();
    
  
            const totalPages = Math.ceil(totalRecords / limit);
    
            return {
                items,
                totalRecords,
                totalPages,
                currentPage: page,
            };
        } catch (error) {
            throw new Error(`Pagination failed: ${error.message}`);
        }
    }

    async getFilterData(age){
        try {
            const filterByage = await this.mongoService.getSalesCollection().find({age:{$lt:age}}).toArray()
            return filterByage
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async getSortData(){
        try {
            let sortedData = await this.mongoService.getSalesCollection().find().sort({name:1}).toArray()
            return sortedData
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async serchApi(name){
        try {
            let search = await this.mongoService.getSalesCollection().find({name:{$regex:name}}).toArray()
            return search
        } catch (error) {
            throw new Error("error occured")
        }
    }

    // aggregations

    async groupAggrigations(){
        try {
            let groupAggregate = await this.mongoService.getSalesCollection().aggregate([
                {
                    $group:{
                        _id:"$products",
                        totalsales:{$sum: "$itemPrice"},
                        averageSales :{$avg: "$itemPrice"},
                        count: {$count:{}}
                    }
                }
            ]).toArray()
            return groupAggregate
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async matchAggregation(){
        try {
            let matchAggregate = await this.mongoService.getSalesCollection().aggregate([
                {
                    $match:{
                        age:{$gte:23, $lte:30}
                    }
                }
            ]).toArray()
            return matchAggregate
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async sortAggregate(){
        try {
            let sortAggregate = await this.mongoService.getSalesCollection().aggregate([
                {
                    $sort:{
                        country:-1
                    }
                }
            ]).toArray()
            return sortAggregate
        } catch (error) {
            throw new Error("error occured")
        }
    }

    async projectAggregation(){
        try {
            let projectAggregte = await this.mongoService.getSalesCollection().aggregate([
                {
                    $project:{
                        _id:0,
                        name:1,
                        itemName:1,
                        itemPrice:1
                    }
                }
            ]).toArray()
            return projectAggregte
        } catch (error) {
            throw new Error("error occured")
        }
    }
    async projection(){
        try {
            let projection = await this.mongoService.getSalesCollection().find({}, {projection:{age:1,gender:1,_id:0}}).toArray()
            return projection
        } catch (error) {
            throw new Error("error occured")
        }
    }
    
}