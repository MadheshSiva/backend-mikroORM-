import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(express.json())
  app.enableCors({
    origin : "*"
  })
  
  await app.listen(5000);
}
bootstrap();
