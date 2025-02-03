import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import {orders} from "../orders/orders.model"
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {

    constructor(private ordersService:OrdersService){}
    @Post("add")
    async createOrders(@Body() body:orders){
        try {
            let orders = await this.ordersService.createOredrs(body)
            return {
                message:"orders Created",
                data:orders
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("getAllOredrs")
    async getAllOrders(){
        try {
            let data = await this.ordersService.getAllOrders()
            return {
                message:"data retieve successfully",
                data:data
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("singleRecord/:name")
    async getSingleRecord(@Param("name") name:any){
        try {
            let data = await this.ordersService.getSingleRecord(name)
            return {
                message:"data retieve successfully",
                data:data
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put("updateRecord/:name")
    async updateRecord(@Body() body:any, @Param("name") name:any){
        try {
            let updateRecord = await this.ordersService.updateData(body,name)
            return {
                message:"updated data successfully",
                data:updateRecord
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("search/:name")
    async searchApi(@Param("name") name:any){
        try {
            let searchData = await this.ordersService.searchApi(name)
            return {
                message:"data retieve successfully",
                data:searchData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("filter")
    async filterData(@Query("age") age:any){
        try {
            let parseAge = parseInt(age)
            let filteredData = await this.ordersService.filterData(parseAge)
            return {
                message:"data retieve successfully",
                data:filteredData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("sort")
    async soretdData(){
        try {
            let sortedData = await this.ordersService.sortData()
            return {
                message:"data retieve successfully",
                data:sortedData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("pagination")
    async pagination(
        @Query('page', ParseIntPipe) page:number = 1, 
        @Query("limit", ParseIntPipe) limit:number = 10){
        try {
            let paginationData = await this.ordersService.pagination(page,limit)
            return {
                message:"data retieve successfully",
                data:paginationData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("lookup")
    async lookupData(){
        try {
            let data = await this.ordersService.lookup()
            return {
                message:"data retieve successfully",
                data:data
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("groupAggregate")
    async groupAggregate(){
        try {
            let groupAggregate = await this.ordersService.groupAggregate()
            return {
                message:"data retieve successfully",
                data:groupAggregate
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}
