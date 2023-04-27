// Dependencies
import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable, of, tap } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { AUTH_SERVICE } from '../constants'

// Reusable microservices auth guard
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt = 
      context.switchToHttp().getRequest().cookies?.Authentication ||
      context.switchToHttp().getRequest().headers?.authentication
    if (!jwt) return false
    return this.authClient.send('authenticate', {
      Authentication: jwt
    }).pipe(
      tap((res) => {
        context.switchToHttp().getRequest().user = res
      }),
      map(() => true),
      catchError(() => of(false))
    )
  }
}