import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Налаштування CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'https://tysha-5cac6.web.app'],  // Дозволяємо запити тільки з цього домену
    methods: 'GET,POST,PUT,DELETE',  // Дозволяємо тільки ці методи
    allowedHeaders: 'Content-Type, Authorization', // Дозволяємо лише ці заголовки
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
