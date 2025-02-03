import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoService } from './mongodb.service';
import { resgisterService } from './register/register.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterController } from './register/register.controller';
import { SalesService } from './sales/sales.service';
import { SalesController } from './sales/sales.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { AuthMiddlewareController } from './auth-middleware/auth-middleware.controller';
import { AuthMiddlewareService } from './auth-middleware/auth-middleware.service';
import { GateWayController } from './gate-way/gate-way.controller';
import { GateWayService } from './gate-way/gate-way.service';
import { webhookGateway } from './websocket/websocket-gateway';
import { WebhookController } from './webhook/webhook.controller';
import { WebhookService } from './webhook/webhook.service';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController,RegisterController, SalesController, OrdersController, AuthMiddlewareController, GateWayController, WebhookController, FileController, UserController],
  providers: [AppService,mongoService,resgisterService,JwtService,SalesService, OrdersService, AuthMiddlewareService, GateWayService,webhookGateway, WebhookService, FileService, UserService],
  exports:[mongoService,resgisterService,SalesService]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddlewareService)
    .forRoutes(
      {path:"orders/groupAggregate", method:RequestMethod.GET },
      {path:"user/create", method:RequestMethod.POST},
      {path:"user/getUser/:userId",method:RequestMethod.GET}
    )
  }
}
