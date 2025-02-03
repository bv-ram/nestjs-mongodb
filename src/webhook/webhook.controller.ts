import { Body, Controller, Post } from '@nestjs/common';
import { webhookGateway } from 'src/websocket/websocket-gateway';

@Controller('webhook')
export class WebhookController {
    constructor(private webSocket:webhookGateway){

    }
    @Post("socket")
    async craeteSocket(@Body() body:any){
        try {
            let socket = this.webSocket.handleMessage(body)
            return socket
        } catch (error) {
            throw new Error("error occured")
        }
    }
}
