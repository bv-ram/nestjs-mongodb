import { Body, Controller, Get, HttpException, HttpStatus, Post ,Param, Put, Query, ParseIntPipe, UseInterceptors} from "@nestjs/common";
import { SalesService } from "./sales.service";
import { LoggerInterceptor } from "src/interceptor/interceptor";

@Controller('sales')
export class SalesController {
    constructor(private salesService:SalesService){}

    @Post("create")
    async craeteSales(@Body() body:any){
        try {
            let sales = await this.salesService.createSales(body)
            return {
                message:"successfully created",
                data:sales
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @UseInterceptors(LoggerInterceptor)
    @Get("allSales")
    async getAllSales(){
        try {
            let records = await this.salesService.getAllSales()
            return {
                message:"data Retrieve Sucessfully",
                data:records
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("sale/:name")
    async getSingleRecord(@Param("name") name:any){
        try {
            let user = await this.salesService.getSingleSale(name)
            return {
                message:"single data Retrieve Sucessfully",
                data:user
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put("update/:name")
    async updateSale(@Body() body:any, @Param("name") name:any){
        try {
            let updateRecord = await this.salesService.updateRecord(body,name)
            return {
                message:"record Updated",
                updatedRecord:updateRecord
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    @Get("pagination")
    async getPagination(
        @Query("page", ParseIntPipe) page: number = 1,
        @Query("limit", ParseIntPipe) limit: number = 10
    ) {
        try {
            const pagination = await this.salesService.getPagination(page, limit);
            return {
                message: "Pagination successful",
                pagination,
            };
        } catch (error) {
            throw new HttpException(
                `Pagination failed: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
    @Get("filter")
    async getFilterData(@Query("age") age:any){
        try {
            const numericAge = parseInt(age);
            if (isNaN(numericAge)) {
                throw new HttpException("Invalid age parameter", HttpStatus.BAD_REQUEST);
            }
            let filterData = await this.salesService.getFilterData(numericAge)
            return {
                message:"filterData",
                data:filterData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("sort")
    async sortDate(){
        try {
            let sortData = await this.salesService.getSortData()
            return {
                message:"sorted data",
                data:sortData
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("search/:name")
    async serchByName(@Param("name") name:any){
        try {
            let serchdUser = await this.salesService.serchApi(name)
            return {
                message:"successfull",
                data:serchdUser
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // aggregations
    @Get("groupAggregation")
    async groupAggregation(){
        try {
            let result = await this.salesService.groupAggrigations()
            return{
                message:"success",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('matchAggregate')
    async matchAggregate(){
        try {
            let result = await this.salesService.matchAggregation()
            return {
                message:"success",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('sortAggregate')
    async sortAggregate(){
        try {
            let result = await this.salesService.sortAggregate()
            return {
                message:"sucess",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('projectAggregation')
    async projectAggregation(){
        try {
            let result = await this.salesService.projectAggregation()
            return {
                message:"success",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("projection")
    async projection(){
        try {
            let result = await this.salesService.projection()
            return{
                message:"success",
                data:result
            }
        } catch (error) {
            throw new HttpException("error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}