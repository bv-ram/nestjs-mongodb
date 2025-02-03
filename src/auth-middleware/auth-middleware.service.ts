import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import * as jwt from "jsonwebtoken"
@Injectable()
export class AuthMiddlewareService implements NestMiddleware{
   use(req:Request, res:Response, next:NextFunction){
    const token = req.headers['authorization']?.split(" ")[1]

    
    
    if(!token){
        throw new UnauthorizedException("no token Provided")
    }
    try {
        const decoded = jwt.verify(token, 'jwtram')
        
        req['user'] = decoded
        next()
    } catch (error) {
        throw new UnauthorizedException("Invalid or expired token")
    }
   }
}
