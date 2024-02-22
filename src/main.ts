import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ValidateInputPipe } from './core/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set up the global prefix
  app.setGlobalPrefix('api/v1');
  // Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('Post API')
    .setDescription('The Post API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3000);
}
bootstrap();
