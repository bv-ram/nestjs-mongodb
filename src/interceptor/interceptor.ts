import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
@Injectable()

export class LoggerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
       const now = Date.now()
       console.log('Request started...');

       return next.handle().pipe(
        tap(()=>{
            const timeTaken = Date.now() - now
            console.log(`Request completed in ${timeTaken}ms`);
        })
       )
       
    }
    
}