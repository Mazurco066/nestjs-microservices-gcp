// Dependencies
import { AuthGuard } from '@nestjs/passport'

// Auth guard
export class JwtAuthGuard extends AuthGuard('jwt') {
  
}