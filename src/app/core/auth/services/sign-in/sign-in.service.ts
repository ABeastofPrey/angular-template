import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import { User } from 'src/app/share/models';
import { ApiService } from 'src/app/share/services';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  public signIn({ phone, password }: { phone: string, password: string }): void {
    // const hash = MD5(password).toString();
    const user = new User(phone, password);
    this.api.post<User, { token: string }>('auth/login', user).pipe(
        tap(res => {
          res.body && this.auth.saveToken(res.body.token);
        })
      )
      .subscribe({
        next: (res: HttpResponse<{ token: string }>) => {
          this.router.navigate(['/']);
        },
        error: (err: HttpErrorResponse) => {
          console.dir(err);
        }
      });
  }
}
