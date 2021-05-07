import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core-features/auth/services/auth/auth.service';
import { LocalStorage } from '@app/_share-utils';

@Injectable()
export class AuthInterceptor extends AuthService implements HttpInterceptor {

  constructor(@Inject(LocalStorage) protected localStorage: Storage) {
    super(localStorage);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('/login') !== -1) return next.handle(request);

    const token = this.getToken();
    const authRequest = request.clone({ setHeaders: { Authorization: token } });
    return next.handle(authRequest);
  }
}
