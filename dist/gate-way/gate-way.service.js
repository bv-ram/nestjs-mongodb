"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GateWayService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GateWayService = class GateWayService {
    constructor() {
        this.services = {
            users: "http://localhost:3004/get"
        };
    }
    async forwardRequest(endPoint, data) {
        const url = `${this.services.users}${endPoint}`;
        console.log(url, 'url');
        try {
            const response = await axios_1.default.get(url, data);
            return response.data;
        }
        catch (error) {
            throw new Error(`Error forwarding request to: ${error.message}`);
        }
    }
};
exports.GateWayService = GateWayService;
exports.GateWayService = GateWayService = __decorate([
    (0, common_1.Injectable)()
], GateWayService);
//# sourceMappingURL=gate-way.service.js.map