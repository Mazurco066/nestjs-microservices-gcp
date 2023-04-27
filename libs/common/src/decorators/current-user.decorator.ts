// Dependencies
import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserDocument } from '../models'

// Get user by context function
const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user
}

// Current user decorator
export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => getCurrentUserByContext(context)
)