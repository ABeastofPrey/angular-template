import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SignOutService } from 'src/app/core-features/auth/services/sign-out/sign-out.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private signOut: SignOutService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if ([401, 403].indexOf(err.status) !== -1) {
        this.signOut.signOut();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
