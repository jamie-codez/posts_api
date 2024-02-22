import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { Observable } from 'rxjs';

@Injectable()
export class DoesUserExistGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.body.email;
    return this.userService.findOneByEmail(email).then((user) => {
      if (user) {
        throw new ForbiddenException('User already exists');
      }
      return true;
    });
  }
}
