// Dependencies
import { Injectable } from '@nestjs/common'
import { NotifyEmailDto } from './dto'

@Injectable()
export class NotificationsService {
  
  async notifyEmail({ email }: NotifyEmailDto) {
    console.log('[notify email here]', email)
  }
}
