// Dependencies
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// Common modules
import { DatabaseModule } from '@app/common'

// Root module
@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})

// Export app
export class AppModule {}
