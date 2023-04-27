// Dependencies
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { Logger } from 'nestjs-pino'
import { NotificationsModule } from './notifications.module'
import { Transport } from '@nestjs/microservices'

// Auth service server
async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule)
  const configService = app.get(ConfigService)
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get<number>('TCP_PORT')
    }
  })
  app.useLogger(app.get(Logger))
  await app.startAllMicroservices()
}

// start
bootstrap()