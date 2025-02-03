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
exports.resgisterService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongodb_service_1 = require("../mongodb.service");
const jwt = require("jsonwebtoken");
let resgisterService = class resgisterService {
    constructor(mongoService) {
        this.mongoService = mongoService;
    }
    async registerUser(body) {
        try {
            const hashedPassword = await bcrypt.hash(body.password, 10);
            const existingUser = await this.mongoService.getNewUserCollection().findOne({ email: body.email });
            if (existingUser) {
                throw new Error('User already exists');
            }
            const result = await this.mongoService.getNewUserCollection().insertOne({ email: body.email, password: hashedPassword });
            return result;
        }
        catch (error) {
        }
    }
    async login(body) {
        const user = await this.mongoService.getNewUserCollection().findOne({ email: body.email });
        console.log(user, "user");
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const bcryptPassword = await bcrypt.compare(body.password, user.password);
        console.log(bcryptPassword, "bcryptPassword");
        const payload = { email: user.email };
        const token = { accessToken: jwt.sign(payload, 'jwtram', { expiresIn: '12h' }) };
        body.token = token.accessToken;
        return body;
    }
    async getAllUsers() {
        return this.mongoService.getNewUserCollection().find().toArray();
    }
};
exports.resgisterService = resgisterService;
exports.resgisterService = resgisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongodb_service_1.mongoService])
], resgisterService);
//# sourceMappingURL=register.service.js.map