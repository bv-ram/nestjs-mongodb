import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './interceptor/interceptor';

async function bootstrap() {

  const app = await NestFactory.create(AppModule,{cors:true});
  app.useGlobalInterceptors(new LoggerInterceptor())
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
