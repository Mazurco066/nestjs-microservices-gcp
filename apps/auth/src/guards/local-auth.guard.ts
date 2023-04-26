// Dependencies
import { AuthGuard } from '@nestjs/passport'

// Auth guard for local strategy
export class LocalAuthGuard extends AuthGuard('local') {

}