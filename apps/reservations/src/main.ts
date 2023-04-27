// Dependencies
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Logger } from 'nestjs-pino'
import * as cookieParser from 'cookie-parser'
import { ReservationsModule } from './reservations.module'

// Main service server
async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule)
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))
  const configService = app.get(ConfigService)
  await app.listen(configService.get<number>('HTTP_PORT'))
}

// Start
bootstrap()