import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // this will allow global validation pipes
  // whitelist true will strip out injection in our dto
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(3333);
}
bootstrap();
