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
exports.mongoService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let mongoService = class mongoService {
    constructor() {
        this.MONGODB_NAME = 'newUsers';
        this.MONGO_USER_COLLECTION_NAME = 'USERS';
        this.MONGO_SALES_COLLECTION_NAME = "SALES";
        this.MONGO_ORDERS_COLLECTION_NAME = "ORDERS";
        this.MONGO_FILES_COLLECTION_NAME = "FILES";
        this.MONGO_USERS_COLLECTION_NAME = "USER_REG";
        this.mongoClient = new mongodb_1.MongoClient('mongodb+srv://ramu:QHOpGf3U6zmo9vmw@cluster0.b39h3vm.mongodb.net/');
    }
    async onModuleInit() {
        await this.connect();
    }
    async connect() {
        try {
            await this.mongoClient.connect();
            this.DB = this.mongoClient.db(this.MONGODB_NAME);
            console.log('Connected to MongoDB');
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
    getFilesCollection() {
        return this.DB.collection(this.MONGO_FILES_COLLECTION_NAME);
    }
    getNewUserCollection() {
        return this.DB.collection(this.MONGO_USER_COLLECTION_NAME);
    }
    getSalesCollection() {
        return this.DB.collection(this.MONGO_SALES_COLLECTION_NAME);
    }
    getOrdersColleection() {
        return this.DB.collection(this.MONGO_ORDERS_COLLECTION_NAME);
    }
    getUserReg() {
        return this.DB.collection(this.MONGO_USERS_COLLECTION_NAME);
    }
};
exports.mongoService = mongoService;
exports.mongoService = mongoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], mongoService);
//# sourceMappingURL=mongodb.service.js.map