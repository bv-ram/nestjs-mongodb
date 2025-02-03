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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_service_1 = require("../mongodb.service");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor(mongoService) {
        this.mongoService = mongoService;
    }
    getUserId() {
        return `userId-${(0, uuid_1.v4)()}`;
    }
    async createUser(body) {
        let savedUser;
        try {
            let userId = this.getUserId();
            body['userId'] = userId;
            let user = await this.mongoService.getUserReg().insertOne(body);
            if (user.acknowledged) {
                savedUser = await this.mongoService.getUserReg().findOne({ _id: user.insertedId });
            }
            return savedUser;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async getUserById(userId) {
        try {
            let user = await this.mongoService.getUserReg().findOne({ userId: userId });
            return user;
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
    async getAllUsers(page, limit) {
        let skip = (page - 1) * limit;
        try {
            let users = await this.mongoService.getUserReg()
                .find()
                .sort({ _id: -1 })
                .skip(skip)
                .limit(limit)
                .toArray();
            let total = await this.mongoService.getUserReg().countDocuments();
            let pages = Math.ceil(total / limit);
            return { users, currentPage: page, total, pages };
        }
        catch (error) {
            throw new Error("error occured");
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongodb_service_1.mongoService])
], UserService);
//# sourceMappingURL=user.service.js.map