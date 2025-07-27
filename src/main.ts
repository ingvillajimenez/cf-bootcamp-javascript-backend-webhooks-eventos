import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// https://docs.github.com/en/webhooks/using-webhooks/handling-webhook-deliveries
// npm install --global smee-client
// smee --url https://smee.io/MaUuCGZ5c93IvGwE --path /github --port 3000
