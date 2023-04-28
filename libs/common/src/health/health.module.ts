// Dependencies
import { Module } from '@nestjs/common'
import { HealthController } from './health.controller'

// Module Setup
@Module({
  controllers: [HealthController]
})

// Export Health module
export class HealthModule {}