import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import { User } from 'src/app/share/models';
import { ApiService } from 'src/app/share/services';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthServiceService } from '../auth/auth-service.service';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private api: ApiService, private auth: AuthServiceService) { }

  public signIn({ phone, password }: { phone: string, password: string }): void {
    const hash = MD5(password).toString();
    const user = new User('13585845432', '123456');
    this.api.post<User, { token: string }>('auth/login', user)
    .pipe(
      tap(res => {
        console.log(res.body?.token);
      })
      // tap(({ data: { token } }) => this.auth.saveToken(token)),
      // map(() => true),
      // catchError((err: HttpErrorResponse) => {
      //   console.warn(err);
      //   return of(null);
      // })
    )
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.warn(err);
      }
    });
  }
}
