// Dependencies
import { AuthGuard } from '@nestjs/passport'

// Auth guard
export class JtwAuthGuard extends AuthGuard('jwt') {
  
}