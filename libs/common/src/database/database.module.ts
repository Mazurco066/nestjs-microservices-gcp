// Dependencies
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { ConfigModule } from '../config'

// Module setup
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfgService: ConfigService) => ({
        uri: cfgService.get('MONGODB_URI')
      }),
      inject: [ConfigService]
    })
  ]
})

// Module exports
export class DatabaseModule {}
