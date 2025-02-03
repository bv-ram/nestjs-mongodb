import { Injectable } from '@nestjs/common';
import axios from "axios"
@Injectable()
export class GateWayService {
    private services = {
        users : "http://localhost:3004/get"
    }
    async forwardRequest(endPoint,data){
        const url = `${this.services.users}${endPoint}`
        console.log(url,'url');
        
        try {
            const response = await axios.get(url,data)
            return response.data
        } catch (error) {
            throw new Error(`Error forwarding request to: ${error.message}`);
        }
    }
}
