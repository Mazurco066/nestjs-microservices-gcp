// Dependencies
import { Module } from '@nestjs/common'
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'

// Module setup
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (cfgService: ConfigService) => ({
        uri: cfgService.get<string>('MONGODB_URI')
      }),
      inject: [ConfigService]
    })
  ]
})

// Module exports
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models)
  }
}
