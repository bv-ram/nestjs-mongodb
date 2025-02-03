import { webhookGateway } from 'src/websocket/websocket-gateway';
export declare class WebhookController {
    private webSocket;
    constructor(webSocket: webhookGateway);
    craeteSocket(body: any): Promise<{
        event: string;
        data: {
            sender: string;
            message: string;
        };
    }>;
}
