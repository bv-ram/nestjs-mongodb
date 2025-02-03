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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_model_1 = require("../orders/orders.model");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async createOrders(body) {
        try {
            let orders = await this.ordersService.createOredrs(body);
            return {
                message: "orders Created",
                data: orders
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllOrders() {
        try {
            let data = await this.ordersService.getAllOrders();
            return {
                message: "data retieve successfully",
                data: data
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getSingleRecord(name) {
        try {
            let data = await this.ordersService.getSingleRecord(name);
            return {
                message: "data retieve successfully",
                data: data
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateRecord(body, name) {
        try {
            let updateRecord = await this.ordersService.updateData(body, name);
            return {
                message: "updated data successfully",
                data: updateRecord
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async searchApi(name) {
        try {
            let searchData = await this.ordersService.searchApi(name);
            return {
                message: "data retieve successfully",
                data: searchData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async filterData(age) {
        try {
            let parseAge = parseInt(age);
            let filteredData = await this.ordersService.filterData(parseAge);
            return {
                message: "data retieve successfully",
                data: filteredData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async soretdData() {
        try {
            let sortedData = await this.ordersService.sortData();
            return {
                message: "data retieve successfully",
                data: sortedData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async pagination(page = 1, limit = 10) {
        try {
            let paginationData = await this.ordersService.pagination(page, limit);
            return {
                message: "data retieve successfully",
                data: paginationData
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async lookupData() {
        try {
            let data = await this.ordersService.lookup();
            return {
                message: "data retieve successfully",
                data: data
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async groupAggregate() {
        try {
            let groupAggregate = await this.ordersService.groupAggregate();
            return {
                message: "data retieve successfully",
                data: groupAggregate
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orders_model_1.orders]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrders", null);
__decorate([
    (0, common_1.Get)("getAllOredrs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)("singleRecord/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getSingleRecord", null);
__decorate([
    (0, common_1.Put)("updateRecord/:name"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateRecord", null);
__decorate([
    (0, common_1.Get)("search/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "searchApi", null);
__decorate([
    (0, common_1.Get)("filter"),
    __param(0, (0, common_1.Query)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "filterData", null);
__decorate([
    (0, common_1.Get)("sort"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "soretdData", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("limit", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "pagination", null);
__decorate([
    (0, common_1.Get)("lookup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "lookupData", null);
__decorate([
    (0, common_1.Get)("groupAggregate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "groupAggregate", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map