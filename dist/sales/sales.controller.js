"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
const interceptor_1 = require("../interceptor/interceptor");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    async craeteSales(body) {
        try {
            let sales = await this.salesService.createSales(body);
            return {
                message: "successfully created",
                data: sales
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllSales() {
        try {
            let records = await this.salesService.getAllSales();
            return {
                message: "data Retrieve Sucessfully",
                data: records
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getSingleRecord(name) {
        try {
            let user = await this.salesService.getSingleSale(name);
            return {
                message: "single data Retrieve Sucessfully",
                data: user
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateSale(body, name) {
        try {
            let updateRecord = await this.salesService.updateRecord(body, name);
            return {
                message: "record Updated",
                updatedRecord: updateRecord
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPagination(page = 1, limit = 10) {
        try {
            const pagination = await this.salesService.getPagination(page, limit);
            return {
                message: "Pagination successful",
                pagination,
            };
        }
        catch (error) {
            throw new common_1.HttpException(`Pagination failed: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFilterData(age) {
        try {
            const numericAge = parseInt(age);
            if (isNaN(numericAge)) {
                throw new common_1.HttpException("Invalid age parameter", common_1.HttpStatus.BAD_REQUEST);
            }
            let filterData = await this.salesService.getFilterData(numericAge);
            return {
                message: "filterData",
                data: filterData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sortDate() {
        try {
            let sortData = await this.salesService.getSortData();
            return {
                message: "sorted data",
                data: sortData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async serchByName(name) {
        try {
            let serchdUser = await this.salesService.serchApi(name);
            return {
                message: "successfull",
                data: serchdUser
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async groupAggregation() {
        try {
            let result = await this.salesService.groupAggrigations();
            return {
                message: "success",
                data: result
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async matchAggregate() {
        try {
            let result = await this.salesService.matchAggregation();
            return {
                message: "success",
                data: result
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sortAggregate() {
        try {
            let result = await this.salesService.sortAggregate();
            return {
                message: "sucess",
                data: result
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async projectAggregation() {
        try {
            let result = await this.salesService.projectAggregation();
            return {
                message: "success",
                data: result
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async projection() {
        try {
            let result = await this.salesService.projection();
            return {
                message: "success",
                data: result
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SalesController = SalesController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "craeteSales", null);
__decorate([
    (0, common_1.UseInterceptors)(interceptor_1.LoggerInterceptor),
    (0, common_1.Get)("allSales"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getAllSales", null);
__decorate([
    (0, common_1.Get)("sale/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getSingleRecord", null);
__decorate([
    (0, common_1.Put)("update/:name"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "updateSale", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("limit", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getPagination", null);
__decorate([
    (0, common_1.Get)("filter"),
    __param(0, (0, common_1.Query)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getFilterData", null);
__decorate([
    (0, common_1.Get)("sort"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "sortDate", null);
__decorate([
    (0, common_1.Get)("search/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "serchByName", null);
__decorate([
    (0, common_1.Get)("groupAggregation"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "groupAggregation", null);
__decorate([
    (0, common_1.Get)('matchAggregate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "matchAggregate", null);
__decorate([
    (0, common_1.Get)('sortAggregate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "sortAggregate", null);
__decorate([
    (0, common_1.Get)('projectAggregation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "projectAggregation", null);
__decorate([
    (0, common_1.Get)("projection"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "projection", null);
exports.SalesController = SalesController = __decorate([
    (0, common_1.Controller)('sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
//# sourceMappingURL=sales.controller.js.map