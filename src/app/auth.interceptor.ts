import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './login/usuarios.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: UsersService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'http://localhost:3000/api/auth/') {
      return next.handle(req);
    } else {
      const authHeader = `Bearer ${this.auth.tokenLogin}`;
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authHeader),
      });

      return next.handle(req);
    }
  }
}
