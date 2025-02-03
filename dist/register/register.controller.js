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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
let RegisterController = class RegisterController {
    constructor(resgisterService) {
        this.resgisterService = resgisterService;
    }
    async getAllUsers() {
        try {
            let data = await this.resgisterService.getAllUsers();
            return {
                message: "data retrieved",
                data: data
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async register(body) {
        try {
            let user = await this.resgisterService.registerUser(body);
            return {
                message: "registered Successfully",
                data: user
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(body) {
        try {
            let user = await this.resgisterService.login(body);
            return {
                message: "login Successfully",
                data: user
            };
        }
        catch (error) {
            throw new common_1.HttpException("error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Get)("allUsers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "login", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)("newUser"),
    __metadata("design:paramtypes", [register_service_1.resgisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map