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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_service_1 = require("../mongodb.service");
let OrdersService = class OrdersService {
    constructor(mongoService) {
        this.mongoService = mongoService;
    }
    async createOredrs(body) {
        try {
            let result1 = await this.mongoService.getOrdersColleection().insertOne(body);
            return result1;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async getAllOrders() {
        try {
            let result = await this.mongoService.getOrdersColleection().find().toArray();
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async getSingleRecord(name) {
        try {
            let result = await this.mongoService.getOrdersColleection().findOne({ name: name });
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async updateData(data, name) {
        try {
            let result = await this.mongoService.getOrdersColleection().updateOne({ name: name }, { $set: data });
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async searchApi(searchString) {
        try {
            let result = await this.mongoService.getOrdersColleection().find({ name: { $regex: searchString } }).toArray();
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async filterData(age) {
        try {
            let result = await this.mongoService.getOrdersColleection().find({ age: { $gt: age } }).toArray();
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async sortData() {
        try {
            let result = await this.mongoService.getOrdersColleection().find().sort({ productPrice: 1 }).toArray();
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async pagination(page, limit) {
        try {
            const skip = (page - 1) * limit;
            const result = await this.mongoService.getOrdersColleection()
                .find()
                .skip(skip)
                .limit(limit)
                .toArray();
            const totalRecords = await this.mongoService.getOrdersColleection().countDocuments();
            const totalPages = Math.ceil(totalRecords / limit);
            return {
                result, currentPage: page, totalRecords, totalPages
            };
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async lookup() {
        try {
            let result = await this.mongoService.getOrdersColleection().aggregate([
                {
                    $lookup: {
                        from: "SALES",
                        localField: "productName",
                        foreignField: "itemName",
                        as: "inventory"
                    }
                }
            ]).toArray();
            return result[0];
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async groupAggregate() {
        try {
            let result = await this.mongoService.getOrdersColleection().aggregate([
                {
                    $group: {
                        _id: "productName",
                        total: { $sum: "$productPrice" },
                        avg: { $avg: "$productPrice" },
                        ttQuantity: { $sum: "$quantity" },
                        avgQunatity: { $avg: "$quantity" },
                        count: { $count: {} }
                    }
                }
            ]).toArray();
            return result;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongodb_service_1.mongoService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map