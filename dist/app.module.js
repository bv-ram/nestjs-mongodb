"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongodb_service_1 = require("./mongodb.service");
const register_service_1 = require("./register/register.service");
const jwt_1 = require("@nestjs/jwt");
const register_controller_1 = require("./register/register.controller");
const sales_service_1 = require("./sales/sales.service");
const sales_controller_1 = require("./sales/sales.controller");
const orders_service_1 = require("./orders/orders.service");
const orders_controller_1 = require("./orders/orders.controller");
const auth_middleware_controller_1 = require("./auth-middleware/auth-middleware.controller");
const auth_middleware_service_1 = require("./auth-middleware/auth-middleware.service");
const gate_way_controller_1 = require("./gate-way/gate-way.controller");
const gate_way_service_1 = require("./gate-way/gate-way.service");
const websocket_gateway_1 = require("./websocket/websocket-gateway");
const webhook_controller_1 = require("./webhook/webhook.controller");
const webhook_service_1 = require("./webhook/webhook.service");
const file_controller_1 = require("./file/file.controller");
const file_service_1 = require("./file/file.service");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_service_1.AuthMiddlewareService)
            .forRoutes({ path: "orders/groupAggregate", method: common_1.RequestMethod.GET }, { path: "user/create", method: common_1.RequestMethod.POST }, { path: "user/getUser/:userId", method: common_1.RequestMethod.GET });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, register_controller_1.RegisterController, sales_controller_1.SalesController, orders_controller_1.OrdersController, auth_middleware_controller_1.AuthMiddlewareController, gate_way_controller_1.GateWayController, webhook_controller_1.WebhookController, file_controller_1.FileController, user_controller_1.UserController],
        providers: [app_service_1.AppService, mongodb_service_1.mongoService, register_service_1.resgisterService, jwt_1.JwtService, sales_service_1.SalesService, orders_service_1.OrdersService, auth_middleware_service_1.AuthMiddlewareService, gate_way_service_1.GateWayService, websocket_gateway_1.webhookGateway, webhook_service_1.WebhookService, file_service_1.FileService, user_service_1.UserService],
        exports: [mongodb_service_1.mongoService, register_service_1.resgisterService, sales_service_1.SalesService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map