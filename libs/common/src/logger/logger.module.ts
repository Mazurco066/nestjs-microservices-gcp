// Dependencies
import { Module } from '@nestjs/common'
import { LoggerModule as PinoModule } from 'nestjs-pino'

// Setup module
@Module({
  imports: [
    PinoModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true
          }
        }
      }
    })
  ]
})

// Export logger module
export class LoggerModule {}
