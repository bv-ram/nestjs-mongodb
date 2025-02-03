import { WebSocketGateway, WebSocketServer, OnGatewayInit, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server , Socket} from 'socket.io';
import { Injectable, Logger } from '@nestjs/common';





@WebSocketGateway( {
    cors: {origin: '*'},
  })
@Injectable()

export class webhookGateway implements OnGatewayConnection{


    @WebSocketServer()
    server: Server;
  

    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
      client.emit('connection', 'Welcome to the WebSocket server!');
    }
  

    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() data: { sender: string; message: string }) {
      console.log('Received message:', data);
      this.server.emit('message', data);
      return { event: 'message', data }; 
    }
 

}