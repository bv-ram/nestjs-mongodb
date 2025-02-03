import { Controller, Get, Param } from '@nestjs/common';
import { GateWayService } from './gate-way.service';

@Controller('gate-way')
export class GateWayController {
    constructor(private gatewayService:GateWayService){}
    @Get("users")
    async getUser(){
        return this.gatewayService.forwardRequest( "/getin", null)
    }
}
