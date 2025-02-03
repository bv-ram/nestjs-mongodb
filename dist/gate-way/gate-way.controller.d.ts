import { GateWayService } from './gate-way.service';
export declare class GateWayController {
    private gatewayService;
    constructor(gatewayService: GateWayService);
    getUser(): Promise<any>;
}
