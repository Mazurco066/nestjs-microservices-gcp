// Dependencies
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Logger } from 'nestjs-pino'
import { AuthModule } from './auth.module'

// Auth service server
async function bootstrap() {
  const app = await NestFactory.create(AuthModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))
  await app.listen(3001)
}

// Start
bootstrap()
