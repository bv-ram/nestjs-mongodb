import { OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class webhookGateway implements OnGatewayConnection {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleMessage(data: {
        sender: string;
        message: string;
    }): {
        event: string;
        data: {
            sender: string;
            message: string;
        };
    };
}
