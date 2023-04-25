// Dependencies
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Logger } from 'nestjs-pino'
import { ReservationsModule } from './reservations.module'

// Main service server
async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))
  await app.listen(3000)
}

// Start
bootstrap()